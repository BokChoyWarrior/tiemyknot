import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { WeddingList } from './fakeData/fakeData';

export type List = WeddingList | null;

interface ListState {
  currentList: List;
}

const initialState: ListState = {
  currentList: null,
} as ListState;

const reduxState = createSlice({
  name: 'list',
  initialState,
  reducers: {
    logIntoList: (state, action: PayloadAction<WeddingList>) => {
      state.currentList = action.payload;
    },
    logOut: (state) => {
      state.currentList = null;
    },
  },
});

const store = configureStore(reduxState);
export const { logIntoList, logOut } = reduxState.actions;
export type RootState = ReturnType<typeof store.getState>;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
