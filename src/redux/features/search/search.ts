import baseApi from "../../api/baseApi";

const searchApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSearch: builder.query({
      query: (searchTerm: string) => ({
        url: `/productSearch?searchTerm=${searchTerm}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetSearchQuery } = searchApi;
