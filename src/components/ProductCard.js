import React, { lazy, memo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import numWithCommas from '../utils/numWithCommas'

const ProductCard = (props) => {
    return (
        <div className='product-card'>
            <Link to={`/catalog/${props.slug}`}>
                <div className="product-card__image">
                    <motion.img whileHover={{ scale: 0.9 }} src={props.img01} loading={lazy} alt="" />
                </div>
                <div className='product-card__info'>
                    <div className='product-card__info__top'>
                        <h3 className="product-card__name">{props.name}</h3>
                        <span className='product-card__price__old'>{numWithCommas(props.price_old)}</span>
                    </div>
                    <div className='product-card__info__bottom'>
                        <p className='product-card__number__color'>{props.numColor} Colors</p>
                        <span className='product-card__price__new'>{numWithCommas(props.price)}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default memo(ProductCard)