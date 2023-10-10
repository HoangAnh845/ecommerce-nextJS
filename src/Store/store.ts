'use client'


import { AdminNavReducer } from '@/utils/AdminNavSlice';
import { AdminReducer } from '@/utils/AdminSlice';
import { UserReducer } from '@/utils/UserDataSlice';
import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from '@/utils/CartSlice';
import { bookmarkReducer } from '@/utils/Bookmark';
import { OrderReducer } from '@/utils/OrderSlice';
import { CategoryReducer } from '@/utils/CategorySlice';



export const store = configureStore({
    reducer: {
        User : UserReducer,
        AdminNav : AdminNavReducer,
        Admin : AdminReducer,
        Category : CategoryReducer,
        Cart : cartReducer,
        Bookmark : bookmarkReducer,
        Order : OrderReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;