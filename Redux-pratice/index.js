const redux = require('redux')
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers
const applyMiddlerware = redux.applyMiddleware

const { createLogger } = require('redux-logger');
const loggerMiddleware = createLogger();

const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'
const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'

function orderIceCream(qty = 1) {
    return {
        type: ICECREAM_ORDERED,
        payload: qty
    }
}

function restockIceCream(qty = 1) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}

function orderCake(qty = 1) {
    return {
        type: CAKE_ORDERED,
        payload: qty
    }
}

function restockCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    }
}

// const initialState = {
//     numOfIceCream: 20
// }

const initialIceCreamState = {
    numOfIceCream: 20
}

const initialCakeState = {
    numOfCake: 10
}

const cakeReducer = (state = initialCakeState, action) => {
    // console.log(action.payload);
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCake: state.numOfCake - 1
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCake: state.numOfCake + action.payload
            }
        default:
            return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    // console.log(action.payload);
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - 1
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream + action.payload
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddlerware(loggerMiddleware))

console.log('initial state', store.getState());
const unsubscribe = store.subscribe(() => {}
    // console.log('updated state', store.getState())
);

// store.dispatch(orderIceCream())
// store.dispatch(orderIceCream())
// store.dispatch(restockIceCream(2))


const actions = bindActionCreators(
    { orderIceCream, restockIceCream, orderCake, restockCake }
    , store.dispatch
)

actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(2);
actions.orderCake();
actions.orderCake();
actions.restockCake(2);

unsubscribe()