// redux/features/pagination/pagination.ts
import baseApi from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPagination: builder.query({
      query: (params: { page?: number; limit?: number } = {}) => {
        const { page = 1, limit = 8 } = params;
        return {
          url: `/pagination?page=${page}&limit=${limit}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetPaginationQuery } = productApi;
