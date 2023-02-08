import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Description from '../components/Description'
import { cartActions } from '../redux/cartSlice/cartSlice';
import { toast } from 'react-toastify'
import Button from '../UI/Button';
import numWithCommas from '../utils/numWithCommas';

const ProductView = (props) => {
    let product = props.product;
    const { price, title, slug } = product
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.cartItems)

    if (product === undefined)
        product = {
            price: 0,
            title: '',
            colors: [],
            size: [],
        };

    const [previewImg, setPreviewImg] = useState(product.image01);

    const [descriptionExpand, setDescriptionExpand] = useState(false);

    const [color, setColor] = useState(undefined);

    const [size, setSize] = useState(undefined);

    const check = () => {
        if (color === undefined) {
            toast.error('Vui lòng chọn màu')
            return false;
        }
        if (size === undefined) {
            toast.error('Vui lòng chọn size')
            return false;
        }

        return true;
    };
    useEffect(() => {
        setPreviewImg(product.image01);
        setColor(undefined);
        setSize(undefined);
    }, [product]);

    const addToCart = () => {
        if (check()) {
            dispatch(cartActions.addItem({
                slug,
                title,
                price,
                color,
                size,
            }))
            toast.success('Sản phẩm đã được thêm thành công!')
            console.log(cartItems)
        }
    }
    return (
        <div className='product'>
            <div className='product-images'>
                <div className="product-images_list">
                    <div className="product-image_list_item" onClick={() => setPreviewImg(product.image01)}>
                        <img src={product.image01} alt="" />
                    </div>
                    <div className="product-image_list_item" onClick={() => setPreviewImg(product.image02)}>
                        <img src={product.image02} alt="" />
                    </div>
                </div>
                <div className="product-images_main">
                    <img src={previewImg} alt="" />
                </div>
                <div className={`product-description ${descriptionExpand ? 'expand' : ''}`}>
                    <div className="product-description_title">Chi tiết sản phẩm</div>
                    <div className="product-description_name">{product.title}</div>
                    <p>--</p>
                    <div className="product-description_info_heading">THÔNG TIN SẢN PHẨM</div>
                    <div className="product-description_info_item">Màu sắc: {product.color_info}</div>
                    <div className="product-description_info_item">Kích cỡ: {product.size_info}</div>
                    <div className="product-description_info_item">Chất liệu: {product.material}</div>
                    <div className="product-description_info_item">Suất xứ: {product.origin}</div>
                    <Description />
                    <div className="product-description_toggle">
                        <Button onClick={() => setDescriptionExpand(!descriptionExpand)}>
                            {!descriptionExpand ? 'xem thêm' : 'thu gọn'}
                        </Button>
                    </div>
                </div>
            </div>
            <div className='product-info'>
                <h1 className="product-info_title">{product.title}</h1>
                {/* PRICE */}
                <div className='product-info_item'>
                    <span className='product-info_item_price__new'>{numWithCommas(product.price)}</span>
                    <span className='product-info_item_price__old'>{numWithCommas(product.price_old)}</span>
                </div>
                {/* COLOR */}
                <div className="product-info_item">
                    <div className="product-info_item_title">Màu sắc</div>
                    <div className="product-info_item_list">
                        {product.colors.map((item, index) => (
                            <div
                                className={`product-info_item_list_item ${color === item ? 'active' : ''}`}
                                key={index}
                                onClick={() => setColor(item)}
                            >
                                <div className={`circle bg-${item}`}></div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* SIZE */}
                <div className="product-info_item">
                    <div className="product-info_item_title">Kích cỡ</div>
                    <div className="product-info_item_list">
                        {product.size.map((item, index) => (
                            <div
                                className={`product-info_item_list_item ${size === item ? 'active' : ''}`}
                                key={index}
                                onClick={() => setSize(item)}
                            >
                                <span className="product-info_item_list_item_size">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <Button className='btn-add_cart' onClick={addToCart}>THÊM VÀO GIỎ</Button>
            </div>
            <div className={`product-description mobile ${descriptionExpand ? 'expand' : ''}`}>
                <div className="product-description_title">Chi tiết sản phẩm</div>
                <div className="product-description_name">{product.description}</div>
                <p>--</p>
                <div className="product-description_info_heading">Thông tin sản phẩm</div>
                <div className="product-description_info_item">Màu sắc: {product.color_info}</div>
                <div className="product-description_info_item">Kích cỡ: {product.size_info}</div>
                <div className="product-description_info_item">Chất liệu: {product.material}</div>
                <div className="product-description_info_item">Suất xứ: {product.origin}</div>
                <Description />
                <div className="product-description_toggle">
                    <Button size="sm" onClick={() => setDescriptionExpand(!descriptionExpand)}>
                        {!descriptionExpand ? 'xem thêm' : 'thu gọn'}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductView