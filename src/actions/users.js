import uuid from 'uuid';

export const addUser = user => {
    let userId = uuid();
    return {
        type: 'ADD_USER',
        user: Object.assign({}, user, {id: userId})
    }
}

export const removeUser = userId => {
    return {
        type: 'REMOVE_USER',
        userId
    }
}

export const editUser = user => {
    return {
        type: 'EDIT_USER',
        user
    }
}

export const loginUser = user => {
    return {
        type: 'LOGIN_USER',
        user
    }
}