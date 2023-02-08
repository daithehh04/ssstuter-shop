import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { cartActions } from '../redux/cartSlice/cartSlice';
import numWithCommas from '../utils/numWithCommas';

const CartItem = (props) => {
    const quantity = props.item.quantity;
    const item = props.item;
    const dispatch = useDispatch()

    const updateQuantity = (opt) => {
        if (opt === '+') {
            dispatch(cartActions.addItem(item))
            toast.info('Đã thêm 1 sản phẩm vào giỏ hàng')
        }
        if (opt === '-') {
            dispatch(cartActions.removeItem(item))
            toast.info('Đã xóa 1 sản phẩm từ giỏ hàng')
        }
    };

    const handleDelete = (item) => {
        dispatch(cartActions.deleteItem(item))
        toast.info('Đã xóa sản phẩm khỏi giỏ hàng')
    }

    return (
        <div className='cart-item'>
            <div className="cart-item_img">
                <img src={item.product.image01} alt="" />
            </div>
            <div className="cart-item_info">
                <div className="cart-item_info_name">
                    <Link to={`/catalog/${item.slug}`}>{`${item.title} - ${item.color} - ${item.size}`}</Link>
                </div>
                <div className="cart-item_info_price">{numWithCommas(item.price)}</div>
                <div className="cart-item_info_quantity">
                    <div className="product-info_item_quantity">
                        <div className="product-info_item_quantity_btn" onClick={() => updateQuantity('-')}>
                            <i class="ri-subtract-line"></i>
                        </div>
                        <div className="product-info_item_quantity_input">{quantity}</div>
                        <div className="product-info_item_quantity_btn" onClick={() => updateQuantity('+')}>
                            <i class="ri-add-line"></i>
                        </div>
                    </div>
                </div>
                <div className="cart-item_del" onClick={() => handleDelete(item)}><i class="ri-delete-bin-line"></i></div>
            </div>
        </div>
    )
}

export default CartItem