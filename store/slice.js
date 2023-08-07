import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  base: [
    {
       id: 1,
       name: 'Tony Reichert',
       status: false,
       type: 'Text',
       about: '',
       title: '',
       filler: '',
       isRequired: false,
       placement: false,
       wide: null
    }
 ]
};

const playerSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    render: (state, action) => {
      state.base = action.payload;
    },
  },
});

export const { render } = playerSlice.actions;

export default playerSlice.reducer;