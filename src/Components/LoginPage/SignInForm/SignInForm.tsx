import React from 'react';
import { Button } from '../../UI/Button/Button';
import { Card } from '../../UI/Card/Card';
import styles from './SignInForm.module.css';

interface SignIn {
    id: string,
    label: string,
    type: string,
    placeholder: string,
    value?: any
}

export const SignInForm: React.FC = () => {

    const SignInConfig:SignIn[] = [
        {id: 'email', type:'email', label: 'E-mail', placeholder:'eg. name@email.com'},
        {id: 'usrname', type:'text', label: 'User name', placeholder:'eg. Mrs.Doom500'},
        {id: 'fname', type:'text', label: 'First name', placeholder:'eg. Jane'},
        {id: 'lname', type:'text', label: 'Last name', placeholder:'eg.Doe'},
        {id: 'address', type:'text', label: 'Adress line 1', placeholder:'eg. Prazska 3'},
        {id: 'city', type:'text', label: 'City', placeholder:'eg.Prague'},
        {id: 'zip', type:'text', label: 'ZIP code', placeholder:'19000'},
        {id: 'phone', type:'tel', label: 'Phone number', placeholder:'605789321'},
    ]

    const signInMap = SignInConfig.map((item:SignIn)=>{
        return( <div className={styles.Input} key={item.id}>
            <label htmlFor={item.id}>{item.label}</label>
            <input type={item.type} id={item.id} placeholder={item.placeholder}/>
        </div>)
    })

    return(<Card small={true}>
         <h2 className={styles.Signin__Welcome}>Welcome to the club!</h2>
        <form className={styles.Form}>
                {signInMap}
            <Button margin={30}>Sign me up!</Button>
        </form>
    </Card>)
}
