import { createSlice } from '@reduxjs/toolkit'
const items = localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : [];
const totalAmount = localStorage.getItem('totalAmount') !== '' ? JSON.parse(localStorage.getItem('totalAmount')) : 0;
const totalQuantity = localStorage.getItem('totalQuantity') !== '' ? JSON.parse(localStorage.getItem('totalQuantity')) : 0;

const initialState = {
    cartItems: items,
    totalAmount: totalAmount,
    totalQuantity: totalQuantity
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload
            const existingItem = state.cartItems.find((item) => item.slug === newItem.slug &&
                item.color === newItem.color && item.size === newItem.size)
            state.totalQuantity++;
            if (!existingItem) {
                state.cartItems.push({
                    title: newItem.title,
                    slug: newItem.slug,
                    price: newItem.price,
                    size: newItem.size,
                    color: newItem.color,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }
            else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
            state.totalAmount = state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
            localStorage.setItem(
                'cartItems', JSON.stringify(state.cartItems),
            );
            localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount))
            localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity))
        },
        removeItem(state, action) {
            const itemRemove = action.payload
            const existingItem = state.cartItems.find((item) => item.slug === itemRemove.slug &&
                item.color === itemRemove.color && item.size === itemRemove.size)
            state.totalQuantity--
            if (existingItem.quantity === 1) {
                state.cartItems = state.cartItems.filter(
                    (item) => item.slug !== itemRemove.slug || item.color !== itemRemove.color || item.size !== itemRemove.size,
                );
            } else {
                existingItem.quantity--
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }
            state.totalAmount = state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
            localStorage.setItem(
                'cartItems', JSON.stringify(state.cartItems),
            );
            localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount))
            localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity))
        },
        deleteItem(state, action) {
            const itemDelete = action.payload
            const existingItem = state.cartItems.find((item) => item.slug === itemDelete.slug &&
                item.color === itemDelete.color && item.size === itemDelete.size)
            if (existingItem) {
                state.cartItems = state.cartItems.filter(
                    (item) => item.slug !== itemDelete.slug || item.color !== itemDelete.color || item.size !== itemDelete.size,
                );
                state.totalQuantity = state.totalQuantity - existingItem.quantity
            }
            state.totalAmount = state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
            localStorage.setItem(
                'cartItems', JSON.stringify(state.cartItems),
            );
            localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount))
            localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity))
        },
        removeAllItem(state, action) {
            state.cartItems = [];
            state.totalAmount = 0;
            state.totalQuantity = 0;
            localStorage.setItem(
                'cartItems', JSON.stringify(state.cartItems),
            );
            localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount))
            localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity))
        }
    }
});

export const cartActions = cartSlice.actions

export default cartSlice.reducer