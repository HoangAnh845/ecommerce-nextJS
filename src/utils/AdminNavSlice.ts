import { createSlice } from '@reduxjs/toolkit'

interface NavState {
  ActiveNav: string,
}

// Khởi tạo trạng thái ban đầu 
const initialState: NavState = {
  ActiveNav: 'Base'
}

export const AdminNav = createSlice({
  name: 'AdminNav',
  initialState,
  reducers: {
    // Định nghĩa reducer để thay đổi trạng thái
    setNavActive: (state, action) => {      
      state.ActiveNav = action.payload // Cập nhật giá trị
    }


  },
})

// Action creators được tạo tự động cho mỗi reducer
export const { setNavActive } = AdminNav.actions

// Trả về reducer của slice để sử dụng trong cửa hàng Redux
export const AdminNavReducer = AdminNav.reducer