
import './App.css';
import Button from './Button'
import QuestionSet1 from './QuestionSet1.json';
import React, { useState } from 'react';



function Set1() {
    const [count, counter] = useState(0);
    const [text, setText] = useState("next");
    const [score, setScore] = useState(0);

    const nextClick = () => {

        if (count < QuestionSet1.length) {
            counter(count + 1);
            console.log(QuestionSet1.length);
            console.log(count);

        }

        if (count == QuestionSet1.length - 1) {
            setText("finish");
        }


    }
    const prevClick = () => {

        if (count > 0) {
            counter(count - 1);
            console.log(QuestionSet1.length);
            console.log(count);

        }
        if (count == QuestionSet1.length - 2) {

        } else {
            setText("next");

        }


    }

    const aClick = () => {

        if (QuestionSet1[count].answers[0] == QuestionSet1[count].correct) {

            setScore(score + 1);
        }
        nextClick();

    }
    const bClick = () => {
        console.log(QuestionSet1[count].answers[0]);
        console.log(QuestionSet1[count].correct);
        if (QuestionSet1[count].answers[1] == QuestionSet1[count].correct) {
            console.log("working" + score);
            setScore(score + 1);
            console.log("working" + score);
        }
        nextClick();
    }
    const cClick = () => {

        if (QuestionSet1[count].answers[2] == QuestionSet1[count].correct) {

            setScore(score + 1);
        }
        nextClick();

    }

    const dClick = () => {

        if (QuestionSet1[count].answers[3] == QuestionSet1[count].correct) {

            setScore(score + 1);
        }
        nextClick();
    }

    const returnToMenu = () => {

        window.location.href = '/menu';
    }
    if (count < QuestionSet1.length) {
        return (


            <div>
                <p class="title"> {QuestionSet1[count].question}</p>
                <div class="buttons is-centered">
                    <p><button class="button" onClick={aClick}>{QuestionSet1[count].answers[0]}   </button>    </p>
                    <p> <button class="button" onClick={bClick}>{QuestionSet1[count].answers[1]} </button>     </p>
                    <p> <button class="button" onClick={cClick}> {QuestionSet1[count].answers[2]} </button>     </p>
                    <p><button class="button" onClick={dClick}> {QuestionSet1[count].answers[3]}   </button>   </p>
                </div>

                <div class="buttons is-centered">
                    <button class="button is-success is-light" onClick={nextClick}> {text}</button>
                    <button class="button is-success is-light" onClick={prevClick}> Previous</button>
                </div>

            </div>


        );
    } else {

        return (
            <div>

                <p >Final Score is {score}</p>

                <br></br>
                <p> <button class="button is-success is-light" onClick={returnToMenu}>Return to Menu  </button></p>
            </div>
        )
    }
}

export default Set1;
