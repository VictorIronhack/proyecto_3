import React, {useState} from "react";
import {FaStar} from 'react-icons/fa'
import './StarRate.css'

const StarRate = () => {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)

    return (
        <div className='starblock'>
        {[...Array(5)].map((star, i) => {
            const ratingValue = i +1

            return ( 
                <label>
                    <input type="radio" name="rating"  value={ratingValue} onClick={() => setRating(ratingValue)} />
                    <FaStar className ='star' color={ratingValue <= (hover || rating) ? '#2DC5FA' : '#2DC5FA40'}  size = {40} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)}/>
                </label>
                );
            })}
        </div>
    )
}

export default StarRate