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
  function TipAmount(percent, quantity) {
    return percent / quantity;
  }

  function Total(bill, percent, quantity) {
    return bill + percent / quantity;
  }
  function getPercent(bill, percent) {
    return (bill * percent) / 100;
  }

  const [billValue, setBillValue] = useState(0);

  function getBill(value) {
    setBillValue(value.target.value);
    console.log(billValue);
  }
  const [btnValue, setBtnValue] = useState(null);
  function getBtnValue(e) {
    setBtnValue(e.target.value);
  }
  const [quantity, setQuantity] = useState(0);
  function getQuantity(e) {
    setQuantity(e.target.value);
    console.log(quantity);
  }
  <div>
        Show pas {getPercent(billValue, btnValue)}
        Show total {Total(billValue, getPercent(billValue, btnValue), quantity)}
        show amount {TipAmount(21, quantity)}
      </div>

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
      <ResultCard />

    </div>
  );
}
