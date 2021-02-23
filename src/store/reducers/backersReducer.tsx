export interface Backing {
    money: number,
    backers: number,
}

interface action {
    type: string, 
    payload: number
}

const initialState:Backing = {
    money: 89914,
    backers: 5007
}


const backersReducer = (state:Backing = initialState, action: action) => {
    switch (action.type) {
        case 'BACKERS/ADD':
            const newMoney = state.money + action.payload
            const newBackers = state.backers + 1
           return {...state, money: newMoney, backers: newBackers} 
            ;
    
        default:
            return state;
    }
}

export default backersReducer