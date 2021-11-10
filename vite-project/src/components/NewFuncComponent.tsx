import { useState } from 'react'
import ChildComp from './ChildComp';
import InputText from './InputText';
import Button2 from './Button2';
import Button from './Button2';
function MyFunc() {
    const [humaraApna, humaraApnaSetter] = useState("");
    const [humaraApnaSecond, humaraApnaSecondSetter] = useState("");
    const [results, setResults] = useState(0);

    const addNumber = () => {
        const sum = Number(humaraApna) + Number(humaraApnaSecond);
        setResults(sum)
    }
    /**
     * 
     * @param e 
     * Step 1 - Check if event & target actually exists
     * Step 2 - Destructure event element
     * Step 3 - Write a regex to check if it's a valid number
     * Step 3.1 - If regex failed, return the method
     * Step 4 - Check if name is a valid string or key
     * Step 4.1 - If failed, simply return
     */
    const _handleInputChage = (e: any) => {

        console.log('@AJ Event Key', e)
        if (!e || !e.target) {
            console.log('Not a valid event')
            return;
        }

        const { name, value } = e.target;

        // write regEx to check if the value is only number

        // Check name attribute
        if (!name) { // "", null, undefined & false, NaN
            console.log('Name attribute is missing')
            return;
        }

        switch (name) {
            case 'firstNumber':
                humaraApnaSetter(value);
                return;
            case 'secondNumber':
                humaraApnaSecondSetter(value);
                return;
            default:
                console.log('The name property is not available');
                return
        }

    }

    console.log('Re-render: ', humaraApna)
    return <>
        <p>My Calculator</p>
        <div className="results">
            <ChildComp data={results} name={''} city={''}/>
        </div>
        <div className="form row">
            <InputText label="First Number" type="number" identifier="firstNumber" onChange={_handleInputChage} placeholder="Enter First Number" />
            <InputText label="Second Number" type="number" identifier="secondNumber" onChange={_handleInputChage} placeholder="Enter Second Number" />

            <Button className="button2" onClick={addNumber} border="none" radius="5px" color="red" height = "50px" width = "80px" children="Add Numbers"/>

        </div>
    </>
}

export default MyFunc 