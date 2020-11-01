import React, { Component } from 'react'
import Widecard from '../Components/Widecard';

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'myskills':['C++','JS','NodeJs','REACT JS','MYsql']
        };
    }

    render() {
        return (
            <div className="page-content skills">
            <h1 className="subtopic">My Skills</h1>
            <ul>
            {this.state.myskills.map((value)=>{
                return (
                    <>
                    <Widecard title={value}></Widecard>
                </>
             ) })}
            </ul>
            </div>
            )
        }
    }
    
    export default Skills
    