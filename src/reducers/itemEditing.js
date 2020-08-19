import * as types from './../constants/actionType';

var initialState = {
    id: '',
    name: '',
    status: true
};

var myReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.EDIT_ITEM:
            state = action.item;
            return state;
        default:
            return state;
    }
}

export default myReducer;

