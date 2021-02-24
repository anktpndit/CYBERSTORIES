import * as api from '../api/index';

//We are going to describe actions

export const getPosts = () => async (dispatch) => {

    try {
        //we destrucure our data from the response 
        const { data } = await api.fetchPosts();
        const action = {
            type: 'FETCH_ALL',
            payload: data
        }
        dispatch(action);
    } catch (err) {
        console.error(err);
    }   

}

export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post);
        const action = {type: 'CREATE', payload: data};
        dispatch(action);
    } catch (err) {
        console.log(err.message);
    }
}
