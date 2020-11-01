import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/umair.jpg';
import Social from '../Components/Social'



class Home extends Component {
    render() {
        return (
            <div className=" page-content home">

            <img src={profilepic} alt="Umair-Hussain-Profile" className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['Umair Hussain','Software Engineer']} speed={300} eraseDelay={700}/>
            <Social />
            </div>
            )
        }
    }

    
    export default Home
    