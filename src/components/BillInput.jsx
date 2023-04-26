
import "./BillInput.scss";
export default function BillInput({inputValue, getValue}) {
 
 
  return <input type="number" onChange={getValue} value={inputValue} className="bill-input" />;
}
