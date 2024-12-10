const {createStore} = require('redux');
// define constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_USER = 'ADD_USER';
// state
const initialCounterState = {
    count: 0
}
const initialUserState = {
    users:[{name: 'Taposh Sarker'}],
};
// action - object- type, payload
const incrementCounter = () => {
    return {
        type: INCREMENT,
    };
}; 
const decrementCounter = () => {
    return {
        type: DECREMENT,
    };
}; 
const addUser = () => {
    return {
        type: ADD_USER,
        payload:{name:'Apurba Kumer'}
    };
}; 

// reducer
const counterReducer = (state = initialCounterState, action) => {
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
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(addUser());