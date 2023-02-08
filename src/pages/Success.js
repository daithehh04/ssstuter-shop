import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../UI/Button'
import Helmet from '../UI/Helmet'

const Success = () => {
    return (
        <Helmet title="Success">
            <div className="page-success">
                <h2>Bạn đã đặt hàng thành công!</h2>
                <div className="page-success_txt">
                    <span>Chúng tôi sẽ liên lạc với bạn qua số điện thoại để xác nhận lại đơn hàng. </span>
                    <span>Xin chân thành cảm ơn quý khách!</span>
                </div>
                <Link to="/FOR-HIM">
                    <Button className='btn-success'>Tiếp tục mua hàng</Button>
                </Link>
            </div>
        </Helmet>
    )
}

export default Success