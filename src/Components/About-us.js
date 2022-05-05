import React from "react";
import Foodtruck from '../Assets/Images/Food-Truck-Logo.svg'


const AboutUs = () => {
    return (
    <div className="container-lg">
        <div className="row justify-content-center h-screen">
            <div className="col-md-5 text-center text-md-start">
                <h1 className="lg:text-8xl md:text-6xl sm:text-4xl text-3xl font-black  font-mono">About us</h1> 
            </div>
        <img src ={Foodtruck} alt=""/> 
        <p>A really awesome paragraph that i came up with so that a food truck company can replace this with a real about me </p>
        </div>
    </div>    
    )
}

export default AboutUs;