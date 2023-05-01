// import { useState } from "react";
import "./PercentBtn.scss";

export default function PercentBtn({
  buttonArr,
  getBtnValue,
  btnValue,
  active,
  onSubmit,
}) {
  let checkClassName = active ? "active" : "";

  // function click() {
  //   getBtnValue();
  //    onSubmit();
  // }
  //   const [active,setActive]=useState(false)

  //   function getBtnValue(){
  // setActive(!active)
  //   }
  return (
    <div className="btns">
      {buttonArr.map((item) => {
        return (
          <button
            onClick={getBtnValue}
            value={item.number}
            className={`btn ${checkClassName}`}

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
