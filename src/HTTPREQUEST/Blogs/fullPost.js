import React,{Component} from 'react';
import post from './post';
import Axios from 'axios';

class FullPost extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            PostData:null
         }
    }
   
    render()
        
        { 
        const POSTS ={
            boxShadow:"0px 4px 8px 0px rgba(1,1,1,0.4)",
            margin:"10px",
            padding:"5px",
            textAlign:"center"
        }
        let Post=<p>Please Select Post</p>
        if (this.props.id){
            Post=(
                <div style={POSTS}>
                    <h1>{this.props.selectedPost}</h1>
                    <div>{this.props.selectedAuthor}</div>
                    <div>{this.props.body}</div>
                    <div>
                        <button onClick={this.props.hide}>Delete</button>
                    </div>
                </div>
                
            );
        }
         
        return (
           <div>
               {Post}

           </div>
        )
    }
}
 
export default FullPost;