import baseApi from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/deleteUser/${id}`,
        method: "PATCH",      
      }),
    }),
  }),
});

export const { useGetAllUserQuery, useDeleteUserMutation } = userApi;