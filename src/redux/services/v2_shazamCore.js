import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
//import { useGetTopChartsQuery, useGetSongDetailsQuery, useGetSongRelatedQuery, } from 'shazamCore'

export const v2_shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',

    baseQuery: fetchBaseQuery({
        reducerPath: 'v2_shazamCoreApi',
        baseUrl: 'https://shazam-core.p.rapidapi.com/v2',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'd51e4b1f18msh104044cdafd7928p187e05jsn304333b04140');

            return headers;
        },
        skipStatusCheck: true,
    }),

    endpoints: (builder) => ({
        getArtistDetails: builder.query({
            query: (artistId) => `/artists/details?artist_id=${artistId}`
        }),
    }),
});

export const {
    useGetArtistDetailsQuery,
} = v2_shazamCoreApi;


