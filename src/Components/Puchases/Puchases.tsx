import React from 'react';
import {useSelector} from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/database'
import { Card } from '../UI/Card/Card';
import styles from './Purchases.module.css';
import {stateIF} from '../../store/reducers/userDataReducer';

interface PurchasesConfig{
    donated: number,
    item: string,
    orderNum: number,
    date: Date
}

export const Purchases:React.FC = () => {
    const user = useSelector((state: {user:{userId: string, refreshToken: string}}) => state.user)
    const userData = useSelector((state:{userData: stateIF}) => state.userData)
    const [orederData, setOrderData] = React.useState<any>([])
    
    React.useEffect(()=>{
        if(user.userId){
        firebase.database().ref('/orders').orderByChild("orderedBy").equalTo(userData.userId).on('value', (snapshot)=>{
            const data = snapshot.val();
            const dataArr = []
            for(const key in data){
                
                dataArr.push(data[key])
            }
            setOrderData(dataArr)
            console.log(orederData)
        })}

    },[orederData, userData.userId, user.userId])

    const getOrderNum = (): number => {
        return Math.floor(Math.random()*1000000)
    }
  
    const dummyContent:PurchasesConfig[] = [
        {donated: 25, item: 'Bamboo Stand', orderNum: getOrderNum(), date: new Date()},
        {donated: 5, item: 'No reward', orderNum: getOrderNum(), date: new Date()},
        {donated: 95, item: 'Black Edition Stand', orderNum: getOrderNum(), date: new Date()}
    ]

    const ordersMap = orederData.map((item:any)=>{
        return (
            <div className={styles.Order} key={item.orderNum}>
                <div className={styles.Head__Info}>
                    <h4>{item.item}</h4> 
                    <p>Order number: {item.orderNum}</p>
                </div>
                <p><span>Date ordered:</span> {item.date} </p>
                <p><span>You donated:</span> ${item.donated}</p>
            </div>
        )
    })
    return(<div className={styles.Purchases}>
        <Card>
            <h2>Thank you for having our backs{userData.username && ', ' + userData.username}!</h2>
            <h3>You chose to support these projects: </h3>
            {orederData.length>0 ? ordersMap : <h3>You haven't made an order yet.</h3>}
        </Card>
    </div>)
}
