import React from 'react'
const PolicyCard = (props) => {
    return (
        <div className='policy-card'>
            <div className='policy-card__icon'>
                <i class={props.icon}></i>
            </div>
            <div className='policy-card__info'>
                <div className='card-info__name'>{props.name}</div>
                <div className='card-info__desc'>{props.desc}</div>
            </div>
        </div>
    )
}

export default PolicyCard