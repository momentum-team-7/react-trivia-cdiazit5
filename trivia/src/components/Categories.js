import React, { useState } from 'react'

export default function Categories({ categories, setSelectedCategory }) {
    // const [selectedCategory, setSelectedCategory] = useState(null)
    return (
        <div className='categories-container'>
            <h3>Categories</h3>
            {/* <ul>
                <form>
                    <select onChange={(event) => setSelected(event.target.value)}>
                        {categories.map((category) => (
                            <option key={category.name} value={category.name}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                    <br></br>
                    <input
                    type="submit"
                    value="submit"
                    onClick={(event) => {
                        event.preventDefault()
                        setSelectedCategory(selected)
                        }}
                    />
                </form>
            </ul> */}

            <ul>
            {categories.map((category, idx) => (
                <li key={idx}>
                    <button 
                    className='.btn-primary'
                    onClick={() => setSelectedCategory(category)}>
                        {category.name}
                    </button>
                </li>
                ))}
            </ul>
        </div>
    )
}