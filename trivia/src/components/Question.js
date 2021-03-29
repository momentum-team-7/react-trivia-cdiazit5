import { useState } from 'react'
import Answer from './Answer'

export default function Question ({ question, correct_answer, incorrect_answers }) {
    // const [question, setQuestion] = useState()
    const [showLess, showMore] = useState(false)
    const onClick = () => showMore(!showLess)
    const [rightAnswer, setRightAnswer] = useState(false)


    
    return (
        <div className={rightAnswer? 'correct' : ''}>
            <div>
                {question} 
            </div>
            <button onClick={onClick}>{showLess ? "Close" : "Answer Question"}</button>
            <div style={showLess? {} : {display:'none'} }>
                <Answer
                setRightAnswer={setRightAnswer}
                incorrect_answers={[incorrect_answers]}
                correct_answer={correct_answer}
                />
            </div>
        </div>
    )
    
    
    
    // if (selectedQuestion != null) {
    //     return (
    //     <div>
    //         {/* <div className='questiontext-div'> */}
    //             <p className='text'>{selectedQuestion.name}</p>
    //         {/* </div> */}
    //     </div>
    // )}
    
}