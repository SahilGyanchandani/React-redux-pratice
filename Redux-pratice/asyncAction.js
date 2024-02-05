const redux = require('redux');
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const initialState = {
    loading: false,
    user: [],
    error: ''
}

const FETCH_USER_REQUESTED = 'FETCH_USER_REQUESTED';
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
const FETCH_USER_ERROR = 'FETCH_USER_ERROR';

const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUESTED
    }
}

const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

const fetchUserError = (error) => {
    return {
        type: FETCH_USER_ERROR,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case FETCH_USER_SUCCESS:
            return {
                loading: false,
                user: action.payload,
                error: ''
            }
        case FETCH_USER_ERROR:
            return {
                loading: false,
                user: [],
                error: action.payload
            }

        default:
            return state;
    }
}

const fetchUser = () => {
    return function (dispatch) {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res);
                const users = res.data.map(user => user.id)
                dispatch(fetchUserSuccess(users))
            })
            .catch(err => {
                console.log(err);
                const error = 'Something went Wrong'
                dispatch(fetchUserError(error))
            })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(fetchUser());
