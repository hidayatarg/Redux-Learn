/*
import { createStore } from 'redux'
import rootReducer from './reducers'
export default function configureStore(initalState) {
    return createStore(rootReducer, initalState)
}
*/
/*

This function will return a createStore method it will take two parameters rootReducer and an initalState. 
This is all it takes to configure the store.

**Redux Middleware** is a way to enhance Redux's behavior.

*

import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import reduxImmutableStateInvariant from 'redux-immutable-state-invarent'
export default function configureStore(initalState) {
    return createStore(rootReducer, initalState, applyMiddleware(reduxImmutableStateInvariant()))
}

this will warn us if we accidentally mutate Redux state.*/


//Configure React Dev Tools

import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import reduxImmutableStateInvariant from 'redux-immutable-state-invarent'
export default function configureStore(initalState) {
    // add support for redux dev tools
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 
    return createStore(rootReducer, initalState, composeEnhancers(applyMiddleware(reduxImmutableStateInvariant())))
}

//Now we can interact with redux dev tools in the browsers
