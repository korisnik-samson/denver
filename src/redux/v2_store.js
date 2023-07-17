import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { v2_shazamCoreApi } from "./services/v2_shazamCore";

export const v2_store = configureStore({
    reducer: {
        [v2_shazamCoreApi.reducerPath] : v2_shazamCoreApi.reducer,
        player: playerReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(v2_shazamCoreApi.middleware),
});
