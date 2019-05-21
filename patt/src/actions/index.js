import axios from 'axios'

export const TESTING = 'TESTING'
export const TESTING_ERROR = 'TESTING_ERROR'

export const testing = username => dispatch => {
    return axios 
            .post('https://mif88l63ba.execute-api.us-west-2.amazonaws.com/default/personality-score', username)
            .then(res => {
                console.log(res)
                dispatch({
                    type: TESTING,
                    payload: res
                })
            })
            .catch(err => {
                dispatch({
                    type: TESTING_ERROR,
                    payload: err
                })
                console.log(err)
            })
}

export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_ERROR = 'REGISTER_ERROR'

export const register = creds => dispatch => {
    dispatch({ type: REGISTER_START })

    return axios 
            .post('https://pyschographic-analysis-of-text.herokuapp.com/users/register', creds)
            .then(res => {
                console.log(res)
                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: res
                })
            })
            .catch(err => {
                console.log(err)
                dispatch({
                    type: REGISTER_ERROR,
                    payload: err
                })
            })
}

export const LOGIN_START =  'LOGIN_START'
export const LOGIN_SUCCESS =  'LOGIN_SUCCESS'
export const LOGIN_ERROR =  'LOGIN_ERROR'

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START })
    console.log(creds)
    return axios 
            .post('https://pyschographic-analysis-of-text.herokuapp.com/users/login/', creds)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.payload)
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data.payload
                })
            })
            .catch(err => {
                console.log(err)
                dispatch({
                    type: LOGIN_ERROR,
                    payload: err.response.data.message
                })
            })
}