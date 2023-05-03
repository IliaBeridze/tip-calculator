import "./InfoCard.scss";
import BillInput from "./BillInput";
import PercentBtn from "./PercentBtn";
import QuantityOfPeople from "./QuantityOfPeople";
export default function InfoCard({
  buttonArr,
  inputValue,
  getValue,
  getBtnValue,
  btnValue,
  quantity,
  getQuantity,
}) {
  return (
    <div className="info-card">
      <p className="title">Bill</p>

      <BillInput getValue={getValue} inputValue={inputValue} />

      <p className="title">Select Tip %</p>
      <PercentBtn
        
        buttonArr={buttonArr}
        btnValue={btnValue}
        getBtnValue={getBtnValue}
      />
      <p className="title">Number of People</p>

      <QuantityOfPeople quantity={quantity} getQuantity={getQuantity} />
    </div>
  );
}
