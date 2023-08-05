import React from "react";

const Catechism = ({ data }) => {
  const { id, question, answer, proofTexts } = data;
  return (
    <div className="catechism-container">
      <h3 className="question-title">
        Question {id}: {question}
      </h3>
      <h3 className="answer-title">Answer {id}:</h3>{" "}
      <div className="answer-text-container">
        <p>
          {answer.map((item, index) => {
            return (
              <span key={index} className="answer-text">
                {item} <span className="proof-text-num">[{index + 1}] </span>
              </span>
            );
          })}
        </p>
      </div>
      <div className="proof-text-container">
        <ol>
          {proofTexts.map((texts, index) => {
            return (
              <li key={index}>
                {texts.map((item, i) => {
                  return `${item.book} ${item.verse}${
                    i === texts.length - 1 ? "" : "; "
                  }`;
                })}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Catechism;
