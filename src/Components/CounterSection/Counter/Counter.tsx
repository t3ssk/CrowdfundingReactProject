import React from 'react';
import {useSelector} from 'react-redux';
import styles from './Counter.module.css';

export const Counter: React.FC = () => {
    const backers = useSelector((state:{backers:{money:number,backers:number}}) => state.backers)
    const calculateWidth = (num:number) => {
       const newNum = (num/100000)*100
       if(newNum <= 100 ) {return newNum}
       else return 100
    }
    return (<div className={styles.Progress__holder}>
        <div className={styles.Progress__bar} style={{width: `${calculateWidth(backers.money)}%`}}></div>
    </div>)
}

