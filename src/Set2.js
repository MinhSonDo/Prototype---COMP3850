
import './App.css';
import Button from './Button'
import QuestionSet2 from './QuestionSet2.json';
import React, { useState } from 'react';



function Set2() {
    const [count, counter] = useState(0);
    const [text, setText] = useState("next");
    const [score, setScore] = useState(0);

    const nextClick = () => {

        if (count < QuestionSet2.length) {
            counter(count + 1);
            console.log(QuestionSet2.length);
            console.log(count);

        }

        if (count == QuestionSet2.length - 1) {
            setText("finish");
        }


    }
    const prevClick = () => {

        if (count > 0) {
            counter(count - 1);
            console.log(QuestionSet2.length);
            console.log(count);

        }
        if (count == QuestionSet2.length - 2) {
           
        }else{
            setText("next");

        }


    }

    const aClick = () => {
         
          if(QuestionSet2[count].answers[0]==QuestionSet2[count].correct){
              
             setScore(score+1);
          }
          nextClick();

    }
    const bClick = () => {
        console.log(QuestionSet2[count].answers[0]);
        console.log(QuestionSet2[count].correct);
        if(QuestionSet2[count].answers[1]==QuestionSet2[count].correct){
            console.log("working"+score);
           setScore(score+1);
           console.log("working"+score);
        }
        nextClick();
  }
  const cClick = () => {
         
    if(QuestionSet2[count].answers[2]==QuestionSet2[count].correct){
        
       setScore(score+1);
    }
    nextClick();

}

const dClick = () => {
         
    if(QuestionSet2[count].answers[3]==QuestionSet2[count].correct){
        
       setScore(score+1);
    }
    nextClick();
}

const returnToMenu = () => {

    window.location.href='/menu';    
}
    if (count < QuestionSet2.length) {
        return (


            <div>
                <p> {QuestionSet2[count].question}</p>
                <p><button onClick={aClick}>{QuestionSet2[count].answers[0]}   </button>    </p>
                <p> <button onClick={bClick}>{QuestionSet2[count].answers[1]} </button>     </p>
                <p> <button onClick={cClick}> {QuestionSet2[count].answers[2]} </button>     </p>
                <p><button onClick={dClick}> {QuestionSet2[count].answers[3]}   </button>   </p>
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

export default Set2;
