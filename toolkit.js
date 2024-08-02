import * as toolkit from '@reduxjs/toolkit'

const {configureStore, createAction, createReducer} = toolkit

const addToCart = createAction("ADD_TO_CART")

const cartReducer = createReducer([], (builder) => {
    builder.addCase(addToCart, (state, action) => {
        state.push(action.payload)
    })
})

const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})

store.subscribe(() => {
    console.log(store.getState())
})

// const action1 = addToCart({})
store.dispatch(addToCart({id: 1, qty: 20}))