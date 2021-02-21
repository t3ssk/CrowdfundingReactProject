import React, {useState} from 'react';
import {Desktop, Mobile} from '../../../Utility/MediaQueries';
import { Logo } from '../Logo/Logo';
import burger from '../../../images/icon-hamburger.svg';
import close from '../../../images/icon-close-menu.svg';
import { NavItems } from '../NavItems/NavItems';
import styles from './Navbar.module.css';
import { MobileNav } from '../MobileNav/MobileNav';



export const Navbar:React.FC = ( ) => {

    const [menuClicked, setMenuClicked] = useState<Boolean>(false);


    return (
        <React.Fragment>
        <div className={styles.Navbar}>
            <Logo/> 
            <Desktop>
               <NavItems/>
            </Desktop>
            <Mobile>
                <img src={menuClicked ?  close : burger} 
                alt='Mobile menu icon' 
                className={styles.Burger} 
                onClick={()=>setMenuClicked(!menuClicked)}/>
            </Mobile>
        </div>
        <Mobile>
                {menuClicked && <MobileNav/>}
        </Mobile>
        </React.Fragment>
        )
}