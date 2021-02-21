import React from 'react';
import styles from './Button.module.css';

export const Button: React.FC = (props) => {
    return <button className={styles.Button}>{props.children}</button>
}