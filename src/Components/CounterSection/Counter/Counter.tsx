import React from 'react';
import styles from './Counter.module.css';

export const Counter: React.FC = () => {
    return (<div className={styles.Progress__holder}>
        <div className={styles.Progress__bar}></div>
    </div>)
}
