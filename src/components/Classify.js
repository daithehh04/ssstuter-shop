import React from 'react'
import ForHim from '../assets/Image/images/forhim.jpeg'
import ForHer from '../assets/Image/images/forher.jpeg'
import { Link } from 'react-router-dom'

const Classify = () => {
    return (
        <div className='category'>
            <Link to="/FOR-HIM">
                <div className="category-banner">
                    <img src={ForHim} alt="Forhim" />
                </div>
            </Link>
            <Link to="/FOR-HER">
                <div className="category-banner">
                    <img src={ForHer} alt="Forher" />
                </div>
            </Link>
        </div>
    )
}

export default Classify