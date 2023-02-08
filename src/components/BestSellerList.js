import React from 'react'
import productData from '../assets/data/products'
import BestSellerCard from './BestSellerCard'
import { Splide, SplideSlide } from '@splidejs/react-splide'

const BestSellerList = () => {
    return (
        <div className='best-seller__list'>
            <h2 className='best-seller__title'>BEST SELLER</h2>
            <section>
                <Splide
                    options={{
                        type: 'loop',
                        perPage: 1,
                        pagination: false,
                        rewind: true,
                        autoplay: true,
                        speed: 2000,
                        arrows: true,
                    }}
                >

                    {productData.getAllProducts().map((item, index) => (
                        <SplideSlide key={index}>
                            <BestSellerCard
                                slug={item.slug}
                                name={item.title}
                                img1={item.image01}
                                img2={item.image02}
                                price={item.price}
                                price_old={item.price_old}
                            />
                        </SplideSlide>
                    ))}
                </Splide>
            </section>
        </div >
    )
}

export default BestSellerList