import { truncate } from "fs";

const initialState = false;



const modalSupportReducer = (state:boolean=initialState, action:{type: string} ):boolean => {
    switch(action.type){
        case 'SUPPORT_MODAL/ON':
            return true;
        case 'SUPPORT_MODAL/OFF':
            return false;
        default: 
        return state;
    }

}

export default modalSupportReducer;