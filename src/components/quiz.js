import React, { useState } from "react";
import './quiz.css';
function Quiz() {
    const [result, setResult] = useState("");
    function calculate() {
        const quizform = document.querySelector(".quiz-form");
        const correctAnswers = [
            "90°",
            "right angled",
            "one right angle",
            "12, 16, 20",
            "Equilateral triangle",
            "100°",
            "30°",
            "a + b + c",
            "no",
            "45°",
        ];
        const formResults = new FormData(quizform);
        let score = 0, i = 0;
        for (let value of formResults.values()) {
            if (value === correctAnswers[i]) {
                score = score + 1;
            }
            i = i + 1;
        }
        setResult("your score is " + score);
    }
    return (
        <div className="check">
            <div className="check-name">quiz on triangles</div>
            <div className="check-details">for each correct answer you will get 1 point</div>
            <form class="quiz-form">
                <hr />
                <div class="question-container">
                    <p>
                        What is the third angle for the triangle where angle1 = 45° and
                        angle2 = 45°?
                    </p>

                    <label><input type="radio" name="question1" value="45°" />45°</label>
                    <label><input type="radio" name="question1" value="90°" />90°</label>
                    <label><input type="radio" name="question1" value="60°" />60°</label>

                </div>
                <hr />
                <div class="question-container">
                    <p>
                        What is the third angle for the triangle where angle1 = 45° and
                        angle2 = 45°?
                    </p>
                    <label>
                        <input type="radio" name="question2" value="obtuse" />obtuse
                    </label>
                    <label
                    ><input type="radio" name="question2" value="acute" />acute</label
                    >
                    <label
                    ><input type="radio" name="question2" value="right angled" />right
                        angled</label
                    >
                </div>
                <hr />
                <div class="question-container">
                    <p>A triangle can have</p>
                    <label>
                        <input type="radio" name="question3" value="one right angle" />
                        one right angle
                    </label>
                    <label
                    ><input type="radio" name="question3" value="two right angles" />two
                        right angles</label
                    >
                </div>
                <hr />
                <div class="question-container">
                    <p>Which of the following can form a right angled triangle?</p>
                    <label>
                        <input type="radio" name="question4" value="14, 15, 26" />
                        14, 15, 26
                    </label>
                    <label>
                        <input type="radio" name="question4" value="12, 16, 20" />
                        12, 16, 20</label
                    >
                </div>
                <hr />
                <div class="question-container">
                    <p>Which of the following triangles are always similar?</p>
                    <label>
                        <input type="radio" name="question5" value="Equilateral triangle" />
                        Equilateral triangle
                    </label>
                    <label>
                        <input type="radio" name="question5" value="Isosceles triangle" />
                        Isosceles triangle</label
                    >
                </div>
                <hr />
                <div class="question-container">
                    <p>
                        If one angle of a triangle is obtuse, then which one of the
                        following is the possible measure of remaining angles?
                    </p>
                    <label>
                        <input type="radio" name="question6" value="100°" />
                        100°
                    </label>
                    <label>
                        <input type="radio" name="question6" value="85°" />
                        85°</label
                    >
                </div>
                <hr />
                <div class="question-container">
                    <p>
                        If the largest angle in a triangle is 70°, what is the least
                        possible value of the smallest angle of the triangle?
                    </p>
                    <label>
                        <input type="radio" name="question7" value="30°" />
                        30°
                    </label>
                    <label>
                        <input type="radio" name="question7" value="10°" />
                        10°
                    </label>
                </div>
                <hr />
                <div class="question-container">
                    <p>The perimeter of scalene triangle with sides a, b, c is</p>
                    <label>
                        <input type="radio" name="question8" value="a + b + c" />
                        a + b + c
                    </label>
                    <label>
                        <input type="radio" name="question8" value="2a" />
                        2a
                    </label>
                    <label>
                        <input type="radio" name="question8" value="None of these" />
                        None of these
                    </label>
                </div>
                <hr />
                <div class="question-container">
                    <p>A scalene triangle has ___ lines of symmetry</p>
                    <label>
                        <input type="radio" name="question9" value="two" />two
                    </label>
                    <label>
                        <input type="radio" name="question9" value="no" />
                        no
                    </label>
                    <label>
                        <input type="radio" name="question9" value="15" />
                        15
                    </label>
                </div>
                <hr />
                <div class="question-container">
                    <p>
                        There is a right triangle PQR where: angle Q = 90°; angle P = angle
                        R. What is the measure of angles P and R?
                    </p>
                    <label>
                        <input type="radio" name="question10" value="85°" />
                        85°
                    </label>
                    <label>
                        <input type="radio" name="question10" value="65°" />
                        65°
                    </label>
                    <label>
                        <input type="radio" name="question10" value="45°" />
                        45°
                    </label>
                </div>
            </form>
            <a className="check-button" onClick={() => calculate()}>display score</a>
            <div className="result">{result}</div>
            <footer>

            </footer>
        </div>
    )
}

export default Quiz;