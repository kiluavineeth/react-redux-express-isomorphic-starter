import { IUserDataState, initialUserDataState, cloneState } from '../state'
import { isType, UserDataAction } from '../actions';
import { access } from 'fs';

export function userDataReducer(state: IUserDataState = initialUserDataState, action: any): IUserDataState {
    let newState = cloneState(state);
    if (isType(action, UserDataAction)) {
        newState.firstName = action.payload.firstName;
        newState.lastName = action.payload.lastName;
        newState.email = action.payload.email;
    } else {
        return state;
    }

    return newState;
}