
import baseApi from "../../api/baseApi";


const userApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({

        getUsers : builder.query({
            query: (query) => ({
                url : '/api/users',
                method : "GET",
                params : query,
            }),
            providesTags: ['Users']
        }),

        getSingleUser : builder.query({
            query: (userEmail: string) => ({
                url : `/api/users/${userEmail}`,
                method : "GET",   
            }),
            providesTags : ['Single-user']
        }),

        // getBestSellingProducts : builder.query({
        //     query: () => ({
        //         url : `/best-selling-products`,
        //         method : "GET",   
        //     }),
        // }),

        // getFeaturedProducts : builder.query({
        //     query: () => ({
        //         url : `/featured-products`,
        //         method : "GET",   
        //     }),
        // }),

        // deleteCar : builder.mutation({
        //     query: (carId: string) => ({
        //         url : `/api/cars/${carId}`,
        //         method : "DELETE",   
        //     }),
        //     invalidatesTags: ['Cars']
        // }),

        // updateCar : builder.mutation({
        //     query: ({ carId , payload } : { carId: string, payload:TCar}) => ({
                
        //         url : `/api/cars/${carId}`,
        //         method : "PUT", 
        //         body : payload,  
        //     }),
        //     invalidatesTags: ['Cars','Single-car' ]
        // }),
    })
})

export const {
useGetSingleUserQuery, useGetUsersQuery
    } = userApi;