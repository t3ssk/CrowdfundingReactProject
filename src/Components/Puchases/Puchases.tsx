import React from 'react';
import { Card } from '../UI/Card/Card';
import styles from './Purchases.module.css';

interface PurchasesConfig{
    donated: number,
    product: string,
    orderNo: number,
    date: Date
}

export const Purchases:React.FC = () => {
    const getOrderNum = (): number => {
        return Math.floor(Math.random()*1000000)
    }
  
    const dummyContent:PurchasesConfig[] = [
        {donated: 25, product: 'Bamboo Stand', orderNo: getOrderNum(), date: new Date()},
        {donated: 5, product: 'No reward', orderNo: getOrderNum(), date: new Date()},
        {donated: 95, product: 'Black Edition Stand', orderNo: getOrderNum(), date: new Date()}
    ]

    const ordersMap = dummyContent.map((item:PurchasesConfig)=>{
        return (
            <div className={styles.Order}>
                <div className={styles.Head__Info}>
                    <h4>{item.product}</h4> 
                    <p>Order number: {item.orderNo}</p>
                </div>
                <p><span>Date ordered:</span> {item.date.toLocaleString('cs-CZ', { timeZone: 'UTC' })} </p>
                <p><span>You donated:</span> ${item.donated}</p>
            </div>
        )
    })
    return(<div className={styles.Purchases}>
        <Card>
            <h2>Thank you for having our backs!</h2>
            <h3>You chose to support these projects: </h3>
            {ordersMap}
        </Card>
    </div>)
}
