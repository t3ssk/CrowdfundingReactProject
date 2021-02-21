import React from 'react';
import { NavItems } from '../NavItems/NavItems';
import styles from './MobileNav.module.css';


export const MobileNav:React.FC = () => {
    return (<div className={styles.MobileNav}>
                <NavItems/>
            </div>)
}