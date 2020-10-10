const comments = [];

export default (state = comments, actions) => {
    switch(actions.type){
        case "GET_ALL_COMMENTS":
            return actions.payload;
        default:
            return state
    }
}