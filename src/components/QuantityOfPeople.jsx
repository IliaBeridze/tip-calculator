import "./QuantityOfPeople.scss";

export default function QuantityOfPeople({quantity, getQuantity}) {
  return <input type="number" className="people-input" onChange={getQuantity} value={quantity}  />;
}
