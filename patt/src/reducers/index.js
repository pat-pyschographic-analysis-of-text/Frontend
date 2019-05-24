import { REGISTER_START, REGISTER_SUCCESS, REGISTER_ERROR, LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR, LOG_OUT_START, LOG_OUT_SUCCESS, CAPTURE_PROFILE, DELETE_PROFILE_SUCCESS, DELETE_PROFILE_START, DELETE_PROFILE_ERROR, UPDATE_PROFILE_START, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_ERROR, SEARCH_START, SEARCH_SUCCESS, SEARCH_ERROR, SEARCH_INPUT_START, SEARCH_INPUT_SUCCESS, SEARCH_INPUT_ERROR } from '../actions'

const initialState = {
    registering: false,
    loggingIn: false,
    updating: false, 
    error: null,
    testData: [],
    message: null,
    profile: null,
    userId: null,
    username: null,
    searching: null,
    searchResults: [],
    compareResults: [],
    searchInput: '',
    searchLoaded: null,
    twitter_handle: '',
    loggedIn: false
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
          userId: action.payload.userId,
          twitter_handle: action.payload.twitter_handle,
          username: action.payload.twitter_handle
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
          userId: action.payload.userId,
          username: action.payload.username,
          twitter_handle: action.payload.twitter_handle,
          loggedIn: true
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
          registering: false,
          loggingIn: false,
          updating: false, 
          error: null,
          testData: [],
          profile: null,
          userId: null,
          username: null,
          searching: null,
          searchResults: [],
          compareResults: [],
          searchInput: '',
          searchLoaded: null,
          twitter_handle: '',
          loggedIn: false
          
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
          message: action.payload,
          registering: false,
          loggingIn: false,
          updating: false, 
          error: null,
          testData: [],
          profile: null,
          userId: null,
          username: null,
          searching: null,
          searchResults: [],
          compareResults: [],
          searchInput: '',
          searchLoaded: null,
          twitter_handle: '',
          loggedIn: false
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
          message: action.payload.message,
          twitter_handle: action.payload.twitter_handle, 
          username: action.payload.username,
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
          message: "",
          error: "",
          searchLoaded: false 
        };
      case SEARCH_SUCCESS:
        return {
          ...state,
          message: action.payload.message, 
          error: "",
          searchResults: action.payload.searchResults,
          searchLoaded: true
        };
      case SEARCH_ERROR:
        return {
          ...state,
          message: "",
          error: action.payload,
          searchLoaded: false 
        };
      case SEARCH_INPUT_START:
        return {
          ...state,
          searching: true,
          message: '',
          err: ''
        };
      case SEARCH_INPUT_SUCCESS:
        console.log('input_success', state.compareResults)
        return {
          ...state,
          searching: false,
          message: action.payload.message,
          compareResults: [...state.compareResults, action.payload.searchInputResults]
        };
      case SEARCH_INPUT_ERROR:
        return {
          ...state,
          searching: false,
          message: '',
          err: action.payload
        }
      default:
        return state;
    } 
} 

export default rootReducer; 

