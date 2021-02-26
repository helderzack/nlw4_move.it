import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Modal.module.css';

export function Modal() {
    const { level, modalState, closeModal } = useContext(ChallengesContext);

    return(
        <div>
            {modalState && (
            <div className={styles.modalContainer}>
                <div className={styles.modalContent}>
                    <img src="icons/close.svg" alt="Close Button" onClick={closeModal}/>
                    <span>{level}</span>
                    <strong>Parabéns</strong>
                    <p>Você alcançou um novo level.</p>
                    <button type="button" className={styles.twitterButton}>
                        <span>Compartilhar no twitter</span>
                        <img src="icons/twitter.svg" alt="Twitter Icon"/>
                    </button>
                </div>
            </div>)}
        </div>
    );
}