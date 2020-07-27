const initState = {
    posts : [
        {id : '1', title : 'Hello', body : 'World'},
        {id : '2', title : 'Yay', body : 'Good'},
        {id : '3', title : 'Sallam Alaykum!', body : 'Morning'},
    ]
}
const rootReducer = (state = initState, action) => {
    console.log(action)
    if (action.type === "DELETE_POST"){
        let newPosts = state.posts.filter((post_id) => {
            return action.id !== post_id.id
        });
        return {
            ...state, //return the previous state of the app
            posts : newPosts
        }
    }
    //returns the initial state initState
    return state;
}
export default rootReducer;