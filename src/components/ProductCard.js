import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import numWithCommas from '../utils/numWithCommas'

const ProductCard = (props) => {
    return (
        <motion.div whileHover={{ scale: 1.1 }} className='product-card'>
            <Link to={`/catalog/${props.slug}`}>
                <div className="product-card__image">
                    <img src={props.img01} alt="" />
                    {props.sale ? (<div className='product-card__sale'>
                        {props.sale}
                        <div className='product-card__sp'></div>
                        <div className='product-card__sp'></div>
                    </div>) : ''}
                </div>
                <div className='product-card__info'>
                    <div className='product-card__info__top'>
                        <h3 className="product-card__name">{props.name}</h3>
                        {props.price_old ? (
                            <span className='product-card__price__old'>{numWithCommas(props.price_old)}</span>
                        ) : ''}

                    </div>
                    <div className='product-card__info__bottom'>
                        <p className='product-card__number__color'>{props.numColor} Colors</p>
                        <span className='product-card__price__new'>{numWithCommas(props.price)}</span>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}

export default memo(ProductCard)