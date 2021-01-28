import jsonPlaceHolder from '../api/jsonPlaceHolder'

export const fetchPostsAndUsers = () => {
    return async (dispatch, getState) => {
        await dispatch(fetchPosts())
        const userIds = new Set(getState().posts.map(({ userId }) => userId));
        userIds.forEach(id => dispatch(fetchUser(id)))
    }
}

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceHolder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });
};


