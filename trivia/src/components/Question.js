import { useState } from 'react'
import Answers from './Answers'

export default function Question ({ selectedQuestion }) {
    const [question, setQuestion] = useState()


    if (selectedQuestion != null) {
        return (
        <div className='questiontext-div'>
            <p>{selectedQuestion}</p>
        </div>
    )}

    return (
        <div className='questiontext-div'>
            <h3 className="select-text">Select a Question!</h3>
        </div>
    )




}