import uuid from 'uuid';
import { startLoad, endLoad }from './loading'
import axios from 'axios'

const address = 'http://localhost:3001/api/v1/'

export const addUser = user => {
    let userId = uuid();
    let tempUser = Object.assign({},user, {uuid: userId})
    fetch('http://localhost:3001/api/v1/registrations', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "ACCEPT": "application/json"
        },
        body: JSON.stringify({
            tempUser,
            withCredentials: true
        })
    })
    .then(response => {
        console.log("registration res", response);
        return response.json();
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log("registration error", error);
    })
    
    return {
        type: 'ADD_USER',
        user: Object.assign({}, tempUser)
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
        payload: user
    }
}

export const loginError = (error) => {
    return {
        type: 'LOGIN_ERROR',
        payload: error
    }
}




