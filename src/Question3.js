

// https://stackoverflow.com/questions/4959975/generate-randomom-number-between-two-numbers-in-javascript
import QuestionSet3 from './QuestionSet3.json';
import React, { useState } from 'react';


function gr( minimum = 0, maximum = QuestionSet3.length) {


    let dif = maximum - minimum;


    random = Math.floor( Math.random() * dif);


   

    return random;
}




function Question3() {


     let temp = gr();

     console.log(temp);
 
        return (


            <div>
                <p class="title"> {QuestionSet3[temp].question}</p>
                <div class="buttons is-centered">
                    <p><button class="button" >{QuestionSet3[temp].answers[0]}   </button>    </p>
                    <p> <button class="button" >{QuestionSet3[temp].answers[3]} </button>     </p>
                    <p> <button class="button" > {QuestionSet3[temp].answers[2]} </button>     </p>
                    <p><button class="button" > {QuestionSet3[temp].answers[3]}   </button>   </p>
                </div>

                {/* <div class="buttons is-centered">
                    <button class="button is-success is-light" > Previous</button>

                </div> */}

            </div>


        )
    
}

export default Question3;
