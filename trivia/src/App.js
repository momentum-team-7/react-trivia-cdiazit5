import { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'
import Categories from './components/Categories'
import CategoryQuestions from './components/CategoryQuestions';
import Question from './components/Question'
// import selectedQuestion from CategoryQuestions
// import Answers from './components/Answers';




function App() {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)

  console.log(selectedCategory)

  useEffect(() => {
    axios
        .get('https://opentdb.com/api_category.php')
        .then((response) => {
            console.log(response)
            setCategories(response.data.trivia_categories)
    })
  }, [])

  console.log('RENDERING:', categories)

  return ( 
    <div className="App">
      <header className="App-header">Trivia Night</header>
      <div className='trivia-container'>
          {selectedCategory ? (
            <CategoryQuestions 
            category={selectedCategory}
            handleGoBack={() => setSelectedCategory(null)}
            />
            ) : (
              <Categories 
                categories={categories}
                setSelectedCategory={setSelectedCategory}  
              />
          )}

          {/* <div className='answer-container'>
            <h3 className='categories-header'>Answer Choices</h3>
            <div className='question-contrainer'>
            </div> */}
      <div style={selectedCategory? {display:'none'} : {}} className='placeholder-container'>
        <div className='questiontext-div'>
          <h3 className="select-text">Select A Category!</h3>
        </div>
      </div>

        {/* <div className='bottom-row'>
          <div className='user-info'>
            <h3>User-info</h3>
          </div>
          <div className='answer-sheet'>
            <h3>Answer Choices</h3>
            {/* <Questions /> */}
          {/* </div>
        </div> */}
      </div>

    </div>
  )
}

export default App;
