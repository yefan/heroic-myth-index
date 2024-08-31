"use client";

import { Button } from '@mui/material';
import styles from './questionnaire.module.css'

const IntroPage = (show: boolean, updatePart: (newPart: number) => void) =>{
    if (!show){
        return null
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <div className={styles.text} style={{ maxWidth: '70%', textAlign: 'center' }}>
                Real heroism is not showing that you can handle anything and everything that comes your way. Rather, it is doing your own part, however humble that might be. -- Carol S. Pearson
            </div>
            <div className={styles.text} style={{ maxWidth: '70%', textAlign: 'center', marginTop: '20px' }}>
                This heroic myth index is a convenient tool from Dr. Pearson's book <i><a href="https://www.amazon.com/Awakening-Heroes-Within-Archetypes-Ourselves/dp/0062506781/" target="_blank" rel="noopener noreferrer">Awakening the hero within</a></i>. It reveals the current active archetype, and where one is at on their heroic journey.
            </div>
            <div style={{ marginTop: '20px' }}>
                <Button name="next" variant="contained" onClick={() => updatePart(1)}>Take the questionnaire</Button>
            </div>
        </div>
    )
}

export default IntroPage;