export type option = {
    id: string, 
    title: string,
    desc: string,
    left: number ,
    pledge: string,
    minPrice: number,
    disabled: ()=>boolean,
    backingOnly: boolean,
    active: boolean,
}


export const optionsConfig:option[] = [
    { id: 'opt1', 
    title: 'Pledge with no reward', 
    desc: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.", 
    left: 10000000, 
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
    left: 101, 
    backingOnly: false,
    pledge: 'Pledge $25 or more',
    minPrice: 25,
    active: true,
    disabled: function(){
        if (this.left>0){return false}
        return true
    }},
    { id: 'opt3', 
    title: 'Black Edition Stand', 
    desc: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.", 
    left: 64, 
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