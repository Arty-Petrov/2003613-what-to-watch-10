import {createAction} from '@reduxjs/toolkit';

export const changeGenre = createAction('catalog/changeGenre', (value) => ({payload: value}));
export const filterFilms = createAction('catalog/filterFilms', (value) => ({payload: value}));

export const reset = createAction('catalog/reset');
