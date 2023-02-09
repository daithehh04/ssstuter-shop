import React from 'react'
import { Link } from 'react-router-dom'
import numWithCommas from '../utils/numWithCommas'

const BestSellerCard = (props) => {
    return (
        <div className='best-seller__card'>
            <div className='best-seller__card__slider'>
                <Link to={`/catalog/${props.slug}`}>
                    <div className="best-seller__card__image">
                        <img src={props.img01} alt="" />
                        <img src={props.img02} alt="" />
                        <img src={props.img02} alt="" />
                    </div>
                </Link>
                <div className="best-seller__card__info">
                    <h3 className='card-name'>{props.name}</h3>
                    <div className='card-img'>
                        <img src={props.img02} alt="" />
                    </div>
                    <p className='sub-text'>Chỉ từ</p>
                    <div className='price-old'>{numWithCommas(props.price_old)}</div>
                    <div className='price-new'>{numWithCommas(props.price)}</div>
                </div>
            </div>
        </div>
    )
}

export default BestSellerCard