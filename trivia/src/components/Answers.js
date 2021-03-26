import React from 'react'
import { useState, useEffect } from 'react'


export default function Answers ({ incorrect_answers, correct_answer }) {
    // const [answer, setAnswer] = useState([])


    return (
        <div>
            <ul>
                {/* <li>{correct_answer}</li> */}
                {incorrect_answers.map((incorrectAnswer, idx) => (
                    <li key={idx}>
                        <button>{incorrectAnswer}</button>
                    </li>
                ))}
                <li>{correct_answer}</li>
            </ul>
        </div>
    )
}