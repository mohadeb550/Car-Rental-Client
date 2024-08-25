import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery : fetchBaseQuery({
        baseUrl : 'http://localhost:3000'
    }),
    tagTypes: ['Products', 'Single-product'],
    endpoints: () => ({})
})

export default baseApi;