import { combineReducers } from 'redux';
import items from './items';
import toggleForm from './toggleForm';
import itemEditing from './itemEditing';
import filterItems from './filterItems';
import findItems from './findItems';
import sortItems from './sortItems';

const myReducer = combineReducers({
    items, // items: items
    toggleForm,
    itemEditing,
    filterItems,
    findItems,
    sortItems
});

export default myReducer;