import { useQuery } from "@tanstack/react-query";
import useAxiosHost from "../useAxiosHost";



const UseProduct = () => {
  //tan stack query
  const axiosHost = useAxiosHost()
 
  const { refetch, data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosHost.get("/products");

      return res.data;
    },
  });

//   const { data: allCart = [] } = useQuery({
//     queryKey: ["allCart"],
//     queryFn: async () => {
//       const data = await axiosSecure.get("/carts");
//       return data.data;
//     },
//   });

  return [ products, refetch, ];
};

export default UseProduct;
