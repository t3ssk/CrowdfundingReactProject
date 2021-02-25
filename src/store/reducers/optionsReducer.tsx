import {option} from '../../Utility/OptionsConfig';
const initialState: option[] = [
    { id: 'opt1', 
    title: 'Pledge with no reward', 
    desc: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.", 
    left: 0, 
    backingOnly: true,
    pledge: '',
    minPrice: 1,
    active: false,
    disabled: function(){
        if (this.left>0){return false}
        return true
    }},
    { id: 'opt2', 
    title: 'Bamboo Stand', 
    desc: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.", 
    left: 0, 
    backingOnly: false,
    pledge: 'Pledge $25 or more',
    minPrice: 25,
    active: false,
    disabled: function(){
        if (this.left>0){return false}
        return true
    }},
    { id: 'opt3', 
    title: 'Black Edition Stand', 
    desc: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.", 
    left: 0, 
    backingOnly: false,
    pledge: 'Pledge $75 or more',
    minPrice: 75,
    active: false,
    disabled: function(){
        if (this.left>0){return false}
        return true
    }},
    { id: 'opt4', 
    title: 'Mahogany Special Edition', 
    desc: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.", 
    left: 0, 
    backingOnly: false,
    pledge: 'Pledge $200 or more',
    minPrice: 200,
    active: false,
    disabled: function(){
        if (this.left>0){return false}
        return true
    }},


]

const optionsReducer = (state = initialState, action: {type: string, payload: any}):option[] => {
    switch(action.type){
        case 'OPTIONS/CHANGE_AMOUNT': 
            const stateCopy = [...state];
            stateCopy.forEach((item:option)=>{
                if(item.id === action.payload.id){
                    item.left -= 1 
                }
            })
            return stateCopy
        case 'OPTION/SET_ACTIVE': 
            const copy = [...state];
            copy.forEach((item:option)=>{
                if(item.id === action.payload.id){
                    item.active = true
                }
                if(item.id !== action.payload.id){
                    item.active = false
                }
            } ) 
            return copy;
        case 'OPTION-NOREWARD/FETCH': 
            const stateCp = [...state];
            stateCp.forEach((item:option)=>{
                if(item.id === 'opt1'){
                    item.left = action.payload
                }
            })
            return stateCp 
        case 'OPTION-BAMBOO/FETCH': 
        const stateCopyBamboo = [...state];
            stateCopyBamboo.forEach((item:option)=>{
                if(item.id === 'opt2'){
                    item.left = action.payload
                }
            })
            return stateCopyBamboo 
        case 'OPTION-BLACK/FETCH':
            const stateCopyBlack = [...state];
            stateCopyBlack.forEach((item:option)=>{
                if(item.id === 'opt3'){
                    item.left = action.payload
                }
            })
            return stateCopyBlack 
        case 'OPTION-MAHOGANY/FETCH': 
            const stateCopyMahog = [...state];
            stateCopyMahog.forEach((item:option)=>{
                if(item.id === 'opt4'){
                    item.left = action.payload
                }
            })
            return stateCopyMahog 
        default: 
        return state;}
}

export default optionsReducer;