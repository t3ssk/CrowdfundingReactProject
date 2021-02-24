const initialState = {
    userId: null,
    refreshToken: null
};

export const userReducer = (state=initialState, action: {type:string, payload?: {userId: string, refreshToken: string}}) => {
    switch(action.type){
        case 'LOG-IN/USER':
            return {...state,  ...action.payload};
        case 'LOG-OUT/USER': {
            return initialState
        }
        default: 
            return state;
    }

}