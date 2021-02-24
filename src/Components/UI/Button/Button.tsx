import { AnyCnameRecord } from 'dns';
import React from 'react';
import { StringLiteralLike } from 'typescript';
import styles from './Button.module.css';

type buttonProps = {
    disabled?: boolean;
    onClick?: any
    margin?: number
    type?: any
}
export const Button: React.FC<buttonProps> = (props) => {
    return <button  className={styles.Button} type={props.type? props.type : 'button'} disabled={props.disabled} onClick={props.onClick} style={{margin: `${props.margin}px`}}>{props.children}</button>
}