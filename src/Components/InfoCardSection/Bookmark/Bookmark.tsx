import React, {useState} from 'react';
import styles from './Bookmark.module.css';
import inactiveBookmark from '../../../images/icon-bookmark.svg';
import activeBookmark from '../../../images/icon-bookmarkactive.svg';
import { Desktop, Mobile } from '../../../Utility/MediaQueries';

export const Bookmark: React.FC = () => {
    const [bookmarked, setBookmarked] = useState(false)

    return(
        <React.Fragment>
    <Desktop>
    <div className={styles.Bookamark__Container} onClick={()=>setBookmarked(!bookmarked)}>
        <div className={styles.Bookmark__Icon}>
            <img src={bookmarked? activeBookmark : inactiveBookmark} alt="bookmark icon"/>
        </div>
        <div>
            <p className={bookmarked? `${styles.Bookmark__Text} ${styles.active}`: styles.Bookmark__Text}>{bookmarked? 'Bookmarked' : 'Bookmark'}</p>
        </div>
    </div>
    </Desktop>
    <Mobile>
    <div className={styles.Bookmark__Icon} onClick={()=>setBookmarked(!bookmarked)}>
            <img src={bookmarked? activeBookmark : inactiveBookmark} alt="bookmark icon"/>
    </div>
    </Mobile>
    </React.Fragment>)
}