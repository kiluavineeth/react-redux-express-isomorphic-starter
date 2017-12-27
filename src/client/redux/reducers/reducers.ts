import { combineReducers } from 'redux';
import { userDataReducer } from './userDataReducer';
import { mockDataReducer } from './mockDataReducer';
import { IState } from '../state';

const rootReducer = combineReducers<IState>({
    users: userDataReducer,
    mockData: mockDataReducer
});

export default rootReducer;