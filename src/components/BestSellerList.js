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
                    {productData.getProductsBestSeller().map((item, index) => (
                        <SplideSlide key={index}>
                            <BestSellerCard
                                slug={item.slug}
                                name={item.title}
                                img01={item.image01}
                                img02={item.image02}
                                img03={item.image03}
                                img04={item.image04}
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