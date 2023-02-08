import { Splide, SplideSlide } from '@splidejs/react-splide'
import React from 'react'
const Promotion = () => {
    return (
        <>
            <Splide
                options={{
                    type: 'loop',
                    perPage: 1,
                    rewind: true,
                    autoplay: true,
                    speed: 1000,
                    arrows: false,
                    pagination: false
                }}
            >
                <SplideSlide>
                    <div className='promotion-popup__item'>Đồng giá ship chỉ 20.000 cho đơn toàn quốc</div>
                </SplideSlide>
                <SplideSlide>
                    <div className='promotion-popup__item'>Ưu đãi giảm 10.000 khi thanh toán trả trước</div>
                </SplideSlide>
                <SplideSlide>
                    <div className='promotion-popup__item'>Đồng giá ship chỉ 10.000 cho đơn nội thành</div>
                </SplideSlide>
            </Splide>
        </>
    )
}

export default Promotion