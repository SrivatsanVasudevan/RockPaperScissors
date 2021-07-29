import React from 'react';
import Result from '../gameresult/gameresult';
import Player from '../players/players';
import './game.scss';

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
        this.setState({userInput:event.target.value,computerInput:opponentMove,showPlayers:false
        });
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
                <div>

                
                <input type = "image"
                style = {{backgroundColor:userInput === 'Rock' ? 'blue' : ''}}
                src = {'https://cdn130.picsart.com/288074322023201.png?type=webp&to=min&r=640'} alt = 'Rock' className = "buttons" value = "Rock" onClick = {this.updateInputs}
                />
                     
                <input type = "image"
                style = {{backgroundColor:userInput === 'Paper' ? 'blue' : ''}}
                src = {`http://assets.stickpng.com/images/580b585b2edbce24c47b2463.png`} alt = 'Paper' className = "buttons" value = "Paper" onClick = {this.updateInputs} />
                <input type = "image"
                style = {{backgroundColor:userInput === 'Scissors' ? 'blue' : ''}}
                src = {`https://i.pinimg.com/originals/fa/d9/88/fad988caff49e215acccaf3f753a334f.png`} alt = 'Scissors' className = "buttons" value = "Scissors" onClick = {this.updateInputs} />
                </div>
                <div>
                {userInput?<input type = "image" src = {`https://pbskids.org/plumlanding/i/common/playbutton.png`} alt = 'Go!' className = "buttons" value = "Scissors" onClick = {this.checkWinner} /> :null}
                </div>

                <div>
                {showPlayers ? <Player userInput = {user} computerInput = {computer} />: null}
                </div>

                <div>
                <Result 
                wins = {wins} 
                loss = {loss} 
                draw = {draw}
                />
               </div>
            </div>
            
        );
    }
}


export default Game;