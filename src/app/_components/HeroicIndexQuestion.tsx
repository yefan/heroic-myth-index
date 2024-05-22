"use client";
import React, {useState} from 'react';
import QuestionScore from './question-score';
import { Button } from '@mui/material';

type Props = {
    questions: Array<string>;
}

const QuestionIndexOffset = 0

const HeroicIndexQuestion = ({questions}: Props) => {

    const [questionScores, setQuestionScores] = useState(Array<number>(questions.length).fill(3))
    const [currentPage, setCurrentPage] = useState(QuestionIndexOffset)
    
    function handleScoreUpdate(index: number){
        return (score: number) => {
            var newScores = questionScores.slice();
            newScores[index] = score;
            setQuestionScores(newScores)
        };
    }
    
    const QuestionScoreList = () => {
        const currentQuestion = currentPage - QuestionIndexOffset;
        return (
            <>
            <QuestionScore name={questions[currentQuestion]} score={questionScores[currentQuestion]} onScoreChange={handleScoreUpdate(currentQuestion)} />
            {currentPage >= 1 && <Button name="prev" variant="contained" onClick={() => setCurrentPage(currentPage - 1)}>Previous</Button>}
            <Button name="next" variant="contained" onClick={() => setCurrentPage(currentPage + 1)}>Next</Button>
            </>
            );
    };

    const ArchetypeNames = ["Innocent", "Orphan", "Warrior", "Caregiver", "Seeker", "Lover", "Destroyer", "Creator", "Magician", "Ruler", "Sage", "Fool"]
    const ArchetypeIndices = [
        [5, 13, 34, 49, 63, 65],
        [14, 22, 27, 30, 50, 71], 
        [6, 39, 40, 44, 57, 59], 
        [7, 10, 15, 24, 55, 68],
        [33, 47, 51, 62, 70, 72],
        [12, 16, 17, 25, 29, 45],
        [2, 4, 21, 52, 61, 66],
        [8, 19, 31, 60, 64, 69], 
        [3, 23, 37, 42, 48, 58],
        [26, 32, 35, 38, 46, 67],
        [1, 18, 20, 36, 41, 56],
        [9, 11, 28, 43, 53, 54]
    ]

    const ArchetypeScoring = ArchetypeNames.map((name, index) => {
        const archetypeIndex = ArchetypeIndices[index]
        var totalScore = 0
        console.log(questionScores)
        for (const index of archetypeIndex){
            totalScore += questionScores[index-1]
        } 
        console.log(totalScore)
        return (<div key={name}>
                {name}: {totalScore}
                </div>)
    });
    
    return (
        <div>
            {currentPage<QuestionIndexOffset + questions.length && QuestionScoreList()}
            {currentPage == QuestionIndexOffset + questions.length && ArchetypeScoring}
        </div>
    )

};

export default HeroicIndexQuestion;