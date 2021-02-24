import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import styles from './NavItems.module.css';

export const NavItems: React.FC = () => {
    const isLoggedIn = true;
    const navConfig = [
        {id: 'nav0', title: 'Login/Sign in', href: '/login'},
        {id: 'nav0b', title: 'Logout', href: '/logout'},
        {id: 'nav0c', title: 'Your purchases', href: '/purchases'},
        {id: 'nav1', title: 'About', href: '#'},
        {id: 'nav2', title: 'Discover', href: '#'},
        {id: 'nav3', title: 'Get Started', href: '#'}
    ]

    const isMobile = useMediaQuery({ maxWidth: 786 })

    const liMap = navConfig.map(item=>{
        if(item.href==='#'){
        return <li key={item.id}><a href={item.href} className={styles.disabled}>{item.title}</a></li>}
        if(!isLoggedIn){ 
            if(item.title !== 'Logout' && item.title !== 'Your purchases'){return <li key={item.id}><NavLink to={item.href}>{item.title}</NavLink></li>}
            }
        else if(isLoggedIn){
            if(item.title !== 'Login/Sign in'){
                if(item.title === 'Logout'){return  <li key={item.id} className={styles.Logout}>{item.title}</li>}
                return <li key={item.id}><NavLink to={item.href}>{item.title}</NavLink></li>}
        }
    })
    return(<ul className={isMobile? styles.MobileNavList : styles.Nav}>
        {liMap}
    </ul>)
}


