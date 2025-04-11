import baseApi from "../../api/baseApi"


const getAllUserApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllUser : builder.query({
           query: () =>({
             url :"/users",
             method : "GET",
           
           })
         }),
       }),
})

export const {useGetAllUserQuery} = getAllUserApi