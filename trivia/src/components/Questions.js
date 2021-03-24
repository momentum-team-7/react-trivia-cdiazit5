import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Questions({ category, handleGoBack }) {
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
        <div className='categories-container'>
            <h3 className='questions-header'>{category.name} Questions</h3>
            <button
            id='back-button'
            type="button" 
            className="btn btn-info"
            onClick={handleGoBack}>
                Back to Categories
            </button>
            <ul> 
                {questions.map((dataByCategory) => (
                    <li key={dataByCategory.id}> 
                        {dataByCategory.question}
                    </li>
                ))}
            </ul>
        </div>

    )

}