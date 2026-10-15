import React from 'react'
import Card from './Component/Card'
function App() {
  return (
    <div className='parent flex gap-3'>
      <Card user='Mountains' age={18} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwy-8LyWk8bQf-LTXKxzi7nGm7l7qPLfZfc06XL3OTIA&s=10' />
      <Card user='Flower' age={28} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJAzu5aTrvg0yPTkww7slPkkHuIjxHKsxRnF6YOnvsQ&s=10' />
      <Card user='water' age={24} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5MzwpePG1N9kfTexgxJrnNoa2hEBXGBos_bW9Agh32Q&s=10' />
    </div>
  )
}

export default App
