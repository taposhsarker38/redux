const {createStore} = require('redux');
// define constants
const INCREMENT = 'INCREMENT';
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';    
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
// state
const initialState = {
    count: 0
}

// action - object- type, payload
const incrementCounterAction = () => {
    return {
        type: INCREMENT,
    };
}; 
const decrementCounterAction = () => {
    return {
        type: DECREMENT,
    };
}; 
const resetCounterAction = () => {
    return {
        type: RESET, 
    };
}; 
const incrementCounterByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE, 
        payload: value
    };
}; 

// reducer
const counterReducer = (state = initialState , action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };
        case RESET:
            return {
                ...state,
                count: 0,
            };
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload,
            };
        default:
            return state;
    }
}
// store
const store = createStore(counterReducer);
// subscribe
store.subscribe(() => {
    console.log(store.getState());
});
// dispatch
// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(decrementCounterAction());
// store.dispatch(resetCounterAction());
store.dispatch(incrementCounterByValue(10));