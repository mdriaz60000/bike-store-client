import { Link } from "react-router-dom";
import BikeCard from "../../components/ui/BikeCard";
import { Button } from "../../components/ui/button";
import { useGetProductQuery } from "../../redux/features/AdminApi/ProductApi";
import { Bike } from "../../types";


const LatestBike = () => {
    const { data , error, isLoading } = useGetProductQuery(undefined);

      if (isLoading) return <div>Loading...</div>;
      if (error) return <div>Error is product</div>;
    return (
        <div className=" my-4 md:my-8 lg:my-16">


            <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Latest Bike</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Bike quality full and Smart Collection
          </p>
        </div>
        

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {data?.data?.slice(0,6).map((bike : Bike)  => (
                    <BikeCard key={(bike._id)} bike={bike} />
                ))}
            </div>
            <div className=" flex justify-center items-center py-4">
                
               <Link to="/allBikes"><Button > all bike</Button></Link> 
            </div>
        </div>
    );
};

export default LatestBike;