import "./ResultCard.scss";
import TipAmount from "./TipAmount";
import ResetButton from "./ResetButton";

export default function ResultCard(props) {
  return (
    <div className="result-card">
      <TipAmount title={"Tip Amount"} number={props.amount} />
      <TipAmount title={"Total"} number={props.total} />
      <ResetButton reset={props.reset} />
    </div>
  );
}
