import React, { useEffect } from 'react'
import Helmet from '../UI/Helmet'
import Grid from '../UI/Grid'
import HeroSlide from '../components/HeroSlide'
import Classify from '../components/Classify'
import heroSlideData from '../assets/data/hero-slider'
import OfferTime from '../components/OfferTime'
import policyData from '../assets/data/policy'
import NewArrivals from '../components/NewArrivals'
import BestSellerList from '../components/BestSellerList'
import PolicyCard from '../components/PolicyCard'
import SsstuterBg from '../components/SsstuterBg'


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

            {/* Offer */}
            <OfferTime />

            {/* New Arrivals */}
            <NewArrivals />

            {/* Best Seller Products */}
            <BestSellerList />

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

            {/* Store */}
            <SsstuterBg />
        </Helmet>
    )
}

export default Home