import * as type from './../constants/actionType';

var generateID = () => {
    var randomstring = require('randomstring').generate() + '-' + require('randomstring').generate() + '-' + require('randomstring').generate();
    return randomstring;
}
var data = JSON.parse(localStorage.getItem('items'));

var initialState = data ? data : [];


var findIndex = (items, id) => {
    var result = -1;
    items.forEach((item, index) => {
        if(item.id === id) {
            result = index;
        }
    })
    return result;
}
var index = 0;
var myReducer = (state = initialState, action) => {
    switch(action.type){
        case type.LIST_ALL:
            return state;
        case type.ADD_ITEM:
            var item = {
                id: action.item.id,
                name: action.item.name,
                status: action.item.status
            }
            if(action.item.id !== ''){
                index = findIndex(state, action.item.id);
                state[index] = item;
            } else {
                item.id = generateID();
                state.push(item);
                localStorage.setItem('items', JSON.stringify(state));
            }
            return [...state];
        case type.UPDATE_STATUS:
            index = findIndex(state, action.id);
            state[index] = {
                ...state[index],
                status: !state[index].status
            }
            localStorage.setItem('items', JSON.stringify(state));
            return [...state];
        case type.DELETE_ITEM:
            index = findIndex(state, action.id);
            state.splice(index, 1);// (index, so luong phan tu muon xoa)
            localStorage.setItem('items', JSON.stringify(state));
            return [...state];
        default:
            return state;
    }
}
export default myReducer;