import { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'
import Categories from './components/Categories'
import Questions from './components/Questions';




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

        <div>
          {selectedCategory ? (
            <Questions 
            category={selectedCategory}
            />
            ) : (
              <Categories 
                categories={categories}
                setSelectedCategory={setSelectedCategory}  
              />
          )}
        </div>

        <div className='bottom-row'>
          <div className='user-info'>
            <h3>User-info</h3>
          </div>
          <div className='answer-sheet'>
            <h3>Answer Choices</h3>
            {/* <Questions /> */}
          </div>
        </div>
      </div>


    </div>
  )
}

export default App;
