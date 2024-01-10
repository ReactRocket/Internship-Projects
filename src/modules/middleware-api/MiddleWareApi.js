// MiddleWareApi.js
import React from 'react';
import Backbtn from '../../components/Backbtn';
import { DisplayData } from './components/DisplayData';
import { Provider } from 'react-redux';
import store from './redux/store';

export const MiddleWareApi = () => {
    return (
        <Provider store={store}>
            <Backbtn />
            <DisplayData />
        </Provider>
    );
};
