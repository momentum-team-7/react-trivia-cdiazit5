import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function CategoryQuestions({ category, handleGoBack }) {
    const [categoryQuestions, setCategoryQuestions] = useState([])
    // set selected question

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
            setCategoryQuestions(data)
            })
    }, [category])

    console.log('QUESTION RENDER:', categoryQuestions)

    return (
        <div className='categories-container'>
            <h3 className='questions-header'>{category.name} Questions</h3>
            <button
            id='back-button'
            type="button" 
            className="btn btn-info"
            onClick={handleGoBack}>
                <b>Back to Categories</b>
            </button>
            <div className='questions-scroll-box'>
                <ul className='list-group list-group-flush'> 
                    {categoryQuestions.map((dataByCategory) => (
                        <li key={dataByCategory.id} className="list-group-item"> 
                            {dataByCategory.question}
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )
}