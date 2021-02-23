import React from 'react';
import styles from './Card.module.css';

export const Card: React.FC = (props) => {
    return <section className={styles.Card}>{props.children}</section>
}
