import React from 'react';
import { useMediaQuery } from 'react-responsive';
import {Desktop, Mobile} from '../../../Utility/MediaQueries';
import styles from './NavItems.module.css';

export const NavItems: React.FC = () => {
    const navConfig = [
        {id: 'nav1', title: 'About', href: '#'},
        {id: 'nav2', title: 'Discover', href: '#'},
        {id: 'nav3', title: 'Get Started', href: '#'}
    ]

    const isMobile = useMediaQuery({ maxWidth: 786 })

    const liMap = navConfig.map(item=>{
        return <li key={item.id}><a href={item.href}>{item.title}</a></li>
    })
    return(<ul className={isMobile? styles.MobileNavList : styles.Nav}>
        {liMap}
    </ul>)
}


