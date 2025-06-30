
import Container from "@/components/shared/Containeer/Containeer";
import { useGetProductQuery } from "../../redux/features/AdminApi/ProductApi";
import { Bike } from "../../types";
import AllBikesCard from "./AllBikesCard";



const AllBikes = () => {
       const { data , error, isLoading } = useGetProductQuery(undefined);        
          if (isLoading) return <div>Loading...</div>;
          if (error) return <div>Error is product</div>;
    return (
        <Container >
 
        <div className="text-center m-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            All Bike
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get Your Desired Product from Smart Collection
          </p>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {data?.data?.map((bike : Bike)  => (
                <AllBikesCard key={(bike._id)} bike={bike} />
            ))}
        </div>

  

    </Container>

    );
};

export default AllBikes;