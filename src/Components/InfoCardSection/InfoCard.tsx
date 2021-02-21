import React from 'react';
import styles from './InfoCard.module.css';
import { MakerLogo } from './MakerLogo/MakerLogo';
import {Infotext} from './Infotext/Infotext';
import { Button } from '../UI/Button/Button';
import { Bookmark } from './Bookmark/Bookmark';

export const InfoCard: React.FC = () => {
    return(
        <div className = {styles.titleCard}>
            <MakerLogo/>
            <Infotext/>
            <div className={styles.Buttons}>
                <Button>Back this project</Button>
                <Bookmark/>
            </div>
        </div>
    )
};

//TO DO: 
//On click, který otevře modal s možnostma