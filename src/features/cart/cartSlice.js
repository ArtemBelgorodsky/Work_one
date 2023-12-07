import { createSlice } from '@reduxjs/toolkit'
import { removeItem } from 'localforage';

const initialState = { cart: []}

let position = -1;

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: (state, action) => {
          const itemInCart = state.cart.find((item) => item.aroma === action.payload.aroma && item.fitil === action.payload.fitil && item.volume === action.payload.volume && item.title === action.payload.title);
          if (itemInCart) {
            itemInCart.quantity = itemInCart.quantity + action.payload.quantity
            itemInCart.position = position++
          } else {
            state.cart.push({...action.payload, position : position ++})
          }
         
    },
    del: (state, action) => {
      removeItem = state.cart.filter ((item) => item.position !== action.payload.position)
      state.cart = removeItem
    }
  },
})



// Action creators are generated for each case reducer function
export const { add, del} = cartSlice.actions

export default cartSlice.reducer