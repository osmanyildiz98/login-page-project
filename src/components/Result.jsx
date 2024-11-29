import React from "react";

function Result({ resultMessage }) {
  return (
    <div className="result-container">
      {resultMessage ? <p>Welcome!</p> : <p>Upps...</p>}
    </div>
  );
}

export default Result;
