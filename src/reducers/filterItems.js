import * as types from './../constants/actionType';

var initialState = {
    name: '',
    value: -1
}

var myReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.FILTER_ITEMS:
            state.name = action.filter.name;
            state.value = parseInt(action.filter.value, 10);
            return state;
        default:
            return state;
    }


}

export default myReducer;