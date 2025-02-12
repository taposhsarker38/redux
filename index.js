//async actions - api calling
// api url - https://jsonplaceholder.typicode.com/todos
// middleware- redux-thunk
// axios api

const { default: axios } = require("axios");
const { applyMiddleware, createStore } = require("redux");
const { thunk } = require("redux-thunk");

// constants
const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
const GET_TODOS_FAILED = 'GET_TODOS_FAILED';  
const API_URL = 'https://jsonplaceholder.typicode.com/todo'
// states
const initialTodosState = {
    todos: [],
    isLoading: false,
    error: null,
}
// actions

const getTodosRequest = () => {
    return {
        type: GET_TODOS_REQUEST,
    }
};
const getTodosSuccess = (todos) => {
    return {    
        type: GET_TODOS_SUCCESS,
        payload: todos,
    };
};
const getTodosFailed = (error) => {
    return {
        type: GET_TODOS_FAILED,
        payload: error,
    };
};
// reducers
const todosReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload,
            };    
        case GET_TODOS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
        }
    };

//async actions - creator
const fetchData = () => {
    return (dispatch) => {
        dispatch(getTodosRequest());
        //for fetch
        // fetch('https://jsonplaceholder.typicode.com/todos')
        // .then(response => response.json())
        // .then(json => dispatch(getTodosSuccess(json)))
        // .catch(error => dispatch(getTodosFailed(error)));
        // for axios
        axios.get(API_URL)
        .then((res) =>{
            const todos = res.data;
            const titles = todos.map((todo) => todo.title);
            dispatch(getTodosSuccess(titles));
        })
        .catch((error) => {
            const errorMessage = (error.message);
            dispatch(getTodosFailed(errorMessage))
        });
    }
}
// store
const store = createStore(todosReducer, applyMiddleware(thunk));
// subscribe
store.subscribe(() => {
    console.log(store.getState());
})
// dispatch
store.dispatch(fetchData());