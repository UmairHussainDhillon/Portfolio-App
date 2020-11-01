import React, { Component } from 'react';
import Widecard from '../Components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">Education</h1>
            <Widecard title="BSIT" where="Quaid e Azam University, Islamabad"/>
            <p><strong>Achievements: </strong> 
            <br/>
            <ul className='ml-5 d-flex d-flex-row'>
                <li className='w-50'>
                Event Manger IIT Society
                </li>
                <li className='w-50'>
                 Semester Scholarships
                </li>
               
            </ul>
            <ul className='ml-5 d-flex d-flex-row'>
                <li className='w-50'>
                   PEEF Merit Scholarship
                </li>
               
               
            </ul>
           </p>
            </div>
            )
        }
    }
    
export default Education
    