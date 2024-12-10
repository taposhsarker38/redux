const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");
// products constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

// product state
const initialProductState = {
  products: ["sugar", "salt", "chocolate", "milk", "butter"],
  numberofProducts: 5,
};

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
};

// Store
const store = createStore(productReducer,applyMiddleware(logger));

// subscribe
store.subscribe(() => {
  console.log(store.getState());
});

// dispatch
store.dispatch(getProducts());
store.dispatch(addProduct("chocolate"));
