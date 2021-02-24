import React from 'react';
import { Button } from '../../UI/Button/Button';
import { Card } from '../../UI/Card/Card';
import styles from './LoginForm.module.css';

export const LoginForm: React.FC = () => {
    return (
    <React.Fragment>
    <Card small={true}>
        <h2 className={styles.Login__Welcome}>Welcome back!</h2>
        <form className={styles.Form}>
            <div className={styles.Input}>
                <label htmlFor='email'>E-mail</label>
                <input type='email' id='email' placeholder='name@email.com'/>
            </div>
            <div className={styles.Input}>
                <label htmlFor='password'>Password</label>
                <input type='password' id='email'  placeholder='ooooooo'/>
            </div>
            <Button margin={30}>Login</Button>
        </form>
    </Card>
    </React.Fragment>)
}