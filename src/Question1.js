

import QuestionSet1 from './QuestionSet1.json';
import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating'

function generateRandom(min = 0, max = QuestionSet1.length) {

    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor( rand * difference);

    // add with min value 
    rand = rand + min;

    return rand;
}




function Question1() {


     let temp = generateRandom();

     console.log(temp);
 
        return (


            <div>
                <p class="title"> {QuestionSet1[temp].question}</p>
                <div class="buttons is-centered">
                    <p><button class="button" >{QuestionSet1[temp].answers[0]}   </button>    </p>
                    <p> <button class="button" >{QuestionSet1[temp].answers[1]} </button>     </p>
                    <p> <button class="button" > {QuestionSet1[temp].answers[2]} </button>     </p>
                    <p><button class="button" > {QuestionSet1[temp].answers[3]}   </button>   </p>
                </div>

                {/* <div class="buttons is-centered">
                    <button class="button is-success is-light" > Previous</button>

                </div> */}

            </div>


        )
    
}

export default Question1;
