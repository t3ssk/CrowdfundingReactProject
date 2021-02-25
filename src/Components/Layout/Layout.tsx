import React,{useEffect} from 'react';
import {Route} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/database';
import { CounterSection } from '../CounterSection/CounterSection';
import { HeroSection } from '../HeroSection/HeroSection';
import { InfoCard } from '../InfoCardSection/InfoCard';
import { Maincontent } from '../Maincontent/Maincontent';
import { OptionsModal } from '../OptionsModal/OptionsModal';
import { SupportModal } from '../SupportModal/SupportModal';
import {Navbar} from '../HeroSection/Navbar/Navbar';
import styles from './Layout.module.css';
import { LoginPage } from '../LoginPage/LoginPage';
import { Purchases } from '../Puchases/Puchases';

interface LayoutProps {
    supportModal?: boolean
}
export const Layout : React.FC<LayoutProps> = (props) => {
    const suportModal = useSelector((state:{supportModal:boolean})=> state.supportModal);
    const optionsModal = useSelector((state:{optionsModal:boolean})=>state.optionsModal);
    const dispatch = useDispatch()

    useEffect (() => {
        firebase.database().ref('backers/').on('value', (snapshot)=>{
            const data = snapshot.val();
            dispatch({type: 'BACKERS/INIT', payload: data})
        })
        firebase.database().ref('products/').on('value', (snapshot)=>{
            const data = snapshot.val();
            dispatch({type: 'OPTION-NOREWARD/FETCH', payload: data.opt1});
            dispatch({type: 'OPTION-BAMBOO/FETCH', payload: data.opt2});
            dispatch({type: 'OPTION-BLACK/FETCH', payload: data.opt3});
            dispatch({type: 'OPTION-MAHOGANY/FETCH', payload: data.opt4});
        })
        return ()=>{
            firebase.database().ref('backers/').off()
            firebase.database().ref('products/').off();}
    })

    return (
        <React.Fragment>
            <main className={styles.Main}>
                <Route exact path='/'>
                <HeroSection/>
                <InfoCard/>
                <CounterSection/>
                <Maincontent/>
                </Route>
                <Route exact path='/login'>
                    <div className={styles.BG__DARK}>
                    <Navbar/></div>
                    <LoginPage/>
                </Route>
                <Route exact path='/purchases'>
                    <div className={styles.BG__DARK}>
                    <Navbar/></div>
                    <Purchases/>
                </Route>
            </main>
            {suportModal && <SupportModal/>}
            {optionsModal && <OptionsModal/>}
        </React.Fragment>)
}

