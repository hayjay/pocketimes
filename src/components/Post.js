import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Post extends Component { 
    handleClick = () => {
        this.props.deletePost(this.props.post.id)
        //after deleting the post, redirect the user to the home/post listings page
        this.props.history.push('/')
    }
    render() {
        console.log(this.props)
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body} </p>
                <div className="center">
                        <button className="btn grey" onClick={this.handleClick}>
                            Delete Post
                        </button>
                </div>
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

//Recall that, we use props to pass data to redux store
const mapStateToProps = (state, thisParticularProps) => {
    // grab the id of the post from the route parameters
    let id = thisParticularProps.match.params.post_id // gotten from the <Route/> appjs
    return {
        post : state.posts.find((post) => {
            //if the post id in redux store matches the id gotten from url parameter
            return post.id === id //if this is trye then return the matched post by id in the redux store 
        }) 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //dispatch the dispatch action to the reducer whenever we call the deletePost method
        deletePost : (post_id) => {
            dispatch({
                type : 'DELETE_POST',
                 id : post_id
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)