import React from 'react'
import Clock from '../UI/Clock'
import Button from '../UI/Button'
import { Link } from 'react-router-dom'

const OfferTime = () => {
    return (
        <div className='offer-wrapper'>
            <div className='offer-title'>
                <h3>Ưu đãi giới hạn !!!</h3>
                <p>Giảm giá lên tới 20%</p>
            </div>
            <Clock />
            <Link to='FOR-HIM'>
                <Button className='btn-buy'>MUA NGAY</Button>
            </Link>
        </div>
    )
}

export default OfferTime