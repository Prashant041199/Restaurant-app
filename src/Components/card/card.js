import React from 'react'
import './card.css'

const card = ({ dish, set, key }) => {
  return (
    <div>
      <div className='card-body'>
        <div className='card-container'>
          <div className='item-id'>
            <div className='circle'>
              <p className='item-no'>FRESH</p>
            </div>
          </div>
          <div className='item-category'>
            <p className='category'>{dish.strCategory}</p>
          </div>
          <div className='dish-heading'>
            <h1>{dish.strMeal}</h1>
          </div>
          <div className='dish-abt'>
            {dish.strArea}
          </div>
          <div className='line-readmore'>
            <hr></hr>
          </div>
          <div className='food-img'>
            <img className='food' src={dish.strMealThumb} />
          </div>
          <div className='order-btn'>
            <button className='btn btn-dark' onClick={() => set(dish)} data-bs-toggle="modal" data-bs-target="#exampleModal">Cook Now</button>
          </div>
        </div>
      </div>

    </div>)
}

export default card