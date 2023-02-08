import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import Helmet from '../UI/Helmet'
import productData from '../assets/data/products'
import Button from '../UI/Button'
import numWithCommas from '../utils/numWithCommas';
import { toast } from 'react-toastify';
import { cartActions } from '../redux/cartSlice/cartSlice';
import { useNavigate } from 'react-router-dom';
import Address from '../components/Address';

const payment = [
    {
        id: 1,
        icon: 'ri-visa-fill',
        display: 'Thanh toán thẻ (ATM, Visa , MasterCard)',
    },
    {
        id: 2,
        icon: 'ri-wallet-fill',
        display: 'Thanh toán bằng ví ShopeePay',
    },
    {
        id: 3,
        icon: 'ri-truck-fill',
        display: 'Thanh toán khi giao hàng (COD)',
    },
];
const Checkout = () => {
    const [checked, setChecked] = useState();
    const initialValues = { username: '', email: '', phoneNumber: '', address: '' };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const cartItems = useSelector(state => state.cart.cartItems)
    const cartProducts = productData.getCartItemsDetail(cartItems);
    const totalPrice = useSelector(state => state.cart.totalAmount)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const removeCartItem = () => {
        dispatch(cartActions.removeAllItem())
    }
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const phoneNumberPattern = /^\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
        if (!values.username) {
            errors.username = 'Vui lòng nhập tên!';
        }
        if (!values.address) {
            errors.address = 'Vui lòng nhập địa chỉ cụ thể!';
        }
        if (!values.email) {
            errors.email = 'Vui lòng nhập email!';
        } else if (!regex.test(values.email)) {
            errors.email = 'Vui lòng nhập đúng định dạng email!';
        }
        if (!values.phoneNumber) {
            errors.phoneNumber = 'Vui lòng nhập số điện thoại!';
        } else if (!phoneNumberPattern.test(values.phoneNumber)) {
            errors.phoneNumber = 'Vui lòng nhập đúng định dạng số điện thoại!';
        }

        return errors;
    };

    const check = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const phoneNumberPattern = /^\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
        if (formValues.username === '') {
            return false;
        }
        if (formValues.address === '') {
            return false;
        }
        if (formValues.email === '') {
            return false;
        } else if (!regex.test(formValues.email)) {
            return false;
        }
        if (formValues.phoneNumber === '') {
            return false;
        } else if (!phoneNumberPattern.test(formValues.phoneNumber)) {
            return false;
        }
        if (!checked) {
            toast.info('Vui lòng chọn phương thức thanh toán')
            return false;
        }
        if (cartProducts.length === 0) {
            toast.info('Giỏ hàng trống!')
            return false;
        }
        return true;
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }
    const handleSubmit = () => {
        setFormErrors(validate(formValues));
        if (check()) {
            removeCartItem()
            navigate('/success');
        }
    }
    const transportFee = '20000';
    return (
        <Helmet title='Thanh toán'>
            <div className='checkout'>
                <div className='checkout-info'>
                    <div className='checkout-info_user'>
                        <h2 className='checkout-info_title'>THÔNG TIN GIAO HÀNG</h2>
                        <div className="checkout-info_item">
                            <input
                                type="text"
                                placeholder="* Họ và tên"
                                name="username"
                                value={formValues.username}
                                onChange={(e) => handleChange(e)}
                            />
                            <p>{formErrors.username}</p>
                        </div>
                        <div className="checkout-info_item">
                            <input
                                type="email"
                                placeholder="*Email"
                                name="email"
                                value={formValues.email}
                                onChange={(e) => handleChange(e)}
                            />
                            <p>{formErrors.email}</p>
                        </div>
                        <div className="checkout-info_item">
                            <input
                                type="text"
                                placeholder="* Số điện thoại"
                                name="phoneNumber"
                                value={formValues.phoneNumber}
                                onChange={(e) => handleChange(e)}
                            />
                            <p>{formErrors.phoneNumber}</p>
                        </div>
                        <div className="checkout-info_item">
                            <Address />
                        </div>
                        <div className="checkout-info_item">
                            <input
                                type="text"
                                placeholder="* Số nhà tên đường..."
                                name="address"
                                value={formValues.address}
                                onChange={(e) => handleChange(e)}
                            />
                            <p>{formErrors.address}</p>
                        </div>

                        <p>(*) là trường không được để trống</p>
                    </div>
                    <div className='checkout-info_method'>
                        <h2 className='checkout-info_title'>PHƯƠNG THỨC THANH TOÁN</h2>
                        {payment.map((item) => (
                            <div
                                // ref={paymentRef}
                                className="checkout-info_payment"
                                key={item.id}
                                onClick={() => setChecked(item.id)}
                            >
                                <input
                                    className="checkout-info_payment_input"
                                    type="radio"
                                    id={item.id}
                                    onChange={() => setChecked(item.id)}
                                    checked={checked === item.id}
                                />
                                <i className={`checkout-info_payment_icon ${item.icon}`}></i>
                                <label className="checkout-info_payment_txt">{item.display}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='checkout-confirm'>
                    <div className='cart checkout-confirm_product'>
                        <div className="cart-list">
                            {cartProducts.map((item, index) => (
                                <CartItem item={item} key={index} />
                            ))}
                        </div>
                    </div>
                    <div className='checkout-confirm_list'>
                        <input type="text" placeholder="Mã giảm giá..." />
                        <button className="checkout-confirm_list_btn">Áp dụng</button>

                        <div className="checkout-confirm_list_item">
                            <h4>Tổng:</h4>
                            <h4>{numWithCommas(totalPrice)} VNĐ</h4>
                        </div>
                        <div className="checkout-confirm_list_item">
                            <span>Ưu đãi:</span>
                            <span>-0 VNĐ</span>
                        </div>
                        <div className="checkout-confirm_list_item">
                            <span>Phí ship</span>
                            <span>{numWithCommas(transportFee)} VNĐ</span>
                        </div>
                        <div className="checkout-confirm_list_item">
                            <h4>Thành tiền:</h4>
                            <h4>{numWithCommas(Number(transportFee) + Number(totalPrice))} VNĐ</h4>
                        </div>
                        <Button className="checkout-btn" onClick={handleSubmit}>
                            Hoàn tất đơn hàng
                        </Button>
                    </div>
                </div>
            </div>
            {/* Confirm */}

        </Helmet >
    )
}

export default Checkout