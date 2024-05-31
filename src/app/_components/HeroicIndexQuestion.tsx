"use client";
import React, {useState} from 'react';
import QuestionScore from './question-score';
import { Button } from '@mui/material';

const questions = [
    "I collect information without making judgments.",
    "I feel disoriented by so much change in my life.",
    "The process of my own self-healing enables me to help heal others.",
    "I have let others down.",
    "I feel safe.",
    "I put fear aside and do what needs to be done.",
    "I put the needs of others before my own.",
    "I try to be authentic wherever I am.",
    "When life gets dull, I like to shake things up.",
    "I find satisfaction caring for others",
    "Others see me as fun.",
    "I feel sexy.",
    "I believe that people don't really mean to hurt each other.",
    "As a child, I was neglected or victimized.",
    "Giving makes me happier than receiving.",
    "I agree with the statement, 'It is better to have loved and lost than never to have loved at all'.",
    "I embrace life fully.",
    "I keep a sense of perspective by taking a long-range view.",
    "I am in the process of creating my own life.",
    "I believe there are many good ways to look at the same thing.",
    "I am no longer the person I thought I was. ",
    "Life is one heartache after another.",
    "Spiritual help accounts for my effectiveness.",
    "I find it easier to do for others than to do for myself.",
    "I find fulfillment through relationships.",
    "People look to me for direction. ",
    "I fear those in authority.",
    "I don't take rules too seriously.",
    "I like to help people connect with one another.",
    "I feel abandoned.",
    "I have times of high accomplishment that feel effortless to me.",
    "I have leadership qualities.",
    "I am searching for ways to improve myself.",
    "I can count on others to take care of me. ",
    "I prefer to be in charge.",
    "I try to find truths behind illusions.",
    "Changing my inner thoughts changes my outer life.",
    "I develop resources, human or natural.",
    "I am willing to take personal risks in order to defend my beliefs.",
    "I can't sit back and let a wrong go by without challenging it.",
    "I strive for objectivity.",
    "My presence is often a catalyst for change.",
    "I enjoy making people laugh.",
    "I use discipline to achieve goals.",
    "I feel loving toward people in general.",
    " I am good at matching people's abilities with tasks to be done.",
    "It is essential for me to maintain my independence.",
    "I believe everyone and everything in the world are interconnected.",
    "The world is a safe place.",
    "People I've trusted have abandoned me.",
    "I feel restless.",
    "I am letting go of things that do not fit for me anymore.",
    "I like to “lighten up” people who are too serious.",
    "A little chaos is good for the soul.",
    "Sacrificing to help others has made me a better person.",
    "I am calm.",
    "I stand up to offensive people.",
    "I like to transform situations.",
    "The key to success in all aspects of life is discipline.",
    "Inspiration comes easily to me.",
    "I do not live up to my expectations for myself.",
    "I have a sense that a better world awaits me somewhere.",
    "I assume that people I meet are trustworthy.",
    "I am experiencing with turning my dreams into realities.",
    "I know my needs will be provided for.",
    "I feel like breaking something.",
    "I try to manage situations with the good of all in mind.",
    "I have a hard time saying no.",
    "I have a lot more great ideas than I have time to act on them.",
    "I am looking for greener pastures.",
    "Important people in my life have let me down.",
    "The act of looking for something is as important to me as finding it."
]
const QuestionIndexOffset = 0

const HeroicIndexQuestion = () => {

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
        <div className='content'>
            {currentPage<QuestionIndexOffset + questions.length && QuestionScoreList()}
            {currentPage == QuestionIndexOffset + questions.length && ArchetypeScoring}
        </div>
    )

};

export default HeroicIndexQuestion;