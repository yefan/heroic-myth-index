"use client";
import React, {useState} from 'react';
import { Slider } from '@mui/material';

type Props = {
    name: string;
    score: number;
    onScoreChange: any
}

const QuestionScore = ({name, score, onScoreChange}: Props) =>{
    const handleChange = (event: any) => {
        onScoreChange(event.target.value);
    };
    return (
        <div>
            <div>
                {name}:
            </div>
            <div>
            <Slider
                aria-label="Scale"
                defaultValue={score}
                valueLabelDisplay="auto"
                shiftStep={1}
                step={1}
                marks
                min={1}
                max={5}
                onChange={handleChange}
                />
            </div>
        </div>
    )
}

export default QuestionScore;