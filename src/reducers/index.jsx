import { ADD_ARTICLE } from '../constants';

const initialState = {
    articles : []
}

const rootReducer = (state = initialState, action) => {
    if(action.type === ADD_ARTICLE){
        return { ...state, action.payload}
    }
    return state
}

export default rootReducer;