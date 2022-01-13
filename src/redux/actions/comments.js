import axios from '../../helpers/axios';

export const getAllComments = () => async (dispatch) => {
    let comments = await axios.get('/comment')
    console.log(comments)
    await dispatch({
        type: "GET_ALL_COMMENTS",
        payload: comments.data.data
    })
}

export const addComments = (values) => async (dispatch) => {
    let result = await axios.post('/comment', values)

    if(result.status === 200){
        await dispatch({
            type: "ADD_ONE_COMMENT",
            payload: result.data.data
        })
        alert('Thanks for commenting :)')
        await dispatch(getAllComments())
    }
}