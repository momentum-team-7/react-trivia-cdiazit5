import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Questions({ category }) {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        axios
            .get(`https://opentdb.com/api.php?amount=10&category=${category.id}`)
            .then((response) => {
                console.log(response)
                const data = response.data.results.map((dataByCategory) => ({
                    category: dataByCategory.category,
                    type: dataByCategory.type,
                    difficulty: dataByCategory.difficulty,
                    incorrect_answers: dataByCategory.incorrect_answers,
                    question: dataByCategory.question,
                    id: dataByCategory.id
                }))
            setQuestions(data)
            })
    }, [category])

    console.log('QUESTION RENDER:', questions)

    return (
        <ul>
            {questions.map((dataByCategory) => (
                <li key={dataByCategory.id}> 
                    {dataByCategory.question}
                </li>
            ))}
        </ul>

    )

}