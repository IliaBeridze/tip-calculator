import "./ResetButton.scss"

export default function ResetButton(props) {
  

  return <button onClick={props.reset} className="reset-button">RESET</button>
}