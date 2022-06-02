import React, {useState} from 'react';

const Calc = () => {
    const [value, setValue] = useState('');
    const regex = /[^\d+-/*]/g;

    const Button = props => {
        return <button onClick = {addInput}>{props.text}</button>;
    }

    function addInput(text){
        setValue(value+text.target.innerText);
    }

    function parse() {
        let result = document.querySelector('.result');
        result.value = eval(`${result.value.replace(regex,'')}`);

        setValue(result.value);
    }


    return (
        <div className="calc">
            <div className="display">
                <input onChange={event => setValue(event.target.value.replace(regex,''))} className="result" value={value} type="text"/>
            </div>
            <div className="buttons">
                <div className="row">
                    <Button text="7"/>
                    <Button text="8"/>
                    <Button text="9"/>
                    <Button text="*"/>
                </div>
                <div className="row">
                    <Button text="4"/>
                    <Button text="5"/>
                    <Button text="6"/>
                    <Button text="/"/>
                </div>
                <div className="row">
                    <Button text="1"/>
                    <Button text="2"/>
                    <Button text="3"/>
                    <Button text="-"/>
                </div>
                <div className="row">
                    <Button text="+"/>
                    <Button text="0"/>
                    <Button text="."/>
                    <button onClick={parse}>=</button>
                </div>
            </div>
        </div>
    );
};

export default Calc;