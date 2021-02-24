export interface stateIF {
    username: string|null,
    name: string|null,
    lastName: string|null,
    userId: string|null,
    address: string|null,
    city: string|null,
    zip: string|null,
    phone: string|null
}
interface action {
    type: string,
    payload: stateIF
}

const initialState = {username: null,
    name: null,
    lastName: null,
    userId: null,
    address: null,
    city: null,
    zip: null,
    phone: null}


export const userDataReducer = (state:stateIF=initialState, action:action) => {
    switch (action.type) {
        case 'USER/FETCH_DATA':
            return {...state, ...action.payload};
        case 'USER/ERASE_DATA': 
            return initialState
        default:
            return state;
    }
}