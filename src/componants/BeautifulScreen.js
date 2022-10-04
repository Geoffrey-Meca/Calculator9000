import '../styles/BeautifulScreen.css'

function Screen(props){

    const value = props.result

    return <input className="screen" readonly="readonly" value={value ? value : 0 }/>
}
export default Screen