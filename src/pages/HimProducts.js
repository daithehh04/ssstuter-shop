import React, { useCallback, useEffect, useRef, useState } from 'react'
import Helmet from '../UI/Helmet'
import ProductCard from '../components/ProductCard'
import productData from '../assets/data/products'
import category from '../assets/data/category'
import size from '../assets/data/product-size'
import color from '../assets/data/product-color'
import CheckBox from '../components/CheckBox'
import Button from '../UI/Button'
import Grid from '../UI/Grid'
const HimProducts = () => {
    const initFilter = {
        category: [],
        color: [],
        size: [],
    };

    console.log('loop')
    const productList = productData.getProductByGender('nam');

    const [products, setProducts] = useState(productList);

    const [filter, setFilter] = useState(initFilter);

    const filterSelect = (type, checked, item) => {
        if (checked) {
            switch (type) {
                case 'CATEGORY':
                    setFilter({ ...filter, category: [...filter.category, item.categorySlug] });
                    break;
                case 'COLOR':
                    setFilter({ ...filter, color: [...filter.color, item.color] });
                    break;
                case 'SIZE':
                    setFilter({ ...filter, size: [...filter.size, item.size] });
                    break;
                default:
            }
        } else {
            switch (type) {
                case 'CATEGORY':
                    const newCategory = filter.category.filter((e) => e !== item.categorySlug);
                    setFilter({ ...filter, category: newCategory });
                    break;
                case 'COLOR':
                    const newColor = filter.color.filter((e) => e !== item.color);
                    setFilter({ ...filter, color: newColor });
                    break;
                case 'SIZE':
                    const newSize = filter.size.filter((e) => e !== item.size);
                    setFilter({ ...filter, size: newSize });
                    break;
                default:
            }
        }
    };

    const updateProducts = useCallback(() => {
        console.log('updateProducts')
        let temp = productList;

        if (filter.category.length > 0) {
            temp = temp.filter(e => filter.category.includes(e.categorySlug));
        }

        if (filter.color.length > 0) {
            temp = temp.filter((e) => {
                const check = e.colors.find((color) => filter.color.includes(color));
                return check !== undefined;
            });
        }

        if (filter.size.length > 0) {
            temp = temp.filter((e) => {
                const check = e.size.find((size) => filter.size.includes(size));
                return check !== undefined;
            });
        }

        setProducts(temp);
    }, [filter, productList]);

    useEffect(() => {
        console.log('3')
        updateProducts();
    }, [updateProducts]);

    const filterRef = useRef()
    const showHideFilter = () => {
        filterRef.current.classList.toggle('active');
    };
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Helmet title='FOR HIM'>
            <div className="catalog-header">
                <h2 className="catalog-header__heading">For Him</h2>
                <p>
                    Tất cả những sản phẩm Mới nhất nằm trong BST được mở bán Hàng Tuần sẽ được cập nhật liên tục tại
                    đây. Chắc chắn bạn sẽ tìm thấy những sản phẩm Đẹp Nhất - Vừa Vặn Nhất - Phù Hợp nhất với phong cách
                    của mình.
                </p>
            </div>
            <div className='catalog'>
                <div className='catalog-filter' ref={filterRef}>
                    <div className='catalog-filter_close' onClick={showHideFilter}>
                        <i class="ri-arrow-left-line"></i>
                    </div>
                    <div className="catalog-filter_widget">
                        <div className="catalog-filter_widget_title"> Danh mục sản phẩm</div>
                        <div className="catalog-filter_widget_content">
                            {category.map((item, index) => (
                                <p key={index}>
                                    <CheckBox
                                        label={item.display}
                                        onChange={(input) => filterSelect('CATEGORY', input.checked, item)}
                                        checked={filter.category.includes(item.categorySlug)}
                                    />
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="catalog-filter_widget">
                        <div className="catalog-filter_widget_title"> kích cỡ / Size</div>
                        <div className="catalog-filter_widget_content">
                            {size.map((item, index) => (
                                <p key={index}>
                                    <CheckBox
                                        label={item.display}
                                        onChange={(input) => filterSelect('SIZE', input.checked, item)}
                                        checked={filter.size.includes(item.size)}
                                    />
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="catalog-filter_widget">
                        <div className="catalog-filter_widget_title">  Màu sắc</div>
                        <div className="catalog-filter_widget_content">
                            {color.map((item, index) => (
                                <p key={index}>
                                    <CheckBox
                                        label={item.display}
                                        onChange={(input) => filterSelect('COLOR', input.checked, item)}
                                        checked={filter.color.includes(item.color)}
                                    />
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="catalog-filter_toggle">
                    <Button size="sm" onClick={showHideFilter}>
                        Bộ lọc
                    </Button>
                </div>
                <div className='catalog-content'>
                    <Grid col={3} mdCol={2} smCol={1}>
                        {products.map((item, index) => (
                            <ProductCard
                                key={index}
                                numColor={item.colors.length}
                                img01={item.image01}
                                name={item.title}
                                price_old={item.price_old}
                                price={Number(item.price)}
                                slug={item.slug}
                                sale={item.sale}
                            />
                        ))}
                    </Grid>
                </div>
            </div>
        </Helmet>
    )
}

export default HimProducts


