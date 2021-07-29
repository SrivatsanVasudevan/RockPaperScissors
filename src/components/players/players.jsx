import React from 'react';
import './players.scss';

const Player = ({userInput,computerInput}) => {
    const rock = 'https://cdn130.picsart.com/288074322023201.png?type=webp&to=min&r=640';
    const paper = 'http://assets.stickpng.com/images/580b585b2edbce24c47b2463.png';
    const scissors = 'https://i.pinimg.com/originals/fa/d9/88/fad988caff49e215acccaf3f753a334f.png';
    const versus = 'https://media.istockphoto.com/vectors/versus-letters-or-vs-logo-comic-text-in-pop-art-style-vector-id853075280?k=6&m=853075280&s=170667a&w=0&h=RPFs-E3IZvbX3mujRHGY3wX7Mgyzx38iXXu4c0httUI=';
    let playerURL = '', computerURL = '';
    if(userInput === 'Rock'){
        playerURL = rock;
    }
    else if(userInput === 'Paper'){
        playerURL = paper;
    }
    else{
        playerURL = scissors;
    }
    if(computerInput === 'Rock'){
        computerURL = rock;
    }
    else if(computerInput === 'Paper'){
        computerURL = paper;
    }
    else{
        computerURL = scissors;
    }

    return (
        

        <div>
            <span className = 'players'> <img className = 'image' src = {playerURL} alt = {userInput}/> </span>
            <span className = 'players'> <img className = 'image' src = {versus} alt = 'VS' /> </span>
            <span className = 'players'> <img className = 'image' src = {computerURL} alt = {computerInput} /> </span>
        </div>
    );
}

export default Player;