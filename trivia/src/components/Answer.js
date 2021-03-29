import React, { useState } from 'react'

// import lodash from 'lodash'


export default function Answer ({ incorrect_answers, correct_answer, setRightAnswer }) {
    const answers = [correct_answer]
    const correctAnswer = {correct_answer}
    // const [rightAnswer, setRightAnswer] = useState(false)
    // const handleCorrect = () => {
    //     if (EventTarget = correct_answer)

    // }


    const wrongAnswers = [...incorrect_answers]
    const allAnswers = answers.concat(wrongAnswers)
    answers.push(incorrect_answers)
    // const _ = require('lodash')
    // const shuffledAnswers = _.shuffle(answers[1])
    // const correctAnswer = correct_answer
    console.log('incorrect', (incorrect_answers))
    // console.log(correct_answer)
    console.log(allAnswers)
    // console.log('shuffled', [shuffledAnswers])


    return (
        <div>
            <ul>
                {allAnswers[1].map((answer, index) => (
                    <li>
                        <button onClick={() => answer === correct_answer ? setRightAnswer(true) : setRightAnswer(false)} key={index}>{answer}</button>
                    </li>
                ))}
                <li> <button onClick={() => allAnswers[0] === correct_answer ? setRightAnswer(true) : setRightAnswer(false)}>{allAnswers[0]}</button></li>
            </ul>
        </div>
    )
}