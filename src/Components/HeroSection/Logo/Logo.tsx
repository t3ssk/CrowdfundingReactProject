import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../../images/logo.svg';
import styles from './Logo.module.css';

export const Logo:React.FC = () => {
    return(
        <Link to='/'>
        <img src={logo} alt='company logo' className={styles.Logo}/></Link>
    )
}
