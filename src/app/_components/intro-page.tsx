import React, {useState} from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Slider } from '@mui/material';

import styles from './questionnaire.module.css'

type Props = {
    name: string;
    score: number;
    onScoreChange: any
}

const IntroPage = ({name, score, onScoreChange}: Props) =>{
    const handleChange = (event: any) => {
        onScoreChange(parseInt(event.target.value));
    };
    return (
        <div className={styles.text}>
            Welcome to the heroic path. This is from the book Awakening the hero within by Carol S. Pearson. This webpage is just a convenience tool for the questionnaire.

            If you are interested, please checkout her book!
        </div>
    )
}

export default IntroPage;