import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: (state, action) => {
          return [...state, ...action.payload]
    },
    del: (state, action) => {
      return state.filter((obj) => obj.id !== action.payload.id)
    }
  },
})



// Action creators are generated for each case reducer function
export const { add, del} = cartSlice.actions

export default cartSlice.reducer