
import './App.css';
import Button from './Button'
import QuestionSet3 from './QuestionSet3.json';
import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating'


var arr = [];
for (let i = 0; i < QuestionSet3.length; i++) {

    arr.push('Wrong');
}
var arr2 = [];
for (let i = 0; i < QuestionSet3.length; i++) {

    arr2.push(' ' + (i + 1));
}



function Set3() {
    const [count, counter] = useState(0);
    const [text, setText] = useState("next");
    const [score, setScore] = useState(0);
    const [star, setStar] = useState(0)


  




    const starHandler = (rate: number) => {
        setStar(rate)

    }


    const nextClick = () => {

        if (count < QuestionSet3.length) {
            counter(count + 1);
            console.log(QuestionSet3.length);
            console.log(count);

        }

        if (count == QuestionSet3.length - 1) {
            setText("finish");
        }


    }
    const prevClick = () => {

        if (count > 0) {
            counter(count - 1);
            console.log(QuestionSet3.length);
            console.log(count);

        }
        if (count == QuestionSet3.length - 2) {

        } else {
            setText("next");

        }


    }

    const aClick = () => {

        if (QuestionSet3[count].answers[0] == QuestionSet3[count].correct) {

            setScore(score + 1);
            arr[count] = 'Correct';
        }
        nextClick();

    }
    const bClick = () => {
        console.log(QuestionSet3[count].answers[0]);
        console.log(QuestionSet3[count].correct);
        if (QuestionSet3[count].answers[1] == QuestionSet3[count].correct) {
            console.log("working" + score);
            setScore(score + 1);
            console.log("working" + score);
            arr[count] = 'Correct';
        }
        console.log(arr[count]);
        nextClick();

    }
    const cClick = () => {

        if (QuestionSet3[count].answers[2] == QuestionSet3[count].correct) {

            setScore(score + 1);
            arr[count] = 'Correct';
        }
        nextClick();

    }

    const dClick = () => {

        if (QuestionSet3[count].answers[3] == QuestionSet3[count].correct) {

            setScore(score + 1);
            arr[count] = 'Correct';
        }
        nextClick();
    }

    const returnToMenu = () => {

        window.location.href = '/menu';
    }


    if (count < QuestionSet3.length) {
        return (


            <div>
                <p class="title"> {QuestionSet3[count].question}</p>
                <div class="buttons is-centered">
                    <p><button class="button" onClick={aClick}>{QuestionSet3[count].answers[0]}   </button>    </p>
                    <p> <button class="button" onClick={bClick}>{QuestionSet3[count].answers[1]} </button>     </p>
                    <p> <button class="button" onClick={cClick}> {QuestionSet3[count].answers[2]} </button>     </p>
                    <p><button class="button" onClick={dClick}> {QuestionSet3[count].answers[3]}   </button>   </p>
                </div>

                <div class="buttons is-centered">
                    <button class="button is-success is-light" onClick={nextClick}> {text}</button>
                    <button class="button is-success is-light" onClick={prevClick}> Previous</button>
                </div>

            </div>


        );
    } else {

        if (score / QuestionSet3.length < 0.5) {

            return (

                <div>

                    <div id="menu" >
                        {arr.map(user => (
                            <p>{user}</p>
                        ))}


                    </div>
                    <br></br>
                    <p >Please revise and try again. </p>
                    <p>Final Score is {score} out of {QuestionSet3.length} </p>
                    <br></br>
                    <div className='App'>
                        <p>How accurate do you think this quiz has tested your research ability out of 5?</p>
                        <Rating onClick={starHandler} ratingValue={star} />
                    </div>
                   
                    <br></br>

                    <p> <button class="button is-success is-light" onClick={returnToMenu}>Return to Menu  </button></p>
                </div>
            )

        } else {

            return (
                <div>
                    <div id="menu" >
                        {arr.map(user => (
                            <p>{user}</p>
                        ))}


                    </div>
                    <br></br>
                    <p >Congratulations. You have passed the quiz </p>
                    <p>Final Score is {score} out of {QuestionSet3.length} </p>
                    <br></br>
                    <div className='App'>
                        <p>How accurate do you think this quiz has tested your research ability out of 5?</p>
                        <Rating onClick={starHandler} ratingValue={star} />
                    </div>
                
                    <br></br>

                    <p> <button class="button is-success is-light" onClick={returnToMenu}>Return to Menu  </button></p>

                </div>
            )




        }


    }
}

export default Set3;
