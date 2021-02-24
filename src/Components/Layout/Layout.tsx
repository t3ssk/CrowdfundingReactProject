import React from 'react';
import {Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
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

