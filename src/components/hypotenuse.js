import React, { useState } from "react";
import './hypotenuse.css';
function Hypotenuse() {
    const [result, setResult]=useState("√(base² + height²)");
    function calculate(){
        let base = document.querySelector(".base").value;
        let height = document.querySelector(".height").value;
        if(base=="" || height=="") {
            setResult("uh-oh! looks like you missed something!")
        } else {
            base=Number(base);
            height=Number(height);
            base=Math.pow(base, 2);
            height=Math.pow(height, 2);
            let hypo=Math.sqrt((base+height));
            setResult('length of the hypotenuse is '+hypo);
        }
    }
    return (
        <div className="check">
            <div className="check-name">calculate hypotenuse of a triangle</div>
            <div className="box">
                <div className="angle-name">Enter value of Base</div>
                <input type="number" min="0" className="base angle-input"></input>
            </div>
            <div className="box">
                <div className="angle-name">Enter value of Height</div>
                <input type="number" min="0" className="height angle-input"></input>
            </div>
            <a className="check-button" onClick={()=>calculate()}>calculate</a>
            <div className="result">{result}</div>
        </div>
    )
}

export default Hypotenuse;