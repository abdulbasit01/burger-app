import React from 'react';
import './buildControl.css'

import BuildControl from "./buildControl/buildControl"
const control=[
    {label:"salad",type:"salad"},
    {label:"meat",type:"meat"},
    {label:"bacon",type:"bacon"},
    {label:"cheese",type:"cheese"}
]
const button={
    display: "block",
    padding: "5px",
    margin: "5px",
    outline:" none",
    border: "1px solid #bb700f",
    backgroundColor:" rgb(230, 176, 27)",
    borderRadius:" 10px",
}
const buildControl=props=>{
    return(
        <div className="BuildControl">
            <p>
                 {props.text}<strong> {props.price}</strong>
            </p>
            {control.map(ctrl=>(
                <BuildControl key={ctrl.label} label={ctrl.label} 
                addIngredient={()=>props.addIngredient(ctrl.type)}
                removeIngredient={()=>{props.removeIngredient(ctrl.type)}}
                />
            ))}
            <button style={button} onClick={props.checkout}>
                    Check Out
            </button>
        </div>
    )
}
export default buildControl