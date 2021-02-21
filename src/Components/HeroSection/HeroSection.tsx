import React from 'react';
import {Desktop, Mobile} from '../../Utility/MediaQueries';
import styles from './HeroSection.module.css';
import { Navbar } from './Navbar/Navbar';

export const HeroSection : React.FC = () => {
    return (
    <React.Fragment>
    <Desktop>
    <header className={`${styles.Hero} ${styles.desktop}`}>
        <Navbar/>
    </header>
    </Desktop>

    <Mobile>
    <header className={`${styles.Hero} ${styles.mobile}`}>
        <Navbar/>
    </header>
    </Mobile>
    </React.Fragment>)
}