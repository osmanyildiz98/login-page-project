import React from "react";
import "../css/Result.css";

function Result({ resultMessage }) {
  return (
    <div className="result-container">
      {resultMessage ? <p id="welcome-message">Welcome!</p> : <p>Upps...</p>}
    </div>
  );
}

export default Result;
