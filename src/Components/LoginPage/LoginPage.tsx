import React from 'react';
import {useSelector} from 'react-redux';
import {LoginForm} from './LoginForm/LoginForm';
import {Redirect} from 'react-router-dom';
import logo from '../../images/logo-dark.svg';
import styles from './LoginPage.module.css';
import { SignInForm } from './SignInForm/SignInForm';

export const LoginPage: React.FC = () => {
    const [member, setMember] = React.useState<boolean>(false)
    const user = useSelector((state:any) => state.user)
    return(<div className={styles.Login}>
            {user.refreshToken !==null && <Redirect to='/'/>}
        <div className={styles.Logo}>
            <img src={logo} alt='company logo'/>
        </div>
        {member &&  <LoginForm/>}
        {!member && <SignInForm/>}

        <h4 onClick={()=>setMember(!member)}>I am {member? 'not' : 'already'} a member, {member? 'sign':'log'} me in! </h4>
    </div>)
}
