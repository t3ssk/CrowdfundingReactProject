export interface Backing {
    money: number,
    backers: number,
}

interface action {
    type: string, 
    payload: number | Backing
}

const initialState:Backing = {
    money: 0,
    backers: 0
}


const backersReducer = (state:Backing = initialState, action: action) => {
    switch (action.type) {
        case 'BACKERS/INIT': 
            if(typeof action.payload !== 'number'){
            return {...state, ...action.payload}}
            return state
        case 'BACKERS/ADD':
            if(typeof action.payload==='number'){
            const newMoney = state.money + action.payload
            const newBackers = state.backers + 1
           return {...state, money: newMoney, backers: newBackers}}
           return state 
        default:
            return state;
    }
}

export default backersReducer