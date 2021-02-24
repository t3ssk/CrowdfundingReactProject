import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { Modal } from '../UI/Modal/Modal';
import cross from '../../images/icon-close-modal.svg';
import styles from './OptionsModal.module.css';
import { OptionsList } from './OptionsList/OptionsList';

export const OptionsModal:React.FC = () => {
    const dispatch = useDispatch()
    return(
        <Modal large={true}>
            <div className='closeBtn'>
                <img src={cross} alt='close button' className={styles.Cross} onClick={()=>dispatch({type: 'OPTIONS_MODAL/OFF'})}/>
            </div>
            <div className={styles.Options__Content}>
            <h3>Back this project</h3>
            <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
            </div>
            <OptionsList/>
        </Modal>
    )
}
