import { createSlice } from '@reduxjs/toolkit';
import cryptoData from '../data/cryptoData';

const initialState = {
  assets: cryptoData,
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateAssets: (state, action) => {
      state.assets = action.payload;
    },
  },
});

export const { updateAssets } = cryptoSlice.actions;
export default cryptoSlice.reducer;
