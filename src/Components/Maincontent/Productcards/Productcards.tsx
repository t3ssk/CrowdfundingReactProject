import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styles from './Productcards.module.css';
import {option} from '../../../Utility/OptionsConfig';
import { Button } from '../../UI/Button/Button';

export const Productcard:React.FC = () => {
    const opts = useSelector((state: {options: option[]}) => state.options);
    const dispatch = useDispatch();
    const preppedOptions = opts.filter((item:option)=>item.backingOnly !== true);
    const optionsMap = preppedOptions.map((item:option)=>{
        const handleClick = () => {
            dispatch({type: 'OPTIONS_MODAL/ON'})
            dispatch({type: 'OPTION/SET_ACTIVE', payload:{id: item.id} })
        }
        return(<article key={item.id} className={`${styles.optionCard} ${item.disabled()? styles.optionCard_disabled : null }` }>
            <div className={styles.optionCard__Titlepart}>
                <h3>{item.title}</h3>
                <p className={styles.optionCard__pledge}>{item.pledge}</p>
            </div>
            <p>{item.desc}</p>
            <div className={styles.optionCard__Select}>
                <div className={styles.optionCard__Itemsleft}>
                    <h4>{item.left}</h4>
                    <p>left</p>
                </div>
                <Button disabled={item.disabled()} onClick={handleClick}>{item.disabled()? 'Out of stock' : 'Select Reward'}</Button>
            </div>
        </article>)
    })
    return ( <React.Fragment>{optionsMap}</React.Fragment>)
}
