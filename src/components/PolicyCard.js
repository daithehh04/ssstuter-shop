import React from 'react'
import { motion } from 'framer-motion'

const PolicyCard = (props) => {
    return (
        <motion.div whileHover={{ scale: 0.9 }} className='policy-card'>
            <div className='policy-card__icon'>
                <i class={props.icon}></i>
            </div>
            <div className='policy-card__info'>
                <div className='card-info__name'>{props.name}</div>
                <div className='card-info__desc'>{props.desc}</div>
            </div>
        </motion.div>
    )
}

export default PolicyCard