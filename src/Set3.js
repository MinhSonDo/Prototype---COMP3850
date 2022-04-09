
import './App.css';
import Button from './Button'
import QuestionSet3 from './QuestionSet3.json';
import React, { useState } from 'react';



function Set3() {
    const [count, counter] = useState(0);
    const [text, setText] = useState("next");
    const [score, setScore] = useState(0);

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
           
        }else{
            setText("next");

        }


    }

    const aClick = () => {
         
          if(QuestionSet3[count].answers[0]==QuestionSet3[count].correct){
              
             setScore(score+1);
          }
          nextClick();

    }
    const bClick = () => {
        console.log(QuestionSet3[count].answers[0]);
        console.log(QuestionSet3[count].correct);
        if(QuestionSet3[count].answers[1]==QuestionSet3[count].correct){
            console.log("working"+score);
           setScore(score+1);
           console.log("working"+score);
        }
        nextClick();
  }
  const cClick = () => {
         
    if(QuestionSet3[count].answers[2]==QuestionSet3[count].correct){
        
       setScore(score+1);
    }
    nextClick();

}

const dClick = () => {
         
    if(QuestionSet3[count].answers[3]==QuestionSet3[count].correct){
        
       setScore(score+1);
    }
    nextClick();
}

const returnToMenu = () => {

    window.location.href='/menu';    
}
    if (count < QuestionSet3.length) {
        return (


            <div>
                <p> {QuestionSet3[count].question}</p>
                <p><button onClick={aClick}>{QuestionSet3[count].answers[0]}   </button>    </p>
                <p> <button onClick={bClick}>{QuestionSet3[count].answers[1]} </button>     </p>
                <p> <button onClick={cClick}> {QuestionSet3[count].answers[2]} </button>     </p>
                <p><button onClick={dClick}> {QuestionSet3[count].answers[3]}   </button>   </p>
                <p> Current score: {score}    </p>
                <button onClick={nextClick}> {text}</button>
                <button onClick={prevClick}> Previous</button>
            </div>


        );
    } else {
       
        return(
        <div>
            <p>Final Score is {score}</p>
            <p> <button onClick={returnToMenu}>Return to Menu  </button></p>
        </div>
        )
    }
}

export default Set3;
