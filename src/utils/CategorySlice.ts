import { createSlice } from '@reduxjs/toolkit'


interface Data {
    CategoryId: string;
}


const initialState: Data = {
    CategoryId: "",
}


export const CategorySlice = createSlice({
    name: 'Category',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.CategoryId = action.payload
        },
    },
})

export const { setCategory } = CategorySlice.actions

export const CategoryReducer = CategorySlice.reducer;