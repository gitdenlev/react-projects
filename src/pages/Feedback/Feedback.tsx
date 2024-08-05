import { useState, useEffect } from "react";
import "./Feedback.scss";
function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handlerGoodFeedback = () => {
    setGood(good + 1);
  };

  const handlerNeutralFeedback = () => {
    setNeutral(neutral + 1);
  };

  const handlerBadFeedback = () => {
    setBad(bad + 1);
  };

  const total = good + neutral + bad;
  const positivePercentage = Math.round((good / total) * 100);

  return (
    <>
      <h1>Please leave feedback</h1>
      <div className="btn__container">
        <button className="handler__btn" onClick={handlerGoodFeedback}>
          Good 😍
        </button>
        <button className="handler__btn" onClick={handlerNeutralFeedback}>
          Neutral 😕
        </button>
        <button className="handler__btn" onClick={handlerBadFeedback}>
          Bad 😔
        </button>
      </div>

      <h2>Statistics</h2>
      {total === 0 ? (
        <h2>No feedback given</h2>
      ) : (
        <>
          <ul className="feedback__list">
            <li>Good - {good}</li>
            <li>Neutral - {neutral}</li>
            <li>
              Bad - <span>{bad}</span>
            </li>
          </ul>
          <h2>Total - {total}</h2>
          <h2>Positive feedback: {positivePercentage}%</h2>
        </>
      )}
    </>
  );
}

export default Feedback;
