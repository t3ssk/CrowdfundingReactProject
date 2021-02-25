import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/database';
import styles from './Bookmark.module.css';
import inactiveBookmark from '../../../images/icon-bookmark.svg';
import activeBookmark from '../../../images/icon-bookmarkactive.svg';
import { Desktop, Mobile } from '../../../Utility/MediaQueries';

export const Bookmark: React.FC = () => {
    const userData = useSelector((state:any) => state.userData)
    const dispatch = useDispatch()
    const bookmarked = userData.bookmarked

    const handleBookmark = () => {
        if(userData.userId){
            dispatch({type: 'USER/UPDATE_BOOKMARK'})
            firebase.database().ref(`/users/${userData.userId}/bookmarked`).set(!bookmarked)
            
        }
        else {alert('You have to be logged in!')}
    }

    return(
        <React.Fragment>
    <Desktop>
    <div className={styles.Bookamark__Container} onClick={handleBookmark}>
        <div className={styles.Bookmark__Icon}>
            <img src={bookmarked? activeBookmark : inactiveBookmark} alt="bookmark icon"/>
        </div>
        <div>
            <p className={bookmarked? `${styles.Bookmark__Text} ${styles.active}`: styles.Bookmark__Text}>{bookmarked? 'Bookmarked' : 'Bookmark'}</p>
        </div>
    </div>
    </Desktop>
    <Mobile>
    <div className={styles.Bookmark__Icon} onClick={handleBookmark}>
            <img src={bookmarked? activeBookmark : inactiveBookmark} alt="bookmark icon"/>
    </div>
    </Mobile>
    </React.Fragment>)
}