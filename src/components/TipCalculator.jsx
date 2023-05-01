import "./TipCalculator.scss";
import InfoCard from "./InfoCard";
import ResultCard from "./ResultCard";
import { useEffect, useState } from "react";

export default function TipCalculator() {
  const percentsBtn = [
    { number: 5, id: 1 },
    { number: 10, id: 2 },
    { number: 15, id: 3 },
    { number: 25, id: 4 },
    { number: 50, id: 5 },
  ];

  const [billValue, setBillValue] = useState(0);

  function getBill(e) {
    setBillValue(e.target.value);
  }

  const [btnValue, setBtnValue] = useState(null);
  function getBtnValue(e) {
    setBtnValue(e.target.value);
    setActiveClass(billValue !== null);
    // getPercent(billValue, btnValue);
    // getAmount(percent, quantity);
    // getTotal(billValue, percent, quantity);
  }

  const [activeClass, setActiveClass] = useState(false);

  function giveActiveClass() {
    setActiveClass(billValue !== null);
  }

  const [percent, setPercent] = useState(0);

  function getPercent(billValue, btnValue) {
    setPercent((billValue * btnValue) / 100);
  }

  const [tipPerPerson, setTipPerPerson] = useState(0.0);
  function getAmount(percent, quantity) {
    setTipPerPerson(percent / quantity);
  }

  const [quantity, setQuantity] = useState(0);
  function getQuantity(e) {
    setQuantity(e.target.value);
  }

  const [total, setTotal] = useState(0);

  function getTotal(billValue, percent, quantity) {
    setTotal((+billValue + percent) / quantity);
  }

  console.log(
    billValue,
    percent,
    quantity,
    "egia igi",
    total,
    "avgia amounti",
    tipPerPerson
  );

  useEffect(() => {
    getPercent(billValue, btnValue);
    getAmount(percent, quantity);
    getTotal(billValue, percent, quantity);
  }, [btnValue]);

  function reset() {
    setBillValue(0);
    setBtnValue(null);
    setPercent(0);
    setQuantity(0);
    setTipPerPerson(0);
    setTotal(0);
  }

  return (
    <div className="tip-calculator">
      <InfoCard
        active={activeClass}
        onSubmit={giveActiveClass}
        inputValue={billValue}
        getValue={getBill}
        quantity={quantity}
        getQuantity={getQuantity}
        buttonArr={percentsBtn}
        btnValue={btnValue}
        getBtnValue={getBtnValue}
      />
      <ResultCard amount={tipPerPerson} total={total} reset={reset} />
    </div>
  );
}
