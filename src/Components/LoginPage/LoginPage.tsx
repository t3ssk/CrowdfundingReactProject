import React from 'react';
import {LoginForm} from './LoginForm/LoginForm';
import logo from '../../images/logo-dark.svg';
import styles from './LoginPage.module.css';
import { SignInForm } from './SignInForm/SignInForm';

export const LoginPage: React.FC = () => {
    const [member, setMember] = React.useState<boolean>(false)

    return(<div className={styles.Login}>
        <div className={styles.Logo}>
            <img src={logo} alt='company logo'/>
        </div>
        {member &&  <LoginForm/>}
        {!member && <SignInForm/>}

        <h4 onClick={()=>setMember(!member)}>I am {member? 'not' : 'already'} a member, {member? 'sign':'log'} me in! </h4>
    </div>)
}
