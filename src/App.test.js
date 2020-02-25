import React from 'react';
import {
  render,
  fireEvent,
  waitForElement,
  wait
} from '@testing-library/react';
import { fetchShow as mockFetchShow } from './api/fetchShow';
import App from './App';

jest.mock('./api/fetchShow');
console.log(mockFetchShow);

const seasons = {
    data: [
        Season
    ]
}


test('App fetches data and renders it', async () => {

})