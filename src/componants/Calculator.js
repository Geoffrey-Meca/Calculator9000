import '../styles/Calculator.css'
import Button from './AmazingNumberButton'
import OperationButton from './GreatOperationButton'
import MagnificientEqualButton from './MagnificientEqualButton'
import Screen from './BeautifulScreen'
import { useState } from "react"

function Calculator(){
    
    const [number, setNumber] = useState("")
    const numberList          = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const OperationButtonList = ['.', '+', '-', '*', '/', 'C', 'save']
    const calculatorCorp      = document.querySelector('.calculator-corp')
    const divOverNine         = document.querySelector('.overNine')

    const changeCount = (newNumber) => {
        setNumber(number.toString()+newNumber.toString())
    }
    const selectOpeButton = async (newButton) => {
        setNumber(number.toString()+newButton.toString())
        if(newButton === 'C'){
            setNumber("")
        }
        if(newButton === 'save'){

           let res = {result: number}
            let response = await fetch('http://localhost:8888/TestPHP/save.php',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    // "Content-Type": "application/x-www-form-urlencoded"
                  },
                //   body : 'calcul={number}'
                body: JSON.stringify(res)
            })
            setNumber(number)
            console.log(response) 
        }
    }
    const calcul = () => {

        let resultat = eval(number)
        setNumber(resultat)

        if(resultat >'9000'){
            calculatorCorp.classList.add('hidden')
            divOverNine.classList.remove('hidden')
        }
    }
    
    return (
        <div className='calculator-corp'>
            <Screen result={number}/>
            <div className='calculator-Button'>
                <Button number={numberList} callBack={changeCount}/>
                <OperationButton ops={OperationButtonList} callBackOp={selectOpeButton}/>
                <MagnificientEqualButton equal={calcul} />
            </div>
        </div>
    )
}
export default Calculator