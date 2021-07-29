import React from 'react';
import './gameresult.scss';

const Result = ({userInput, computerInput,wins,loss,draw}) => {
        return(
            <>
           <div className = 'results'>  
                <div> WINS: {wins}</div>
                <div> LOSSES: {loss}</div>
                <div> DRAWS: {draw}</div>
           </div>
                
            </>
        )
}

export default Result;