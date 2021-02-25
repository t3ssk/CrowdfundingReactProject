import React from 'react';
import {useSelector} from 'react-redux';
import {Backing} from '../../store/reducers/backersReducer';
import { Card } from '../UI/Card/Card';
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
    const backers = useSelector((state:{backers:Backing}) => state.backers)
    const getString = (num:number) => {
            const numString = num.toString().split('').reverse()
            const numArr = []
            for(let i=numString.length; i>=0; i--){
                if(i===3){
                    numArr.push(numString[i], ',')
                } else {
                    numArr.push(numString[i])
                }
            }
            
            return numArr.join('')
    }

    let content = 'loading...'

    const counterConfig : config[]= [
        {id: 'count1', heading:  backers.money === 0 ? content: `$ ${getString(backers.money)}`, desc: 'of $100,000 backed', isLast: false},
        {id: 'count2', heading: backers.backers === 0 ? content:  getString(backers.backers), desc: 'total backers', isLast: false},
        {id: 'count3', heading: '56', desc: 'days left', isLast: true}
    ]

    const counterInfoMap=counterConfig.map( (item:config)=>{return <CountInfo key={item.id} heading={item.heading} desc={item.desc} isLast={item.isLast}/>})

    return <div className={styles.Counter}>
        <Card>
        <div className={styles.Counter__info}>
            {counterInfoMap}
        </div>
        <Counter/>
        {backers.money >= 100000 && <h3>🎉 Thanks for your support, we now have all the money we need 🎉</h3>}
        </Card>
    </div>
}