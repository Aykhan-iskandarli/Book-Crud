import {createStore,applyMiddleware,compose} from "redux"
import Thunk from "redux-thunk"
import rootReducers from "./reducers/rootReducers"


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducers, composeEnhancer(applyMiddleware(Thunk)))



export default store;