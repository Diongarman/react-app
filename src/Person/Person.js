import React from 'react';
import './Person.css'

const person = (props) => {



    return (
        <div className="Person">
            <p onClick={props.click}>My name is {props.name}. I'm {props.age} years old and am a real ass nicca.</p>
            <p>{props.children}</p>
            <input type="text" onChange= {props.nameChange} value={props.name}/>
        </div>

        )
}

export default person;