import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styles from './OptionsList.module.css';
import {optionsConfig, option} from '../../../Utility/OptionsConfig';
import { Button } from '../../UI/Button/Button';



export const OptionsList:React.FC = () => {
    const [price, setPrice] = React.useState<number>(0)
    const opts = useSelector((state: {options: option[]}) => state.options)
    const dispatch = useDispatch()
    const handleChange = (event: any):void => {
            const target = event.target as HTMLInputElement
            setPrice(Number(target.value))
        }
    const optionsMap = opts.map((item:option)=>{
       
        const handleClick = () => {
            if(price !== 0){
            dispatch({type: 'BACKERS/ADD', payload: price})
            dispatch({type: 'OPTIONS/CHANGE_AMOUNT', payload: {id: item.id, }})
            dispatch({type: 'OPTIONS_MODAL/OFF'})
            dispatch({type: 'SUPPORT_MODAL/ON'})}
            else {
                alert('You have to select amount of money you want to back us with!')
            }
        }

        return(
        <div key={item.id} className = {`${styles.Option} ${item.active && styles.active} ${item.left<= 0 ? styles.disabled : null}`}>
           <div onClick={()=>{item.left > 0 && dispatch({type: 'OPTION/SET_ACTIVE', payload:{id: item.id} })}} className={styles.PickOption}>
            <div className={styles.Option__Heading}>
                <div className={styles.Radio__btn}>
                    {item.active && <div className={styles.Radio__btn__active}/>}
                </div>
                <div className={styles.Option__Heading_text}>
                <h4>{item.title}</h4>
                <p>{item.pledge}</p>
                </div>
            </div>
            {item.left <999 && <div className={styles.Option__left}>
                    <h5>{item.left}</h5>
                    <p>left</p>
                </div>}
            <p className={styles.Option__Desc}>{item.desc}</p>
            </div>
            {item.active && <div className={styles.Option__enterPledge}>
                <p className={styles.Pledge__text}>Enter your pledge</p>
                <div className={styles.Pledge__enter}>
                <span className={styles.Currency}><i>$</i><input type='number' min={item.minPrice} value={price===0? '' : price.toString()} onChange={handleChange}/></span>
                <Button onClick={handleClick}>Continue</Button></div>
                </div>}
        </div>
        )
    })
    return(<React.Fragment>
        {optionsMap}
    </React.Fragment>)
}
