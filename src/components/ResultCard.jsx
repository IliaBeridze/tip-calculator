import "./ResultCard.scss";
import TipAmount from "./TipAmount";
import ResetButton from "./ResetButton";

export default function ResultCard({ reset, total, tipPerPerson }) {
  return (
    <div className="result-card">
      <TipAmount title={"Tip Amount"} number={tipPerPerson} />
      <TipAmount title={"Total"} number={total} />
      <ResetButton reset={reset} />
    </div>
  );
}
