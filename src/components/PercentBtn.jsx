// import { useState } from "react";
import "./PercentBtn.scss";

export default function PercentBtn({ buttonArr, getBtnValue, btnValue
 }) {



 
  return (
    <div className="btns">
      {buttonArr.map((item) => {
        
        return (
          <button
            onClick={getBtnValue}
            value={item.number}
            className={`btn ${+btnValue===item.number?"active":""}`}
            key={item.id}
            // className="btn"
            
          >
            {item.number}%
          </button>
        );
      })}{" "}
      <input
        className="percent-input"
        type="number"
        placeholder="Costom"
        value={btnValue}
        onChange={getBtnValue}
      />{" "}
    </div>
  );
}
