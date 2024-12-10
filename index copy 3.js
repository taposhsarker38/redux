const {createStore} = require('redux');
// define constants
const ADD_USER = 'ADD_USER';
// state
const initialState = {
    users:['Taposh Sarker'],
    count: 1
}
// action - object- type, payload
const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    };
}; 

// reducer
const userReducer = (state = initialState , action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                users : [...state.users, action.payload],
                count: state.count + 1,
            };
        default:
            return state;
    }
}
// store
const store = createStore(userReducer);
// subscribe
store.subscribe(() => {
    console.log(store.getState());
});
store.dispatch(addUser("Apurba Kumer"));