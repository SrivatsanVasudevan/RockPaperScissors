import React from 'react';
import './gameresult.scss';

const Result = ({userInput, computerInput,wins,loss,draw}) => {
        return(
            <>
           <div className = 'results'>  
                <div style = {{margin:20}}> WINS: {wins}</div>
                <div style = {{margin:20}}> LOSSES: {loss}</div>
                <div style = {{margin:20}}> DRAWS: {draw}</div>
           </div>
                
            </>
        )
}

export default Result;