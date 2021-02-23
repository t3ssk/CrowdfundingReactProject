import React from 'react';
import { Card } from '../UI/Card/Card';
import { Info } from './Info/Info';
import styles from './Maincontent.module.css';
import { Productcard } from './Productcards/Productcards';

export const Maincontent: React.FC = () => {
    return (
    <div className={styles.Main}>
        <Card>
            <Info/>
            <Productcard/>
        </Card>
        
    </div>)
}