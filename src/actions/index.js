import * as type from './../constants/actionType';

export const listAll = () => {
    return {
        type: type.LIST_ALL
    }
}

export const addItem = (item) => {
    return {
        type: type.ADD_ITEM,
        item
    }
}
export const onToggleForm = () => {
    return {
        type: type.TOGGLE_FORM,
    }
}
export const onOpenForm = () => {
    return {
        type: type.OPEN_FORM,
    }
}
export const onCloseForm = () => {
    return {
        type: type.CLOSE_FORM,
    }
}

export const onUpdateStatus = (id) => {
    return {
        type: type.UPDATE_STATUS,
        id
    }
}

export const onDeleteItem = (id) => {
    return {
        type: type.DELETE_ITEM,
        id
    }
}

export const onEditItem = (item) => {
    return {
        type: type.EDIT_ITEM,
        item
    }
}

export const onFilterItems = (filter) => {
    return {
        type: type.FILTER_ITEMS,
        filter
    }
}

export const onFindItems = (keyword) => {
    return {
        type: type.FIND_ITEMS,
        keyword
    }
}

export const onSortItems = (sort) => {
    return {
        type: type.SORT_ITEMS,
        sort
    }
}