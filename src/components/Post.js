import React, { Component } from 'react';

class Post extends Component { 
    state = {
        id : null //set to null when this component is first loaded
    }
    componentDidMount(){
        //Recall that, we automatically get props in class based component such as
        console.log(this.props);
        //get the post id from react routers props parameter
        let id = this.props.match.params.post_id //post_id is an extra route information on the <Route> --see app.js
        //persist the id from the url to this component id
        this.setState({
            id
        })
    }
    render() {
        return (
            <div className="container">
                <h4>{this.state.id}</h4>
            </div>
        )
    }
}

export default Post