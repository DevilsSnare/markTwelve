import React, { useState } from "react";
import './check.css';
function Check() {
    const [result, setResult]=useState("∠1 + ∠2 + ∠3 = 180°");
    function checkfortriangle(){
        let angle1 = document.querySelector(".angle1").value;
        let angle2 = document.querySelector(".angle2").value;
        let angle3 = document.querySelector(".angle3").value;
        if(angle1=="" || angle2=="" || angle3=="") {
            setResult("uh-oh! looks like you missed something!")
        } else {
            angle1=Number(angle1);
            angle2=Number(angle2);
            angle3=Number(angle3);
            if((angle1+angle2+angle3)==180) {
                setResult("yay! this is a valid triangle.");
            } else {
                setResult("uh-oh! this is not a valid triangle.");
            }
        }
    }
    return (
        <div className="check">
            <div className="check-name">check if it is a triangle?</div>
            <div className="box">
                <div className="angle-name">Angle 1</div>
                <input type="number" min="0" className="angle1 angle-input"></input>
            </div>
            <div className="box">
                <div className="angle-name">Angle 2</div>
                <input type="number" min="0" className="angle2 angle-input"></input>
            </div>
            <div className="box">
                <div className="angle-name">Angle 3</div>
                <input type="number" min="0" className="angle3 angle-input"></input>
            </div>
            <a className="check-button" onClick={()=>checkfortriangle()}>check</a>
            <div className="result">{result}</div>
        </div>
    )
}

export default Check;