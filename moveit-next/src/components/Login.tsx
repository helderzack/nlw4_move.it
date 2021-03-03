import styles from '../styles/pages/Login.module.css';
import { signIn } from 'next-auth/client';

export function Login() {
    return(
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <img src="/logo-full.svg" alt="Logo"/>
                <span>Bem-vindo</span>
                <span>Faça login com seu Github para começar</span>
                <button type="button" onClick={() => signIn()}>
                    <span>Github</span>
                    <img src="/icons/github-icon.png" alt="Github icon"/>
                </button>
            </div>
        </div>
    )
}