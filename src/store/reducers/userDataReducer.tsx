
export interface stateIF {
    username: string|null,
    name: string|null,
    lastName: string|null,
    userId: string|null,
    address: string|null,
    city: string|null,
    zip: string|null,
    phone: string|null,
    bookmarked: boolean|null
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
    phone: null,
    bookmarked: false}


export const userDataReducer = (state:stateIF=initialState, action:action) => {
    switch (action.type) {
        case 'USER/FETCH_DATA':
            return {...state, ...action.payload};
        case 'USER/ERASE_DATA': 
            return initialState
        case 'USER/UPDATE_BOOKMARK': 
            const prevBookmark = state.bookmarked
            return {...state, bookmarked: !prevBookmark}
        default:
            return state;
    }
}