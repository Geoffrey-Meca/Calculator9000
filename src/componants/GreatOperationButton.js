import '../styles/AmazingNumberButton.css'

function OperationButton (props){

     return (props.ops.map((OperationButton) => (
        <button key={OperationButton} className="padOperator" onClick={()=>{props.callBackOp(OperationButton)}}>{OperationButton}</button>
     )))
}
export default OperationButton