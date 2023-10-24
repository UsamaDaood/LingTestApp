import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  leaderBoard: [],
};

const leaderBoardSlice = createSlice({
  name: 'leaderBoard',
  initialState,
  reducers: {
    handleLeaderBoard: (state, action) => {
      let data = action.payload;
      // let {data} = action.payload;
      // let newItems = [];
      //newItems = [...state.transactions, data];
      //state.transactions = [...state.transactions] + data;
      state.leaderBoard = data;
    },
  },
  extraReducers: builder => {},
});
export const {handleLeaderBoard} = leaderBoardSlice.actions;
export const leaderBoard = leaderBoardSlice.reducer;
