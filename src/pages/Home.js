import React, { useEffect } from 'react'
import HeroSlide from '../components/HeroSlide'
import Helmet from '../UI/Helmet'
import heroSlideData from '../assets/data/hero-slider'
import policyData from '../assets/data/policy'
import Classify from '../components/Classify'
import NewArrivals from '../components/NewArrivals'
import PolicyCard from '../components/PolicyCard'
import SsstuterBg from '../components/SsstuterBg'
import BestSellerList from '../components/BestSellerList'
import Grid from '../UI/Grid'
import OfferTime from '../components/OfferTime'


const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Helmet title='TRANG CHỦ'>
            {/* HeroSlider */}
            <HeroSlide data={heroSlideData} />

            {/* Classify*/}
            <Classify />

            {/* PolicyCard */}
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
                {policyData.map((item, index) => (
                    <PolicyCard
                        key={index}
                        icon={item.icon}
                        name={item.name}
                        desc={item.description}
                    />
                ))}
            </Grid>
            {/* New Arrivals */}
            <NewArrivals />

            {/* Best Seller Products */}
            <BestSellerList />

            {/* Offer */}
            <OfferTime />
            {/* Store */}
            <SsstuterBg />
        </Helmet>
    )
}

export default Home