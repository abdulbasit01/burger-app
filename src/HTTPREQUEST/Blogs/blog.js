import React, { Component } from 'react';
import Axios from 'axios';
import Post from "./post"
import FullPost from "./fullPost"
import DoPost from "./doPost"
class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            posts:[],
            selectedPostId:null,
            selectedPost:null,
            selectedAuthor:""

         }
    }
    clicked=(id,post,author)=>{
        this.setState({
            selectedPostId:id,
            selectedPost:post,
            selectedAuthor:author
        })
    }
    hide=()=>{
        this.setState({
            selectedPostId:null
        })
    }
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            
            .then(res=>{
                const post=res.data.slice(0,4);
                const updatePost=post.map(post=>{
                    return{
                        ...post,
                        author:"abdul basit"
                    }
                })
                this.setState({posts:updatePost})
            })     
    }
    
    render() { 
        const style={
            display:'inline-block',
            flexDirection:"row"
        }
        const post =this.state.posts.map(post=>{
            return <div style={style}>
                        <Post  key = {post.id} title={post.title} author={post.author}  clicked={()=>{
                            this.clicked(post.id,post.title,post.author)
                        }}/>
                        
                    </div>
        })

        return ( 
            <div>
                {post}
                <FullPost 
                id={this.state.selectedPostId} 
                selectedPost={this.state.selectedPost}
                selectedAuthor={this.state.selectedAuthor}
                hide={this.hide}
                body={this.state.posts.map(p=>p.body)}
                />
                <DoPost/>

            </div>
         );
    }
}
 
export default Blog;