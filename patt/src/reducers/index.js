import { REGISTER_START, REGISTER_SUCCESS, REGISTER_ERROR, LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR, LOG_OUT_START, LOG_OUT_SUCCESS, CAPTURE_PROFILE, DELETE_PROFILE_SUCCESS, DELETE_PROFILE_START, DELETE_PROFILE_ERROR, UPDATE_PROFILE_START, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_ERROR, SEARCH_START, SEARCH_SUCCESS, SEARCH_ERROR } from '../actions'

const initialState = {
    registering: false,
    loggingIn: false,
    updating: false, 
    error: null,
    testData: [],
    message: null,
    profile: null,
    userId: null,
    searching: null,
    searchResults: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_START:
        return {
          ...state,
          registering: true,
          error: ""
        };
      case REGISTER_SUCCESS:
        return {
          ...state,
          registering: false,
          error: "",
          message: action.payload.message,
          userId: action.payload.userId
        };
      case REGISTER_ERROR:
        return {
          ...state,
          registering: false,
          error: action.payload,
          message: null
        };
      case LOGIN_START:
        return {
          ...state,
          loggingIn: true,
          error: ""
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loggingIn: false,
          error: "",
          message: action.payload.message,
          userId: action.payload.userId
        };
      case LOGIN_ERROR:
        return {
          ...state,
          loggingIn: false,
          error: action.payload,
          message: null
        };
      case LOG_OUT_START:
        return {
          ...state
        };
      case LOG_OUT_SUCCESS:
        return {
          ...state,
          message: action.payload,
          userId: null
        };
      case CAPTURE_PROFILE:
        return {
          ...state,
          profile: action.payload
        };
      case DELETE_PROFILE_START:
        return {
          ...state,
          deleting: true
        };
      case DELETE_PROFILE_SUCCESS:
        return {
          ...state,
          deleting: false,
          message: action.payload
        };
      case DELETE_PROFILE_ERROR:
        return {
          ...state,
          deleting: false,
          message: ""
        };
      case UPDATE_PROFILE_START:
        return {
          ...state,
          updating: true, 
          message: "",
          error: "", 
        };
      case UPDATE_PROFILE_SUCCESS:
        return {
          ...state,
          updating: false, 
          message: action.payload, 
          error: ""
        };
      case UPDATE_PROFILE_ERROR:
        return {
          ...state,
          updating: false, 
          message: "", 
          error: action.payload 
        };
      case SEARCH_START:
        return {
          ...state,
          searching: true,
          message: "",
          error: "" 
        };
      case SEARCH_SUCCESS:
        return {
          ...state,
          searching: false,
          message: action.payload.message, 
          error: "",
          searchResults: action.payload.searchResults
        };
      case SEARCH_ERROR:
        return {
          ...state,
          searching: false,
          message: "",
          error: action.payload
        };
      default:
        return state;
    } 
} 

export default rootReducer; 

