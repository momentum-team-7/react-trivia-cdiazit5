import { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'




function App() {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=10').then((response) => {
      console.log(response)
      setQuestions(response.data.results)
    })
  }, [])

  console.log('RENDERING:', questions)


  return (
    <div className="App">
      <header className="App-header">Trivia Night</header>

      <div className='trivia-container'>
        <div className='question-container'>
        <h1>Questions</h1>
          <ul>
            <h3>Categories</h3>
            {questions.map((question) => (
              <li key={question.question}>{question.category}</li>
            ))}
          </ul>
        </div>
        
        <div className='bottom-row'>
          <div className='user-info'>
            <h3>User-info</h3>
            
          </div>

          <div className='answer-sheet'>
            <h3>Answer Choices</h3>

          </div>
        </div>



      </div>





    </div>
  )
}

export default App;
