import { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'
import Categories from './components/Categories'




function App() {
  const [categories, setCategories] = useState([])
  // const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    axios
        .get('https://opentdb.com/api_category.php')
        .then((response) => {
            console.log(response)
            setCategories(response.data.trivia_categories)
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">Trivia Night</header>

      <div className='trivia-container'>
        <Categories categories={categories} />
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
