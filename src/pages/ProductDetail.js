import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import productData from '../assets/data/products'
import ProductView from '../components/ProductView'
import ProductCard from '../components/ProductCard'
import Helmet from '../UI/Helmet'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import Grid from '../UI/Grid'

const ProductDetail = () => {
    const { slug } = useParams()
    const product = productData.getProductBySlug(slug);

    let productList = [];

    if (product.gender === 'nu') {
        productList = productData.getProductByGender('nu');
    } else {
        productList = productData.getProductByGender('nam');
    }

    const getProducts = (count) => {
        const max = productList.length - count;
        const min = 0;
        const start = Math.floor(Math.random() * (max - min) + min);
        return productList.slice(start, start + count);
    };

    const relatedProducts = getProducts(4);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [product]);

    return (
        <Helmet title={product.title}>
            {/* View product */}
            <ProductView product={product} />
            <div className='product-detail_list'>
                <h3 className='product-detail_list_title'>SẢN PHẨM TƯƠNG TỰ</h3>
                <Grid col={4} mdCol={2} smCol={1} gap={20}>
                    {relatedProducts.map((item, index) => (
                        <ProductCard
                            key={index}
                            img01={item.image01}
                            name={item.title}
                            price={Number(item.price)}
                            price_old={Number(item.price_old)}
                            slug={item.slug}
                        />
                    ))}
                </Grid>
            </div>
            <div className='product-detail_list'>
                <h3 className='product-detail_list_title'>SẢN PHẨM ĐƯỢC YÊU THÍCH</h3>
                <div>
                    <Splide
                        options={{
                            type: 'loop',
                            perPage: 4,
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
                        {productData.getProducts(10).map((item, index) => (
                            <SplideSlide key={index}>
                                <ProductCard
                                    img01={item.image01}
                                    name={item.title}
                                    price={Number(item.price)}
                                    price_old={Number(item.price_old)}
                                    slug={item.slug}
                                />
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>
        </Helmet>
    )
}

export default ProductDetail