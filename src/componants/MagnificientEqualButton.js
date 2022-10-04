import '../styles/AmazingNumberButton.css'

function MagnificientEqualButton (props){

    return <button className="equal" onClick={()=>(props.equal())}>=</button>

}
export default MagnificientEqualButton