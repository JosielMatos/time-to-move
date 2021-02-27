import { useContext } from 'react';
import { ChallegesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallegesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/JosielMatos.png" alt="Josiel"/>
            <div>
                <strong>Josiel Matos</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}