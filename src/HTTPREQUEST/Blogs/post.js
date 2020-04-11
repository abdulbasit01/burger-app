import React from 'react';
const POSTS ={
    boxShadow:"0px 4px 8px 0px rgba(1,1,1,0.4)",
    margin:"10px",
    padding:"5px",
    textAlign:"center",
    display:"block",

}
const post=props=>(
    <article onClick={props.clicked} style={POSTS}>
        <h1>{props.title}</h1>
        <div>
            <div>{props.author}</div>
        </div>
    </article>
    
)

export default post