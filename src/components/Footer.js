import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="flex flex-row justify-around h-16 bg-gray-900 items-center text-white text-xl mt-4" >
            <a href="https://github.com/Iinguistics/astrospace" target="_blank" rel="noopener noreferrer">
            <img className="h-8 md:h-10" src={require('../assets/footer/github-black.png')} alt="github" /> 
            </a>
            
        </div>
    )
}

export default Footer
