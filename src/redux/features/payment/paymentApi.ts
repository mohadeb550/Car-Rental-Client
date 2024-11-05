
import baseApi from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({

        getPaymentHistories : builder.query({
            query: (email: string) => ({
                url : `/api/payments/?userEmail=${email}`,
                method : "GET",
            }),
            providesTags: ['Payments']
        }),

        savePayment : builder.mutation({
            query: (payload ) => ({
                
                url : `/api/payments`,
                method : "POST", 
                body : payload,  
            }),
            invalidatesTags: ['Payments']
        }),
    })
})

export const {
useSavePaymentMutation, useGetPaymentHistoriesQuery } = userApi;