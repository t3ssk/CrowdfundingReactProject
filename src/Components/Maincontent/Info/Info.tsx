import React from 'react';
import styles from './Info.module.css';

export const Info: React.FC = () => {
    return(
        <React.Fragment>
            <h3 className={styles.About__heading}>About this project</h3>
            <p className = {styles.About__content}>
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
                to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
                your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
            </p>
            <p className = {styles.About__content}>
                Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
                to allow notepads, pens, and USB sticks to be stored under the stand. 
            </p>
        </React.Fragment>
    )
}
