import React from 'react';
import { HeroSection } from '../../Components/HeroSection/HeroSection';
import { InfoCard } from '../../Components/InfoCardSection/InfoCard';
import styles from './Layout.module.css';

export const Layout : React.FC = () => {
    return (<div className={styles.Main}>
        <HeroSection/>
        <InfoCard/>
    </div>)
}