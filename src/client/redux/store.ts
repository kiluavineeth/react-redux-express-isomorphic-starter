import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { IState, initialState } from "./state";
import rootReducer from './reducers/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export function setupStore(initState: IState = initialState): Redux.Store<IState> {
    const middlewares: Redux.Middleware[] = [
        thunk
    ];

    // TODO : Disable this for PROD
    const composeEnhancers = composeWithDevTools({
        // Add other enhancers here.
    });

    const store: Redux.Store<IState> = createStore(rootReducer, initState, composeEnhancers(
        applyMiddleware(...middlewares),
    ));

    return store;
}