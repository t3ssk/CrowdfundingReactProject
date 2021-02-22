import React from 'react';
import { Counter } from './Counter/Counter';
import styles from './CounterSection.module.css';
import { CountInfo } from './CountInfo/CountInfo';

//Config type
interface config {
    id: string, 
    heading: string,
    desc: string,
    isLast: boolean
}

export const CounterSection : React.FC = () => {


    const counterConfig : config[]= [
        {id: 'count1', heading: '$89,914', desc: 'of $100,000 backed', isLast: false},
        {id: 'count2', heading: '5,007', desc: 'total backers', isLast: false},
        {id: 'count3', heading: '56', desc: 'days left', isLast: true}
    ]

    const counterInfoMap=counterConfig.map( (item:config)=>{return <CountInfo key={item.id} heading={item.heading} desc={item.desc} isLast={item.isLast}/>})

    return <section className={styles.Counter}>
        <div className={styles.Counter__info}>
            {counterInfoMap}
        </div>
        <Counter/>
    </section>
}