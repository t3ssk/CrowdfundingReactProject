import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import styles from './Modal.module.css';

interface Modalprops {
    large: boolean;
}
export const Modal:React.FC<Modalprops> = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        scrollToTop()
    }, [])
    const handleClick = () => {
        dispatch({type: 'OPTIONS_MODAL/OFF'})
        dispatch({type: 'SUPPORT_MODAL/OFF'})
    }
    const scrollToTop =  () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; 
    }
    return(
        <section>
            <div className={`${styles.Modal} ${props.large && styles.Large}`}>
                {props.children}
            </div>
            <div className={styles.Modal_backsplash} onClick={handleClick}></div>
        </section>
    )
}
