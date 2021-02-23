import React from 'react';
import {useDispatch} from 'react-redux';
import styles from './InfoCard.module.css';
import { MakerLogo } from './MakerLogo/MakerLogo';
import {Infotext} from './Infotext/Infotext';
import { Button } from '../UI/Button/Button';
import { Bookmark } from './Bookmark/Bookmark';
import { Card } from '../UI/Card/Card';

export const InfoCard: React.FC = () => {
    const dispatch = useDispatch()
    return(
        <div className = {styles.titleCard}>
            <Card>
            <MakerLogo/>
                <Infotext/>
                <div className={styles.Buttons}>
                    <Button onClick={()=>dispatch({type: 'OPTIONS_MODAL/ON'})}>Back this project</Button>
                    <Bookmark/>
                </div>
            </Card>
        </div>
    )
};

//TO DO: 
//On click, který otevře modal s možnostma