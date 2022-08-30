import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../util/const';

export const redirectToRouteAction = createAction<AppRoute>('app/redirectToRoute');
