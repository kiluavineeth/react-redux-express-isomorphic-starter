import { IMockDataState, initialMockDataState, cloneState } from '../state'
import { isType, MockDataAction } from '../actions';

export function mockDataReducer(state: IMockDataState = initialMockDataState, action: any): IMockDataState {
    let newState = cloneState(state);
    if (isType(action, MockDataAction)) {
        newState.counter += 1;
    } else {
        return state;
    }

    return newState;
}