import React from 'react';
import logo from '../../../images/logo-mastercraft.svg'
import styles from './MakerLogo.module.css';

export const MakerLogo:React.FC = () =>{
    return <div className={styles.Logo}>
        <img src={logo} alt="Manufactorer's logo"/>
    </div>
}