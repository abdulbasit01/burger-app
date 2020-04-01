import React from 'react';
import "./burger.css"
import BurgerIngredient from "./burgerIngredients/burgerIngredients"
const burger=(props)=>{
    let ingredients= Object.keys(props.ingredients)
    .map(ingredientsKeys=>{
        return [...Array(props.ingredients[ingredientsKeys])].map((_,i)=>(
            <BurgerIngredient key={i+ingredientsKeys} type={ingredientsKeys}/>
        ))
    })
    .reduce((arr,el)=>{
        return arr.concat(el)
    })
    const style={
        fontSize:"12px",
        color:"green",
    }
    console.log(ingredients)
    if (ingredients.length ===0){
         ingredients=<p style={style}>Please start customizing your burger</p>
    }
    return(
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
            {ingredients}
            <BurgerIngredient type="bread-bottom"/>


        </div>
    );

}
export default burger;