import { useState } from 'react'
import Answers from './Answers'

export default function Question ({ selectedQuestion }) {
    const [question, setQuestion] = useState()


    if (selectedQuestion != null) {
        return (
        <div>
            <p>{selectedQuestion}</p>
        </div>
    )}

    return (
        <div>
            <p>No Question Selected</p>
        </div>
    )




}