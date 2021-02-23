import React from 'react';
import styles from './Button.module.css';

type buttonProps = {
    disabled?: boolean;
    onClick?: any
}
export const Button: React.FC<buttonProps> = (props) => {
    return <button className={styles.Button} disabled={props.disabled} onClick={props.onClick}>{props.children}</button>
}