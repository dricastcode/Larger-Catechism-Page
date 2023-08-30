import React, { useState } from "react";

const Catechism = ({ data }) => {
  const { id, question, answer } = data;

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="catechism-container">
      <div className="accordion-item">
        <h3 className="question-title" onClick={toggleAccordion}>
          Question {id}: {question}
        </h3>
        <div className={`answer-container ${isExpanded ? "expanded" : ""}`}>
          <h3 className="answer-title">Answer {id}:</h3>
          <div className="answer-text-container">
            <p>
              {answer.map((item, index) => (
                <span key={index} className="answer-text">
                  {item} <span className="proof-text-num">[{index + 1}] </span>
                </span>
              ))}
            </p>
          </div>
          <div className="proof-text-container">
            <ol>
              {data.proofTexts
                ? data.proofTexts.map((texts, index) => {
                  return (
                    <li key={index}>
                      {texts.map((item, i) => {
                        return `${item.book} ${item.verse}${i === texts.length - 1 ? "" : "; "}`;
                      })}
                    </li>
                  );
                })
                : null}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catechism;
