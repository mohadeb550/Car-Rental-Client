
import baseApi from "../../api/baseApi";

type TOrder = {
    userName : string;
    email : string;
    phone : string;
    deliveryAddress : string;
    paymentMethod : string;
    orderedProducts : { 
        productId : string ,
        quantity : number 
    }[];
    total : number;
}

const orderApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({

        createOrder : builder.mutation({
            query: (order : TOrder) => ({
                url : '/create-order',
                method : "POST",
                body: order,   
            }),
            invalidatesTags: ['Products']
        }),
    })
})

export const { useCreateOrderMutation } = orderApi;