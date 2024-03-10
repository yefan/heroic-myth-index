"use client";
import React, {useState} from 'react';
import QuestionScore from './question-score';

type Props = {
    questions: Array<string>;
}

const HeroicIndexQuestion = ({questions}: Props) => {

    const [questionScores, setQuestionScores] = useState(Array<number>(questions.length).fill(3))
    
    function handleScoreUpdate(index: number){
        return (score: number) =>{
            const newScores = questionScores.slice();
            newScores[index] = score;
            setQuestionScores(newScores)
        };
    }
    
    const QuestionScoreList = questions.map((question, index) => {
        return (
            <QuestionScore key={question} name={question} score={questionScores[index]} onScoreChange={handleScoreUpdate(index)} />
            );
    });
    
    return (
        <div>
            {QuestionScoreList}
        </div>
    )

};

export default HeroicIndexQuestion;