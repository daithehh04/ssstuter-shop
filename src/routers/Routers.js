import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import HimProducts from '../pages/HimProducts'
import HerProducts from '../pages/HerProducts'
import ProductDetail from '../pages/ProductDetail'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Success from '../pages/Success'
import NotFound from '../components/NotFound'

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/FOR-HIM' element={<HimProducts />} />
            <Route path='/FOR-HER' element={<HerProducts />} />
            <Route path='/catalog/:slug' element={<ProductDetail />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/success' element={<Success />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default Routers