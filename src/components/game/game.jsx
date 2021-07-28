import React from 'react';
import Result from '../gameresult/gameresult';
import Player from '../players/players';
class Game extends React.Component{
    constructor(){
        super();
        this.state = {
            winCount: 0,
            lossCount: 0,
            drawCount: 0,
            wins: 0,
            loss: 0,
            draw: 0,
            computerInput: '',
            userInput: '',
            user: '',
            computer: '',
            showPlayers: false
        }
    }

    updateInputs = (event) => {
        const moves = ['Rock','Paper','Scissors'];
        const opponentMove = moves[Math.floor(Math.random()*moves.length)];
        this.setState({userInput:event.target.value,computerInput:opponentMove,showPlayers:false});
        
    }
    
    checkWinner = () => {

        this.setState({showPlayers:true});
        const {userInput, computerInput} = this.state;
        console.log(userInput + " " + computerInput);
        let {winCount, lossCount, drawCount} = this.state;
    
        // Winning cases:
        //console.log("hi" + userInput)
        if(userInput === 'Rock' && computerInput === 'Scissors'){
            console.log("Win!")
            winCount++;
            this.setState(
                {winCount: winCount,
                lossCount: lossCount,
                drawCount:drawCount,
                wins:winCount,
                loss:lossCount,
                draw:drawCount,
                user:userInput,computer:computerInput}
                );
        }
        if(userInput === 'Scissors' && computerInput === 'Paper'){
            console.log("Win!")
            winCount++;
            this.setState(
                {winCount: winCount,
                lossCount: lossCount,
                drawCount:drawCount,
                wins:winCount,
                loss:lossCount,
                draw:drawCount,
                user:userInput,computer:computerInput}
                );
        }
        if(userInput === 'Paper' && computerInput === 'Rock'){
            console.log("Win!")
            winCount++;
            this.setState(
                {winCount: winCount,
                lossCount: lossCount,
                drawCount:drawCount,
                wins:winCount,
                loss:lossCount,
                draw:drawCount,
                user:userInput,computer:computerInput}
                );
        }
        //Losing cases:
        if(userInput === 'Rock' && computerInput === 'Paper'){
            console.log("Loss")
            lossCount++;
            this.setState(
                {winCount: winCount,
                lossCount: lossCount,
                drawCount:drawCount,
                wins:winCount,
                loss:lossCount,
                draw:drawCount,
                user:userInput,computer:computerInput}
                );
        }
        if(userInput === 'Paper' && computerInput === 'Scissors'){
            console.log("Loss")
            lossCount++;
            this.setState(
                {winCount: winCount,
                lossCount: lossCount,
                drawCount:drawCount,
                wins:winCount,
                loss:lossCount,
                draw:drawCount,
                user:userInput,computer:computerInput}
                );
        }
        if(userInput === 'Scissors' && computerInput === 'Rock'){
            console.log("Loss")
            lossCount++;
            this.setState(
                {winCount: winCount,
                lossCount: lossCount,
                drawCount:drawCount,
                wins:winCount,
                loss:lossCount,
                draw:drawCount,
                user:userInput,computer:computerInput}
                );
        }
        //Draw:
        if(userInput === computerInput){
            
            drawCount++;
            console.log("Draw! " + drawCount);
            this.setState(
                {winCount: winCount,
                lossCount: lossCount,
                drawCount:drawCount,
                wins:winCount,
                loss:lossCount,
                draw:drawCount,
                user:userInput,computer:computerInput}
                );
        }
        this.setState({user:userInput,computer:computerInput});
        console.log(this.state.winCount + " " + this.state.lossCount + " " + this.state.drawCount);
        
    }

    render(){
        const {userInput, user, computer, wins,loss,draw,showPlayers} = this.state;
        return(
            
            <div>
                <button value = "Rock" onClick = {this.updateInputs}> Rock </button>
                <button value = "Paper" onClick = {this.updateInputs}> Paper </button>
                <button value = "Scissors" onClick = {this.updateInputs}> Scissors </button>
                {userInput?<button onClick = {this.checkWinner}> Go! </button>:null}
                {showPlayers ? <Player 
                userInput = {user} 
                computerInput = {computer} 
                />: null}
                <Result 
                wins = {wins} 
                loss = {loss} 
                draw = {draw}
                />
               
            </div>
            
        );
    }
}


export default Game;