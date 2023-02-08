import React, { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import Routers from '../routers/Routers'
import Promotion from '../components/Promotion'

const Layout = () => {
    return (
        <>
            <Header />
            <main className='container'>
                <Promotion />
                <Routers />
            </main>
            <Footer />
        </>
    )
}

export default Layout