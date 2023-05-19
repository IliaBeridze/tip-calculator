import "./TipCalculator.scss";
import InfoCard from "./InfoCard";
import ResultCard from "./ResultCard";
import { useState } from "react";

export default function TipCalculator() {
  const percentsBtn = [
    { number: 5, id: 1 },
    { number: 10, id: 2 },
    { number: 15, id: 3 },
    { number: 25, id: 4 },
    { number: 50, id: 5 },
  ];

  const [quantity, setQuantity] = useState(1);
  const [billValue, setBillValue] = useState(0);
  const [btnValue, setBtnValue] = useState("custom");

  function getQuantity(e) {
    setQuantity(e.target.value);
  }

  function getBill(e) {
    setBillValue(e.target.value);
  }

  function getBtnValue(e) {
    setBtnValue(e.target.value);
  }

  function reset() {
    setBillValue(0);
    setBtnValue("custom");
    setQuantity(1);
  }

  const desiredPercent = btnValue === "custom" ? 0 : Number(btnValue);
  const percent = (billValue * desiredPercent) / 100;
  const total = (+billValue + percent) / quantity;
  const tipPerPerson = percent / quantity;

  return (
    <div className="tip-calculator">
      <InfoCard
        inputValue={billValue}
        getValue={getBill}
        quantity={quantity}
        getQuantity={getQuantity}
        buttonArr={percentsBtn}
        btnValue={btnValue}
        getBtnValue={getBtnValue}
      />
      <ResultCard tipPerPerson={tipPerPerson} total={total} reset={reset} />
    </div>
  );
}
