export interface IState {
    users: IUserDataState,
    mockData: IMockDataState
}

export interface IUserDataState {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}

export const initialUserDataState: IUserDataState = {
    id: 'user_0',
    firstName: 'Guest_FN',
    lastName: 'Guest_LN',
    email: 'foo@bar.com'
};

export interface IMockDataState {
    id: string;
    counter: number;
}

export const initialMockDataState: IMockDataState = {
    id: 'mockId_0',
    counter: 0
}

export const initialState: IState = {
    users: initialUserDataState,
    mockData: initialMockDataState
};

export function cloneState<T>(oldState: T): T {
    let newState: any = {};

    for (let k in oldState) {
        newState[k] = oldState[k];
    }

    return newState as T;
};