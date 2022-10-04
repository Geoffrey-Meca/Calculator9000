import '../styles/AmazingNumberButton.css'

function Button(props){

    return (props.number.map((number) => (
        <button key={number} className="padNumber" onClick={()=>{props.callBack(number)}}>{number}</button>   
    )))  
}
export default Button