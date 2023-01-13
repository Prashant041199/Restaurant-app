import React from 'react'
import './header.css'

const header = ({ type_lunch, type_dinner, type_breakfast, type_all }) => {
  return (
    <div className='container'>
      <div className='header-container'>
        <nav aria-label="...">
          <ul className="pagination pagination-lg ">
            <li className="page-item"><button className="page-link" onClick={type_all()} >All</button></li>
            <li className="page-item"><button className="page-link" onClick={type_breakfast()} >Breakfast</button></li>
            <li className="page-item"><button className="page-link" onClick={type_lunch()}>Lunch</button></li>
            <li className="page-item"><button className="page-link" onClick={type_dinner()}>Dinner</button></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default header