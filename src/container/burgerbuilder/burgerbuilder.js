import React, { Component } from 'react';
import Aux from "../../hoc/Aux"
import Burger from "../../components/burger/burger"
import BuildControl from "../../components/burger/buildControls/buildControls"
import Modal from "../../components/UI/models";
class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients:{
                salad:0,
                meat:0,
                bacon:0,
                cheese:0
            },
            price:4,
            checkout:false
          }
          
    }
    addIngredient=(type)=>{
        var oldCount =this.state.ingredients[type]
        var updateCount=oldCount+1
        const upgradIng={...this.state.ingredients}
        upgradIng[type]=updateCount
        this.setState({
            ingredients:upgradIng,
            price:this.state.price+2
        })

    }
    removeIngredient=(type)=>{
        var oldCount =this.state.ingredients[type]
        if (oldCount>0 ){
            var updateCount=oldCount-1
            const upgradIng={...this.state.ingredients}
            upgradIng[type]=updateCount
            this.setState({
                ingredients:upgradIng,
                price:this.state.price-2
            })
    
        }
    }
    checkout=()=>{
        this.setState({
            checkout:!this.state.checkout
        })
    }
    
    render() { 
        const button={
            display: "block",
            padding: "5px",
            margin: "5px",
            outline:" none",
            border: "1px solid #bb700f",
            backgroundColor:" rgb(230, 176, 27)",
            borderRadius:" 10px",
        }
        return ( 
            <Aux>
                
                <Modal>
                    {this.state.checkout ? 
                    <p>
                        thie Pice of the buger is {this.state.price}
                    </p>:
                    null
                    }
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControl 
                addIngredient={this.addIngredient}
                removeIngredient={this.removeIngredient}
                disabled={this.state.disabled}
                />             
                <button onClick={this.checkout} style={button}>
                    Check Out
                </button>   
            </Aux>
         );
    }
}
 
export default BurgerBuilder;