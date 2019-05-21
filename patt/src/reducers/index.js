import { REGISTER_START, REGISTER_SUCCESS, REGISTER_ERROR, LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR, TESTING, TESTING_ERROR } from '../actions'

const initialState = {
    registering: false,
    loggingIn: false,
    error: '',
    testData: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_START:
            return {
                ...state,
                registering: true,
                error: ''
            }
        case REGISTER_SUCCESS:
                return {
                    ...state,
                    registering: false,
                    error: ''
            }
        case REGISTER_ERROR:
                return {
                    ...state,
                    registering: false,
                    error: action.payload
            }
        case LOGIN_START:
                return {
                    ...state,
                    loggingIn: true,
                    error: ''
                }
        case LOGIN_SUCCESS:
                return {
                    ...state,
                    loggingIn: false,
                    error: ''
            }
        case LOGIN_ERROR:
                return {
                    ...state,
                    loggingIn: false,
                    error: action.payload
            }
        case TESTING:
                return {
                    ...state,
                    testData: action.payload
            }
        case TESTING_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default: return state; 
    } 
} 

export default rootReducer; 

