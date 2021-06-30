const INITIAL_STATE = {
    
}

const reducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case "COVID19DATA":
            return({
                ...state,
                data:action.data
            })
        default:
            return state
    }
}

export default reducer;