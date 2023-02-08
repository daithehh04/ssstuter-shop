import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import Button from '../UI/Button'
import Helmet from '../UI/Helmet'
import productData from '../assets/data/products'
import numWithCommas from '../utils/numWithCommas'

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems)
    const totalPrice = useSelector(state => state.cart.totalAmount)
    const totalProducts = useSelector(state => state.cart.totalQuantity)

    const cartProducts = productData.getCartItemsDetail(cartItems);
    return (
        <Helmet title='Giỏ hàng'>
            <div className="cart">
                <div className="cart-info">
                    <div className="cart-info_txt">
                        <p>Bạn đang có {totalProducts} sản phẩm trong giỏ hàng</p>
                        <div className="cart-info_txt_price">
                            <span>Thành tiền</span>
                            <span>{numWithCommas(totalPrice)} VNĐ</span>
                        </div>
                    </div>
                    <div className="cart-info_btn">
                        {cartItems.length > 0 && (
                            <Link to="/checkout">
                                <Button className="cart-info_btn_checkout">
                                    Đặt hàng
                                </Button>
                            </Link>
                        )}
                        <Link to="/FOR-HIM">
                            <Button className="cart-info_btn_continue">Tiếp tục mua hàng</Button>
                        </Link>
                    </div>
                </div>
                <div className="cart-list">
                    {cartProducts.map((item, index) => (
                        <CartItem item={item} key={index} />
                    ))}
                </div>
            </div>
        </Helmet>
    )
}

export default Cart