import React from 'react';
import styles from './CountInfo.module.css';

interface CounterProps {
    heading: string;
    desc: string;
    isLast: boolean;
}
export const CountInfo: React.FC<CounterProps> = (props) => {
    
    return <div className={`${styles.Counter__Item} ${!props.isLast ? styles.Counter__bordered : null}`}>
        <h2>{props.heading}</h2>
        <p>{props.desc}</p>
        <hr className={styles.Deco__underline}/>
    </div>
}
