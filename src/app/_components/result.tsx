import React from 'react';
import styles from './questionnaire.module.css';

const ResultPage = (show: boolean, archetypeScores: number[]) => {
    if (!show){
        return null
    }
    const ArchetypeNames = ["Innocent", "Orphan", "Warrior", "Caregiver", "Seeker", "Lover", "Destroyer", "Creator", "Magician", "Ruler", "Sage", "Fool"]

    return (
        <div className={styles.text} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', padding: '20px' }}>
            {archetypeScores.map((score, index) => (
                <div key={index} style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '10px', textAlign: 'center' }}>
                    <h3>{ArchetypeNames[index]}</h3>
                    <p>Score: {score}</p>
                </div>
            ))}
        </div>

    );
};

export default ResultPage;
