import React from 'react'

export default function Categories({ categories, setSelectedCategory }) {
    // const [selectedCategory, setSelectedCategory] = useState(null)
    return (
        <div className='categories-container'>
            <h3 className='categories-header'>Categories</h3>
            <div className='scroll-box'>
                <ul className='list-group list-group-flush'>
                    {categories.map((category, idx) => (
                        <li key={idx} className="list-group-item">
                            <button 
                            className='btn btn-info'
                            onClick={() => setSelectedCategory(category)}>
                                {category.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            {/* <h3 className='categories-header'>Categories</h3> */}
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
        </div>
    )
}