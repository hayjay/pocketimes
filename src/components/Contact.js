import React from 'react';
import Rainbow from '../hoc/Rainbow';
const Contact = (props) => {
    // console.log(props) 
    /*console.log(props) 
       passing probs to a component thats used by react router (<Route></Route>) 
       means that we can automatically access some of this components properties such as :
       1. props.history - previous pages visited
       2. props.location - the location where the page is and so on
    */
    //redirect the user to the about page after two seconds    
    //here props.history is been acessed because when you log console.log(props), it has some properties history, location and the likes.
    //In this case, push exist as a property in history parent's property
    setTimeout(() => {
        //after visiting the contact page (this component), the app pushes the about page in and leaves the contact
        props.history.push('/about')
    }, 2000)
    return (
        <div className="container">
            <h4 className="center">Contact us</h4>
            <p>You can reach out to us in the details below.</p>
        </div>
    )
}

export default Rainbow(Contact)