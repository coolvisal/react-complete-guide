import * as React from 'react';
import './Person.css';


const Person =(props:any) =>{
    return (
        <div className="Person">
    <p>This is a paragraph {props.name}:{props.age}</p>
    <p>{props.children}</p>
    <p>Other State: {props.otherState}</p>
    </div>
    )
}

export default Person;