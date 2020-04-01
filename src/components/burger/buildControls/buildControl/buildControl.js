import React from 'react';
import "./buildControl.css"
const buildControl=props=>(
    <div className="buildControl">
        <div className="label">
            <strong>
            {props.label}
            </strong>
        </div>
        <button onClick={props.addIngredient}>More</button>
        <button onClick={props.removeIngredient}>Less</button>
    </div>
)


export default buildControl