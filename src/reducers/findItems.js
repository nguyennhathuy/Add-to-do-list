import * as types from './../constants/actionType';


var initialState = '';

var myReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.FIND_ITEMS:
            state = action.keyword;
            return state;
        default:
            return state;
    }
};

export default myReducer;