const initState = {
    posts : [
        {id : '1', title : 'Hello', body : 'World'},
        {id : '2', title : 'Yay', body : 'Good'},
        {id : '3', title : 'Sallam Alaykum!', body : 'Morning'},
    ]
}
const rootReducer = (state = initState, action) => {
    //returns the initial state initState
    return state;
}
export default rootReducer;