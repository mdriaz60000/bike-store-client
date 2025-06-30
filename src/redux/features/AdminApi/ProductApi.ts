import baseApi from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    addProduct: builder.mutation({
      query: (productData) => ({
        url: "/products",
        method: "POST",
        body: productData
      }),
    }),

    getProduct: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/deleteProduct/${id}`,
        method: "PATCH",
      }),
    }),

  }),
});

export const { useAddProductMutation, useGetProductQuery, useDeleteProductMutation } = productApi;