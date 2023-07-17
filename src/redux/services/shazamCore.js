import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi ({
    reducerPath: 'shazamCoreApi',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '8da6b193eemshad77e71c3250f00p144e52jsnde05d61f0f78');

            return headers;
        },
        //skipStatusCheck: true,
    }),

    endpoints: (builder) => ({
        getTopCharts: builder.query({
            query: () => `v1/charts/world`
        }),
        getSongsByGenre: builder.query({
            query: (genre) => `v1/charts/genre-world?genre_code=${genre}`
        }),
        getSongDetails: builder.query({
            query: ({ songid }) => `v1/tracks/details?track_id=${songid}`
        }),
        getSongsBySearch: builder.query({
            query: (searchTerm) => `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`
        }),
        getSongRelated: builder.query({
            query: ({ songid }) => `v1/tracks/related?track_id=${songid}`
        }),
        getArtistDetails: builder.query({
            query: (artistId) => `v2/artists/details?artist_id=${artistId}`
        }),
        getSongsByCountry: builder.query({
            query: (countryCode) => `v1/charts/country?country_code=${countryCode}`
        }),
    }),
});

export const {
    useGetTopChartsQuery,
    useGetSongsByGenreQuery,
    useGetSongDetailsQuery,
    useGetSongsBySearchQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
} = shazamCoreApi;


