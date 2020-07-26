import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component { 
    state = {
        id : null, //set to null when this component is first loaded,
        post : null
    }
    componentDidMount(){
        //Recall that, we automatically get props in class based component such as
        console.log(this.props);
        //get the post id from react routers props parameter
        let id = this.props.match.params.post_id //post_id is an extra route information on the <Route> --see app.js
        axios.get('https://jsonplaceholder.typicode.com/posts/'+ id)
        .then((res) => {
            this.setState({
                post : res.data,
                id
            })
            console.log(res)
        });
        //persist the id from the url to this component id
       
    }
    render() {
        const post = this.state.post ? (
            <div className="post">
                <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body} </p>
            </div> 
        ) : (
            <div className="center">Loading post...</div>
        )
        return (
            <div className="container">
                {post}
            </div>
        )
    }
}

export default Post