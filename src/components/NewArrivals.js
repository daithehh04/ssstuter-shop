import React from 'react'
import ProductCard from './ProductCard'
import productsData from '../assets/data/products'
import { Splide, SplideSlide } from '@splidejs/react-splide'

const NewArrivals = () => {
    return (
        <div className='new-arrival'>
            <h2 className='new-arrival__title'>WHAT'S NEW</h2>
            <div className='product-slider'>
                <Splide
                    options={{
                        type: 'loop',
                        perPage: 4,
                        pagination: false,
                        rewind: true,
                        autoplay: true,
                        speed: 1000,
                        arrows: false,
                        breakpoints: {
                            640: {
                                perPage: 1,
                            },
                            940: {
                                perPage: 2,
                            },
                            1200: {
                                perPage: 4,
                            },
                        },
                    }}
                >
                    {productsData.getAllProducts().map((item, index) => (
                        <SplideSlide key={index}>
                            <ProductCard
                                numColor={item.colors.length}
                                img01={item.image01}
                                name={item.title}
                                price_old={item.price_old}
                                price={Number(item.price)}
                                slug={item.slug}
                            />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>

    )
}

export default NewArrivals