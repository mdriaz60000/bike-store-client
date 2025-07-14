
import baseApi from "../../api/baseApi";


const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (productData) => ({
        url: "/products",
        method: "POST",
        body: productData,
      }),
    }),

  

    getProduct: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
    
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/deleteProduct/${id}`,
        method: "PATCH",
      }),
    }),

    updateProduct: builder.mutation({
      query: ({ id, updateData }) => ({
        url: `/updateProducts/${id}`,
        method: "PATCH",
        body: updateData,
      }),
    }),

//  getAllProduct:  builder.query({
//   query: (params: { page?: number; limit?: number } = {}) => {
//     const { page = 1, limit = 10 } = params;
//     return {
//       url: `/products?page=${page}&limit=${limit}`,
//       method: "GET",
//     };
//   },
// }),

  }),
});

export const {
  useAddProductMutation,
  useGetProductQuery,
 
  useGetSingleProductQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
  // useGetAllProductQuery,
} = productApi;
