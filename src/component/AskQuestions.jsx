import React from "react";
import { FaAngleRight, FaArrowRight } from "react-icons/fa";
import { FaQ } from "react-icons/fa6";

const AskQuestions = () => {
  const questions = [
    {
      faq: "Can I recover deleted files from desktop with this software?",
    },

    {
      faq: "Can I recover deleted files from desktop with this software?",
    },
    {
      faq: "Can I recover deleted files from desktop with this software?",
    },
    {
      faq: "Can I recover deleted files from desktop with this software?",
    },
    {
      faq: "Can I recover deleted files from desktop with this software?",
    },
  ];

  return (
    <>
      <div className="FAQ">
        <h2 className="heading-1">FAQ</h2>
        <h2 className="heading-2">Frequent Ask Questions</h2>
        <div className="question-container">
          {questions.map((question, index) => (
            <div key={index} className="question">
              <ul>
                <li>
                  <p>{question.faq}</p>
                  <span>
                    <FaAngleRight />
                  </span>
                </li>
              </ul>
            </div>
          ))}
        </div>

        <div className="FAQ-btn">
          <button className="about-btn ">
            Show more
            <span>
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default AskQuestions;
