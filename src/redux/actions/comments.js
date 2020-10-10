import axios from '../../helpers/axios';

export const getAllComments = () => async (dispatch) => {
    let comments = await axios.get('/comments')
    await dispatch({
        type: "GET_ALL_COMMENTS",
        payload: comments.data.comments
    })
}

export const addComments = (values) => async (dispatch) => {
    let result = await axios.post('/comments', values)

    if(result.status === 200){
        await dispatch({
            type: "ADD_ONE_COMMENT",
            payload: result.data.newComment
        })
        alert('Thanks for commenting :)')
        await dispatch(getAllComments())
    }
}