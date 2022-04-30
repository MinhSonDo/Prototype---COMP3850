

import QuestionSet3 from './QuestionSet3.json';
import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating'






function Question3(props) {


     let temp = props.temp;
 
        return (


            <div>
                <p class="title"> {QuestionSet3[temp].question}</p>
                <div class="buttons is-centered">
                    <p><button class="button" >{QuestionSet3[temp].answers[0]}   </button>    </p>
                    <p> <button class="button" >{QuestionSet3[temp].answers[1]} </button>     </p>
                    <p> <button class="button" > {QuestionSet3[temp].answers[2]} </button>     </p>
                    <p><button class="button" > {QuestionSet3[temp].answers[3]}   </button>   </p>
                </div>

                <div class="buttons is-centered">
                    <button class="button is-success is-light" > Previous</button>

                </div>

            </div>


        )
    
}

export default Question3;
