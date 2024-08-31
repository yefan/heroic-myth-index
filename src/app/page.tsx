"use client";

import { useState } from 'react';
import HeroicIndexQuestion from './_components/HeroicIndexQuestion';
import IntroPage from './_components/intro-page';
import styles from './app.module.css'
import ResultPage from './_components/result';

export default function Home() {
    const [part, setPart] = useState(0)
    const updatePart = (newPart: number) => {
        setPart(newPart);
    };
    const [archetypeScores, setArchetypeScores] = useState(Array<number>(12).fill(0));
    const updateArchetypeScores = (newScores: number[]) => {
        setArchetypeScores(newScores);
    };
    return (
        <main className='body'>
            <div className={styles.title}>Heroic Journey</div>
            <div>
                {IntroPage(part == 0, updatePart)}
                {HeroicIndexQuestion(part == 1, updatePart, updateArchetypeScores)}
                {ResultPage(part == 2, archetypeScores)}
            </div>
        </main>
    );
}