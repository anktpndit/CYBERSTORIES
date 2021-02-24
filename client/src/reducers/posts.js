//this is our single reducer function
export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload]; //spreading our old state and adding the new state
        default:
            return posts;
    }
}
