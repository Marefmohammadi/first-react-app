import React, { useState, useRef } from "react";

function Calculator(){
    const inputRef = useRef(null);
    const resultRef = useRef(null);
    const [result, setResult] = useState(0);

    function plus(event){
        event.preventDefault();
        setResult(result => result + Number(inputRef.current.value));
        
    }

    function subtract(event){
        event.preventDefault();
        setResult(result => result - Number(inputRef.current.value));
    }
    function multiple(event){
        event.preventDefault();
        setResult(result => result * Number(inputRef.current.value));
    }

    function divide(event){
        event.preventDefault();
        setResult(result => result / Number(inputRef.current.value));
    }

    function resetInput(event){
        event.preventDefault();
        inputRef.current.value = 0;
    }

    function resetResult(e){
        e.preventDefault();
        setResult(result => result * 0);
    }

    return (

        <div>
            <div>
                <h1>Simplest working Calculator</h1>
            </div>
            <div>
                <form>
                    <p ref={resultRef}>{result}</p>
                    <input 
                        pattern="[0.9]"
                        ref={inputRef}
                        type="number"
                        placeholder="Type a number"
                    />
                    <button onClick={plus}>Add</button>
                    <button onClick={subtract}>Subtract</button>
                    <button onClick={multiple}>Multiple</button>
                    <button onClick={divide}>Divide</button>
                    <button onClick={resetInput}>ResetInput</button>
                    <button onClick={resetResult}>resetResult</button>
                </form>
            </div>
            
        </div>
    );
}

export default Calculator;