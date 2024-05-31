import HeroicIndexQuestion from './_components/HeroicIndexQuestion';
import styles from './app.module.css'

export default function Home() {
    return (
        <main className='body'>
            <div className={styles.title}>Heroic Path</div>
                <HeroicIndexQuestion />
        </main>
    );
}