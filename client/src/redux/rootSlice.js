import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
  name: 'root',
  initialState: {
    loading: false,
    portfolioData: null, 
  },
  reducers: {
    ShowLoading : (state, action) => {
      state.loading = true;
    },
    HideLoading : (state, action) => {
      state.loading = false;
    },
    setPortfolioData : (state, action) => {
      state.portfolioData = action.payload;
    },
  },
})

export default rootSlice.reducer;
export const { ShowLoading, HideLoading, setPortfolioData } = rootSlice.actions;