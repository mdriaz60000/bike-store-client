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
            <p className="text-center text-4xl">Our Latest Bike</p>
            <p className="text-center mb-2  md:mb-4 lg:mb-8">Bike quality full and Smart Collection</p>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {data?.data?.slice(0,6).map((bike : Bike)  => (
                    <BikeCard key={(bike.id)} bike={bike} />
                ))}
            </div>
            <div className=" flex justify-center items-center py-4">
                
               <Link to="/allBikes"><Button > all bike</Button></Link> 
            </div>
        </div>
    );
};

export default LatestBike;