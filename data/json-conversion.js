const fs = require("fs");

function convertTextToJSON(inputText) {
  const jsonArray = [];
  let currentId = 1;

  const lines = inputText.split(/\n(?=Q\d+:)/);

  for (const block of lines) {
    const [questionLine, ...answerAndProofTexts] = block.split(/\n/);

    const questionMatch = questionLine.match(/^Question (\d+): (.+)$/);
    if (!questionMatch) continue;

    const id = parseInt(questionMatch[1]);
    const question = questionMatch[2];

    const answerMatch = answerAndProofTexts[0].match(/^Answer \d+: (.+)$/);
    if (!answerMatch) continue;

    const answer = answerMatch[1].split(/[[]\d+]/).map((ans) => ans.trim());

    const proofTexts = [];
    for (let i = 1; i < answerAndProofTexts.length; i++) {
      const proofLine = answerAndProofTexts[i];
      const match = proofLine.match(/^\d+\.\s(.+)$/);
      if (match) {
        const verses = match[1].split(";").map((verse) => verse.trim());
        const proofTextObjects = verses.map((verse) => {
          const verseMatch = verse.match(/^(\w+\.)?\s?(\d+:\d+-?\d*)/);
          return verseMatch
            ? {
                book: verseMatch[1] ? verseMatch[1].trim() : "",
                verse: verseMatch[2].trim(),
                text: "",
              }
            : null;
        });
        proofTexts.push(proofTextObjects);
      }
    }

    jsonArray.push({
      id: currentId,
      question: question,
      answer: answer,
      proofTexts: proofTexts,
    });

    currentId++;
  }

  return jsonArray;
}

function processInputFile(inputFilePath) {
  try {
    const content = fs.readFileSync(inputFilePath, "utf8");
    const jsonArray = convertTextToJSON(content);
    return jsonArray;
  } catch (err) {
    console.error("Error:", err.message);
    return [];
  }
}

// Provide the input file path here
const inputFilePath = "data/text_blocks.txt";
const largerCatechism = processInputFile(inputFilePath);

// Export the largerCatechism array
const outputFilePath = "data/output_data.js";
const jsOutput = `const largerCatechism = ${JSON.stringify(
  largerCatechism,
  null,
  2
)};\n\nmodule.exports = { largerCatechism };`;

fs.writeFileSync(outputFilePath, jsOutput, "utf8");
console.log(`Conversion successful. JSON data written to ${outputFilePath}`);
