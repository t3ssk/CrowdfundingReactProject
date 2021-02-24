const initialState = false;

const optionsModalReducer = (state:boolean=initialState, action: {type:string}): boolean => {
    switch(action.type){
        case 'OPTIONS_MODAL/ON':
        return true;
        case 'OPTIONS_MODAL/OFF':
        return false;
        default: 
        return state
    }
}

export default optionsModalReducer;