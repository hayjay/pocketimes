import React, { Component } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import Pocketball from '../pokeball.png';
import { connect } from 'react-redux';

class Home extends Component {
    // state = {
    //     posts : []
    // }
    // //make http call in this component
    // componentDidMount() {
    //     //make this call asynchronously
    //     //returns a promise
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then((response) => {
    //             // console.log(response)
    //             //save the post data to our component so it can be used in the template (render method)
    //             this.setState({
    //                 posts : response.data.slice(0,10) //pick ten records from the posts data
    //             });
    //         })
    // }
    render() {
        // const
        const posts = this.props.posts; //grabs this posts from this component props because this component is now connected to the redux store
        //check if we have a post data
        //return a JSX if we have a data or not then finally pass this jsX to the component template in the render method
        const postList = posts.length ? (
            posts.map((each_post_data) => {
                 return (
                     <div className="post card" key={each_post_data.id}>
                     <img src={Pocketball} alt="A Pokeball"/>
                        <div className="card-content">
                            <Link to={'/'+each_post_data.id}>
                                <span className="card-title red-text">{each_post_data.title}</span>
                            </Link>
                            <p>{each_post_data.body}</p>
                        </div>
                     </div>
                 )
            })
        ) : (
            <div className="center">No post yet</div>
        )
        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )    
    }
}

//if component wants to get data from the store, it goes to the store and gets the data from it and maps it to the props
 
const mapStateToProps = (state) => {
    //add below data to the props
    return {
        //apply the state.posts from redux store to this components posts
        posts : state.posts //state.posts is gotten from the store property called posts
    }
}

//pass mapstatetoprops so redux store can know what data we want to grab from him. in this case it is the post property
export default connect(mapStateToProps)(Home) //connect is an higher order component so we have to first of all invoke it