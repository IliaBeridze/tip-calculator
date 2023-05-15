import "./TipAmount.scss";

export default function TipAmount(props) {
  
  return (
    <div className="tip-amount">
      <p>{props.title}</p>
      <div className="tip-number">
        {props.number == NaN ? 0.0 : props.number.toFixed(2)}
      </div>
    </div>
  );
}
