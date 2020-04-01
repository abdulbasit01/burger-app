import React from 'react';
import './buildControl.css'

import BuildControl from "./buildControl/buildControl"
const control=[
    {label:"salad",type:"salad"},
    {label:"meat",type:"meat"},
    {label:"bacon",type:"bacon"},
    {label:"cheese",type:"cheese"}
]
const buildControl=props=>{
    return(
        <div className="BuildControl">
            {control.map(ctrl=>(
                <BuildControl key={ctrl.label} label={ctrl.label} 
                addIngredient={()=>props.addIngredient(ctrl.type)}
                removeIngredient={()=>{props.removeIngredient(ctrl.type)}}
                />
            ))}
        </div>
    )
}
export default buildControl