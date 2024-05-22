"use client";
import React, {useState} from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Slider } from '@mui/material';

type Props = {
    name: string;
    score: number;
    onScoreChange: any
}

const QuestionScore = ({name, score, onScoreChange}: Props) =>{
    const handleChange = (event: any) => {
        onScoreChange(parseInt(event.target.value));
    };
    return (
        <div>
            {/* <div>
                {name}:
            </div>
            <div>
            <Slider
                aria-label="Scale"
                value={score}
                valueLabelDisplay="auto"
                shiftStep={1}
                step={1}
                marks
                min={1}
                max={5}
                onChange={handleChange}
                />
            </div> */}
            <FormControl>
            <FormLabel style={{ fontSize: '24px' }}>{name}</FormLabel>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={score}
                onChange={handleChange}
            >
                <FormControlLabel value="1" control={<Radio />} label="Almost never descriptive of me" />
                <FormControlLabel value="2" control={<Radio />} label="Rarely descriptive of me" />
                <FormControlLabel value="3" control={<Radio />} label="Sometimes descriptive of me" />
                <FormControlLabel value="4" control={<Radio />} label="Usually descriptive of me" />
                <FormControlLabel value="5" control={<Radio />} label="Almost always descriptive of me" />
            </RadioGroup>
            </FormControl>
        </div>
    )
}

export default QuestionScore;