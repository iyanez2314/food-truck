import React from "react";
import {Link} from 'react-router-dom';

const Hero = () => {
    return (
        <div className="bg-white h-screen flex flex-col justify-center items-center">
            <h1 className="lg:text-8xl md:text-6xl sm:text-4xl text-3xl font-black mb-14 font-mono">
                Come check us out!
            </h1>
            <Link to="/" className="py-6 px-10 bg-purple-500 rounded-full text-l hover:bg-purple-300 transition duration-300 ease-in-out flex items-center animate-bounce">
            Location</Link>
        </div>
    )
}

export default Hero;