import React from 'react';

/*
    What does this higher order component do?
    It basically serves as a HOC to other component which means it helps dependent/child component with some extra features
    It takes in the dependent/child component as its parameter and supercharge it by passing some attribute to it
*/
const Rainbow = (DependantComponent) => {
    // get random colors
    const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
    // generate random colours from the colours array
    const randomColour = colours[Math.floor(Math.random() *  colours.length)];
    //assign a css class (materialize design) to our randomly generate colour
    const className = randomColour + '-text';

    //return a super charged component - chiled/dependant Component
    return (props_from_dependant_component) => { //if the DependantComponent receives any props in it from anywhere, the props would be passed in here as a parameter
        return (
            <div className={className}>
                {/* send back the received props back to the dependant component  */}
                <DependantComponent {...props_from_dependant_component}/> 
            </div>
        )
        
    }


}

export default Rainbow