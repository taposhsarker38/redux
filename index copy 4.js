const {createStore, combineReducers} = require('redux');
// products constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";
// products cart
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEM = "ADD_CART_ITEM";

// product state
const initialProductState = {
    products: ["sugar", "salt", "chocolate", "milk", "butter"],
    numberofProducts: 5
}
// cart state
const initialCartState = {
    cart: ["sugar"],
    numberofProducts: 1,
}
// product actions
const getProducts = () => {
    return {
        type: GET_PRODUCTS,
    };
};
const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product,
    };
};
// cart actions
const getCart = () => {
    return {
        type: GET_CART_ITEMS,
    };
}
const addCart = (product) => {
    return {
        type: ADD_CART_ITEM,
        payload: product,
    };
}

//productReducer
const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
            };
        case ADD_PRODUCT:
            return {
                // ...state,
                products: [...state.products, action.payload],
                numberofProducts: state.numberofProducts + 1,
            };
        default:
            return state;
    }
}
// cartReducer
const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case GET_CART_ITEMS:
            return {
                ...state,
            };
        case ADD_CART_ITEM:
            return {
                // ...state,
                cart: [...state.cart, action.payload],
                numberofProducts: state.numberofProducts + 1,
            };
        default:
            return state;
        }
    }
const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer
})
// Store
const store = createStore(rootReducer);

// subscribe
store.subscribe(() => {
    console.log(store.getState());
});
store.subscribe(() => {
    console.log(store.getState());
})
// dispatch
store.dispatch(getProducts());
store.dispatch(addProduct("chocolate"));
store.dispatch(getCart());
store.dispatch(addCart("milk"));