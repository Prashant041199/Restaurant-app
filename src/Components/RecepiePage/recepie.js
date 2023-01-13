import './recepie.css'


import React from 'react'

const recepie = ({ dish }) => {
    return (
        <>
            <div className="modal  fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='heading-holder'>
                                <img src={dish.strMealThumb} alt='abc'></img>
                                <h1>{dish.strMeal}</h1>
                            </div>
                            <div className='ing-holder'>
                                <iframe className='youtube' src={dish.strYoutube}></iframe>
                                <h2>Ingredients</h2>
                                <br></br>
                                <div className='ing'>
                                    <p>{dish.strMeasure1} {dish.strIngredient1}</p>
                                    <p>{dish.strMeasure2} {dish.strIngredient2}</p>
                                    <p>{dish.strMeasure3} {dish.strIngredient3}</p>
                                    <p>{dish.strMeasure4} {dish.strIngredient4}</p>
                                    <p>{dish.strMeasure5} {dish.strIngredient5}</p>
                                    <p>{dish.strMeasure6} {dish.strIngredient6}</p>
                                    <p>{dish.strMeasure7} {dish.strIngredient7}</p>
                                    <p>{dish.strMeasure8} {dish.strIngredient8}</p>
                                    <p>{dish.strMeasure9} {dish.strIngredient9}</p>
                                    <p>{dish.strMeasure10} {dish.strIngredient10}</p>
                                    <p>{dish.strMeasure11} {dish.strIngredient11}</p>
                                    <p>{dish.strMeasure12} {dish.strIngredient12}</p>
                                    <p>{dish.strMeasure13} {dish.strIngredient13}</p>
                                    <p>{dish.strMeasure14} {dish.strIngredient14}</p>
                                    <p>{dish.strMeasure15} {dish.strIngredient15}</p>
                                    <p>{dish.strMeasure16} {dish.strIngredient16}</p>
                                    <p>{dish.strMeasure17} {dish.strIngredient17}</p>
                                    <p>{dish.strMeasure18} {dish.strIngredient18}</p>
                                    <p>{dish.strMeasure19} {dish.strIngredient19}</p>
                                    <p>{dish.strMeasure20} {dish.strIngredient20}</p>
                                </div>
                                <h2>Instructions</h2>
                                <div className='ing'>
                                    <p>{dish.strInstructions}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default recepie