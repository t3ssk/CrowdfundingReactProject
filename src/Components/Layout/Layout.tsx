import React from 'react';
import { CounterSection } from '../CounterSection/CounterSection';
import { HeroSection } from '../HeroSection/HeroSection';
import { InfoCard } from '../InfoCardSection/InfoCard';
import styles from './Layout.module.css';

export const Layout : React.FC = () => {
    return (<div className={styles.Main}>
                <HeroSection/>
                <InfoCard/>
                <CounterSection/>
            </div>)
}