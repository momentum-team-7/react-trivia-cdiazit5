import { useState } from 'react'
import Answers from './Answers'

export default function Question ({ selectedQuestion, correct_answer, incorrect_answers }) {
    const [question, setQuestion] = useState()


    if (selectedQuestion != null) {
        return (
        <div>
            <div className='questiontext-div'>
                <p className='text'>{selectedQuestion}</p>
            </div>
            {/* <div>
                <Answers



                />
            </div> */}
        </div>
    )}

    return (
        <div className='questiontext-div'>
            <h3 className="select-text">Select a Question!</h3>
        </div>
    )




}