import React from 'react';
import styles from './Card.module.css';
interface cardprops {
    small?: boolean
}
export const Card: React.FC<cardprops> = (props) => {
    return <section className={`${styles.Card} ${props.small && styles.small}`}>{props.children}</section>
}
