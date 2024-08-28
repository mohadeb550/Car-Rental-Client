import { TCar } from "../../../components/Dashboard/components/Modal/CreateCarModal";
import baseApi from "../../api/baseApi";


const productApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({

        createCar : builder.mutation({
            query: (car : TCar) => ({
                url : '/api/cars',
                method : "POST",
                body: car,   
            }),
           invalidatesTags: ['Cars']
        }),

        getCars : builder.query({
            query: (query) => ({
                url : '/api/cars',
                method : "GET",
                params : query,
            }),
            providesTags: ['Cars']
        }),


        getSingleCar : builder.query({
            query: (carId: string) => ({
                url : `/api/cars/${carId}`,
                method : "GET",   
            }),
            providesTags : ['Single-car']
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

        deleteCar : builder.mutation({
            query: (carId: string) => ({
                url : `/api/cars/${carId}`,
                method : "DELETE",   
            }),
            invalidatesTags: ['Cars']
        }),

        updateCar : builder.mutation({
            query: ({ carId , payload } : { carId: string, payload:TCar}) => ({
                
                url : `/api/cars/${carId}`,
                method : "PUT", 
                body : payload,  
            }),
            invalidatesTags: ['Cars','Single-car' ]
        }),
    })
})

export const {
    useCreateCarMutation,
     useGetCarsQuery,
      useUpdateCarMutation,
       useDeleteCarMutation,
        useGetSingleCarQuery
    } = productApi;