import React from 'react';
import styles from './Button.module.css';

type buttonProps = {
    disabled?: boolean;
    onClick?: any
    margin?: number
}
export const Button: React.FC<buttonProps> = (props) => {
    return <button className={styles.Button} disabled={props.disabled} onClick={props.onClick} style={{margin: `${props.margin}px`}}>{props.children}</button>
}