import baseApi from "../../api/baseApi";

const searchApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
  
    getMessage: builder.query({
      query: () => ({
        url: "/message",
        method: "GET",
      }),
    }),

    
    sendMessage: builder.mutation({
      query: (messageData) => ({
        url: "/message",
        method: "POST",
        body: messageData,
      }),
    }),
    
  }),
});

export const { useGetMessageQuery, useSendMessageMutation } = searchApi;
