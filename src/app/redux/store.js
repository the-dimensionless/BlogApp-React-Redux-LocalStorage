import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from 'redux-thunk';
import { loadState, saveState } from '../components/localStorage';
import throttle from 'lodash.throttle';
import data from './../../assets/data.json';

export default function configureStore(initialState) {
    const persistedState = loadState();
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

    const store = createStore(
        rootReducer,
        persistedState,
        composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
    );

    store.subscribe(throttle(() => {
        saveState({
            posts: store.getState().posts
        });
    }, 1000));
    return store;
}
