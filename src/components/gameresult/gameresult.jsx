import React from 'react';

const Result = ({userInput, computerInput,wins,loss,draw}) => {
        return(
            <>
           
                <div> WINS: {wins}</div>
                <div> LOSSES: {loss}</div>
                <div> DRAWS: {draw}</div>
            </>
        )
}

export default Result;