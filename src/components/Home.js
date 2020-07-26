import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends Component {
    state = {
        posts : []
    }
    //make http call in this component
    componentDidMount() {
        //make this call asynchronously
        //returns a promise
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                // console.log(response)
                //save the post data to our component so it can be used in the template (render method)
                this.setState({
                    posts : response.data.slice(0,10) //pick ten records from the posts data
                });
            })
    }
    render() {
        // const { posts } = this.state; //use array destructuring to pick the post from the component state
        const posts = this.state.posts;
        //check if we have a post data
        //return a JSX if we have a data or not then finally pass this jsX to the component template in the render method
        const postList = posts.length ? (
            posts.map((each_post_data) => {
                 return (
                     <div className="post card" key={each_post_data.id}>
                        <div className="card-content">
                            <Link to={'/'+each_post_data.id}>
                                <span className="card-title">{each_post_data.title}</span>
                            </Link>
                            <p>{each_post_data.body}</p>
                        </div>
                     </div>
                 )
            })
        ) : (
            <div className="center">No posts yet</div>
        )
        return (
            <div className="container">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )    
    }
}

export default Home