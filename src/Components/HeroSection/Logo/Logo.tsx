import React from 'react';
import logo from '../../../images/logo.svg';
import styles from './Logo.module.css';

export const Logo:React.FC = () => {
    return(
        <img src={logo} alt='company logo' className={styles.Logo}/>
    )
}
