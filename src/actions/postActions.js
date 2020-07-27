// simply create a function which will return an action for our deletePost Method
export const deletePostAction = (post_id) => {
    return {
        type : 'DELETE_POST',
        id : post_id
    }
}