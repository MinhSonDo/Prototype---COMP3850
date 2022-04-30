

import QuestionSet2 from './QuestionSet2.json';
import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating'






function Question2(props) {


     let temp = props.temp;
 
        return (


            <div>
                <p class="title"> {QuestionSet2[temp].question}</p>
                <div class="buttons is-centered">
                    <p><button class="button" >{QuestionSet2[temp].answers[0]}   </button>    </p>
                    <p> <button class="button" >{QuestionSet2[temp].answers[1]} </button>     </p>
                    <p> <button class="button" > {QuestionSet2[temp].answers[2]} </button>     </p>
                    <p><button class="button" > {QuestionSet2[temp].answers[3]}   </button>   </p>
                </div>

                <div class="buttons is-centered">
                    <button class="button is-success is-light" > Previous</button>

                </div>

            </div>


        )
    
}

export default Question2;
