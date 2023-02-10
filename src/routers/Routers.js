import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loading from '../UI/Loading'
const Home = React.lazy(() => import('../pages/Home'))
const ProductDetail = React.lazy(() => import('../pages/ProductDetail'))
const HimProducts = React.lazy(() => import('../pages/HimProducts'))
const HerProducts = React.lazy(() => import('../pages/HerProducts'))
const Cart = React.lazy(() => import('../pages/Cart'))
const Checkout = React.lazy(() => import('../pages/Checkout'))
const NotFound = React.lazy(() => import('../pages/NotFound'))
const Success = React.lazy(() => import('../pages/Success'))


const Routers = () => {
    return (
        <Suspense fallback={<Loading />}>
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
        </Suspense>

    )
}

export default Routers