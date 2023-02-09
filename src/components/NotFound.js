import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../UI/Button'

const NotFound = () => {
    return (
        <div className='not-found'>
            <div className='img-bg'></div>
            <div className='not-found_txt'>
                <h1>TRANG NÀY KHÔNG TỒN TẠI!</h1>
                <Link to='/'>
                    <Button className="btn-back_home">Trở về trang chủ</Button>
                </Link>
            </div>
        </div>
    )
}

export default NotFound