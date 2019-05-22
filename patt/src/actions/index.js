import axios from 'axios'

export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_ERROR = 'REGISTER_ERROR'

export const register = creds => dispatch => {
    dispatch({ type: REGISTER_START })

    return axios 
            .post('https://pyschographic-analysis-of-text.herokuapp.com/users/register', creds)
            .then(res => {
                console.log(res)
                console.log(res.data.token)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('username', creds.username)
                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: {message: `Succesfully registered ${creds.username}`, userId: res.data.id}
                })
            })
            .catch(err => {
                console.log(err)
                dispatch({
                    type: REGISTER_ERROR,
                    payload: 'Registration error. Please try again'
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
                console.log(res.data.message)
                localStorage.setItem('token', res.data.token)
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: {message: res.data.message, userId: res.data.userId}
                })
            })
            .catch(err => {
                console.log(err)
                dispatch({
                    type: LOGIN_ERROR,
                    payload: "Failed Log In. Please try again"
                })
            })
}

export const LOG_OUT_START =  'LOG_OUT_START'
export const LOG_OUT_SUCCESS =  'LOG_OUT_SUCCESS'

export const logout = () => dispatch => {
    dispatch({ 
        type: LOG_OUT_START,
    })
    console.log("Started to log out")
   
    dispatch({ 
        type: LOG_OUT_SUCCESS,
        payload: "Successfully logged out"
    })
    localStorage.clear()
}

export const CAPTURE_PROFILE = 'CAPTURE_PROFILE'

export const captureProfile = profile => {
    return {
        type: CAPTURE_PROFILE,
        payload: profile 
    }
}

export const DELETE_PROFILE_START = 'DELETE_PROFILE_START'
export const DELETE_PROFILE_SUCCESS = 'DELETE_PROFILE_SUCCESS'
export const DELETE_PROFILE_ERROR = 'DELETE_PROFILE_ERROR'

export const deleteProfile = profileId => dispatch => {
    dispatch({ type: DELETE_PROFILE_START })

    return axios 
            .delete(`https://pyschographic-analysis-of-text.herokuapp.com/users/${profileId}`)
            .then(res => {
                console.log(res)
                localStorage.clear()
                dispatch({
                    type: DELETE_PROFILE_SUCCESS,
                    payload: `Successful deletion of profile`
                })
            })
            .catch(err => {
                console.log(err.response.data.message)
                dispatch({
                    type: DELETE_PROFILE_ERROR,
                    payload: 'delete'
                })
            })
}

// Creating Update Profile actions and action creator 
export const UPDATE_PROFILE_START = 'UPDATE_PROFILE_START'
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS'
export const UPDATE_PROFILE_ERROR = 'UPDATE_PROFILE_ERROR'

export const updateProfile = profileUpdates => dispatch => {
    dispatch({ type: UPDATE_PROFILE_START })

    return axios 
            .put(`https://pyschographic-analysis-of-text.herokuapp.com/users/${profileUpdates.id}`, profileUpdates)
            .then(res => {
                console.log(res)
                 dispatch({
                     type: UPDATE_PROFILE_SUCCESS,
                     payload: `Profile updated successfully.`
                 })
            })
            .catch(err => {
                console.log(err)
                dispatch({
                    type: UPDATE_PROFILE_ERROR,
                    payload: 'update'
                })
            })
}

 // Creating Search actions and action creator 
 export const SEARCH_START = 'SEARCH_START'
 export const SEARCH_SUCCESS = 'SEARCH_SUCCESS' 
 export const SEARCH_ERROR = 'SEARCH_ERROR' 
 
 export const searching = username => dispatch => { 
     dispatch({ type: SEARCH_START })
     return axios  
          
             .get(`https://pyschographic-analysis-of-text.herokuapp.com/api/users/${username}`)
             .then(res => { 
                 console.log(res) 
                //  dispatch({ 
                //      type: SEARCH_SUCCESS, 
                //      payload: res.data 
                // }) 
             }) 
             .catch(err => { 
                 console.log(err) 
                 dispatch({ 
                     type: SEARCH_ERROR, 
                     payload: err 
                 }) 
             }) 
 } 