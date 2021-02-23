import React from 'react';
import {useSelector} from 'react-redux';
import { CounterSection } from '../CounterSection/CounterSection';
import { HeroSection } from '../HeroSection/HeroSection';
import { InfoCard } from '../InfoCardSection/InfoCard';
import { Maincontent } from '../Maincontent/Maincontent';
import { OptionsModal } from '../OptionsModal/OptionsModal';
import { SupportModal } from '../SupportModal/SupportModal';
import styles from './Layout.module.css';

interface LayoutProps {
    supportModal?: boolean
}
export const Layout : React.FC<LayoutProps> = (props) => {
    const suportModal = useSelector((state:{supportModal:boolean})=> state.supportModal);
    const optionsModal = useSelector((state:{optionsModal:boolean})=>state.optionsModal);
    return (
        <React.Fragment>
    <div className={styles.Main}>
                <HeroSection/>
                <InfoCard/>
                <CounterSection/>
                <Maincontent/>
            </div>
            {suportModal && <SupportModal/>}
            {optionsModal && <OptionsModal/>}
        </React.Fragment>)
}

