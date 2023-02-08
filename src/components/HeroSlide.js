import React from 'react'
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';

const HeroSlide = (props) => {
    const data = props.data;
    return (
        <div className='hero-slide'>
            <div className='hero-slide__item__tablet'>
                <Splide
                    options={{
                        type: 'loop',
                        perPage: 1,
                        rewind: true,
                        autoplay: true,
                        speed: 1000,
                        arrows: false,
                        pagination: true
                    }}
                >
                    {data.getTabletSliderData().map((item, index) => (
                        <SplideSlide key={index}>
                            <Link to={item.path}>
                                <div className="hero-slider_item_image">
                                    <img src={item.img} alt="" />
                                </div>
                            </Link>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
            <div className="hero-slide__item__mobile">
                <Splide
                    options={{
                        type: 'loop',
                        perPage: 1,

                        rewind: true,

                        autoplay: true,
                        speed: 1000,
                        arrows: false,
                    }}
                >
                    {data.getMobileSliderData().map((item, index) => (
                        <SplideSlide key={index}>
                            <Link to={item.path}>
                                <div className="hero-slider_item_image">
                                    <img src={item.img} alt="" />
                                </div>
                            </Link>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    )
}

export default HeroSlide