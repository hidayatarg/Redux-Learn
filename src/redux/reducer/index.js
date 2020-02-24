	// Root Reducer
    import { combineReducers } from 'redux'
    import books from './bookreducer'
    
    const rootReducer = combineReducers({
        // each property set to corresponding reducer
        // since it is object we can omit the right hand side
        books: books
    })
    
    export default rootReducer