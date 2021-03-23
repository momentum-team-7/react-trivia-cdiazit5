export default function Categories( {categories}) {
    return (
    <div className='categories-container'>
    <h1>Questions</h1>
        <ul> <h3>Categories</h3>
        {categories.map((categories) => (
            <li>{categories.name}</li>
        ))}
        </ul>
    </div>

    )
}