import React, { useState } from "react";
import './area.css';
function Area() {
    const [result, setResult]=useState("√s(s-a)(s-b)(s-c)");
    function calculate(){
        let len1 = document.querySelector(".len1").value;
        let len2 = document.querySelector(".len2").value;
        let len3 = document.querySelector(".len3").value;
        if(len1=="" || len2=="" || len3=="") {
            setResult("uh-oh! looks like you missed something!")
        } else {
            len1=Number(len1);
            len2=Number(len2);
            len3=Number(len3);
            if((len1+len2 > len3) && (len2+len3 > len1) && (len3+len1>len2)) {
                let s= (len1+len2+len3)/2;
                let area=s*(s-len1)*(s-len2)*(s-len3);
                area=Math.sqrt(area);
                setResult("area of the triangle is "+area.toPrecision(4));
            } else {
                setResult("uh-oh! this is not a valid triangle.");
            }
        }
    }
    return (
        <div className="check">
            <div className="check-name">calculate area of a triangle</div>
            <div className="box">
                <div className="angle-name">Enter length of First side</div>
                <input type="number" min="0" className="len1 angle-input"></input>
            </div>
            <div className="box">
                <div className="angle-name">Enter length of Second side</div>
                <input type="number" min="0" className="len2 angle-input"></input>
            </div>
            <div className="box">
                <div className="angle-name">Enter length of Third side</div>
                <input type="number" min="0" className="len3 angle-input"></input>
            </div>
            <a className="check-button" onClick={()=>calculate()}>calculate</a>
            <div className="result">{result}</div>
        </div>
    )
}

export default Area;