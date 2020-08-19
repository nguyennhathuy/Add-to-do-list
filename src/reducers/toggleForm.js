import * as type from './../constants/actionType';


var initialState = false;

var myReducer = (state = initialState, action) => {

    switch(action.type){
        case type.TOGGLE_FORM:
            return !state;
        case type.OPEN_FORM:
            state = true;
            return state;
        case type.CLOSE_FORM:
            state = false;
            return state
        default:
            return state;
    }
}

export default myReducer;