import React from 'react';
import {useDispatch} from 'react-redux';
import { Modal } from '../UI/Modal/Modal';
import { Button } from '../UI/Button/Button';
import checkMark from '../../images/icon-check.svg';
import styles from './SupportModal.module.css';

export const SupportModal:React.FC = () => {
    const dispatch = useDispatch();
    return(
        <Modal large={false}>
            <div className={styles.icon}>
                <img src={checkMark} alt='checkmark icon'/>
            </div>
            <div className={styles.SupportModal}>
            <h2>Thanks for your support!</h2>
            <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
                an email once our campaign is completed.</p>
            <Button onClick={()=>dispatch({type: 'SUPPORT_MODAL/OFF'})}>Got it!</Button>
            </div>
        </Modal>
    )
}
