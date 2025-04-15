
import { useGetProductQuery } from "../../redux/features/AdminApi/ProductApi";
import { Bike } from "../../types";
import AllBikesCard from "./AllBikesCard";


const AllBikes = () => {
       const { data , error, isLoading } = useGetProductQuery(undefined);        
          if (isLoading) return <div>Loading...</div>;
          if (error) return <div>Error is product</div>;
    return (
        <div className=" my-4 md:my-8 lg:my-16">

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {data?.data?.map((bike : Bike)  => (
                <AllBikesCard key={(bike.id)} bike={bike} />
            ))}
        </div>

    </div>

    );
};

export default AllBikes;