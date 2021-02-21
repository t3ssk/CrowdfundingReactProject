import React, {useState} from 'react';
import styles from './Bookmark.module.css';
import inactiveBookmark from '../../../images/icon-bookmark.svg';
import activeBookmark from '../../../images/icon-bookmarkactive.svg';

export const Bookmark: React.FC = () => {
    const [bookmarked, setBookmarked] = useState(false)

    return(<div className={styles.Bookamark__Container} onClick={()=>setBookmarked(!bookmarked)}>
        <div className={styles.Bookamrk}>
            <img src={bookmarked? activeBookmark : inactiveBookmark} alt="bookmark icon"/>
        </div>
        <div>
            <p className={bookmarked? `${styles.Bookmark__Text} ${styles.active}`: styles.Bookmark__Text}>{bookmarked? 'Bookmarked' : 'Bookmark'}</p>
        </div>
    </div>)
}