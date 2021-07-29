import React from 'react';
import './footer.scss';

const Footer = ({rock,paper,scissors}) => {
    return(
        <div className = 'footer'>
            Remember!<img className='footerImages' src = {rock} alt = 'Rock'/> beats 
            <img className='footerImages' src = {scissors} alt = 'Scissors'/>,  
            <img className='footerImages' src = {scissors} alt = 'Scissors'/> beats 
            <img className='footerImages' src = {paper} alt = 'Paper'/> and 
            <img className='footerImages' src = {paper} alt = 'Paper'/> beats 
            <img className='footerImages' src = {rock} alt = 'Rock'/>!
        </div>
    )
}

export default Footer;