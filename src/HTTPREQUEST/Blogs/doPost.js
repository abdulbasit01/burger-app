import React, { Component } from 'react';
import axiosInstance from "../../axios_order"
class DoPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"",
            content:"",
            author:"a"
          }
    }
    Post=()=>{
        const post={
            title:this.state.title,
            author:this.state.author,
            content:this.state.content
        }
        // Axios.post('https://jsonplaceholder.typicode.com/posts',post)
        //     .then(response=>{
        //         console.log(response)
        //     })
        axiosInstance.post('post.json',post)
        .then(res=>console.log(res))
        .catch(err=>console.error(err))
        console.log("data sent")

    }
    render() { 
        return ( 
            <div>
                <h1>Make Post</h1>
                <label>title</label>
                <input type="text" value={this.state.title}
                onChange={e=>{this.setState({title:e.target.value})}}
                 />
                <label>Content</label>
                <textarea value={this.state.content} row="4"
                onChange={e=>{this.setState({content:e.target.value})}}
                > 

                </textarea>
                <label>Author</label>
                <input type="text"
                 value={this.state.author} 
                 onClick={()=>this.setState({author:""})}
                 onChange={e=>{this.setState({author:e.target.value})}}
                />
                <button onClick={this.Post}>Post</button>
            </div>
         );
    }
}
 
export default DoPost;