import React from 'react';
import './heading.scss';

const Heading = () => {
return(
    <div className = 'title'>
        <span style = {{fontSize:40, color:'blue'}}>ROCK, PAPER, SCISSORS!</span>
        <div style = {{margin:30}}>
            Play rock, paper and scissors with the computer! Select one of the below to play!
        </div>
    </div>
)
}

export default Heading;