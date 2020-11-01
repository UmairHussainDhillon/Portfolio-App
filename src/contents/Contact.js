import React, { Component } from 'react';
import Social from '../Components/Social'

class Contact extends Component {
    render() {
        return (
            <div className=" page-content  ">
            <h1 className="subtopic">Contact Me</h1>
            <h3>Email  :   Umairhussaindhillon@gmail.com</h3>
            <h3>Linkdin   :  https://www.linkedin.com/in/umair-hussain-a61309186</h3>
           <div className=" p-8 ml-auto"><Social/></div> 
            </div>
            )
        }
    }
    
    export default Contact;
