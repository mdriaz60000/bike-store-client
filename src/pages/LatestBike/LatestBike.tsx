import { Link } from "react-router-dom";
import BikeCard from "./BikeCard";
import { Button } from "../../components/ui/button";
import { useGetProductQuery } from "../../redux/features/AdminApi/ProductApi";
import { Bike } from "../../types";
import Container from "../../components/shared/Containeer/Containeer";
 import { Skeleton } from "@/components/ui/skeleton";

const LatestBike = () => {
  const { data, error, isLoading } = useGetProductQuery(undefined);
  // console.log(data?.data?.bikes)

 if (isLoading) {
  return (
    <Container>
      <div className="my-4 md:my-8 lg:my-16">
        <div className="text-center mb-10">
          <Skeleton className="h-10 w-48 mx-auto mb-3 rounded-md animate-pulse" />
          <Skeleton className="h-5 w-3/4 mx-auto rounded-md animate-pulse" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 shadow-sm space-y-3 animate-pulse"
            >
              <Skeleton className="h-32 w-full rounded-md" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-8 w-full rounded-md" />
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center pt-4 lg:pt-12">
          <Skeleton className="h-10 w-40 rounded-full animate-pulse" />
        </div>
      </div>
    </Container>
  );
}


  if (error) return <div>Error is product</div>;

  // const [products] = UseProduct()
  // console.log(products)
  return (
    <Container>
      <div className=" my-4 md:my-8 lg:my-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            Latest Bike
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get Your Desired Product from Smart Collection
          </p>
        </div>

        <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3">
          {data?.data?.slice(0, 8).map((bike: Bike) => (
            <BikeCard key={bike._id} bike={bike} />
          ))}
        </div>
 <div className="flex justify-center items-center pt-4 lg:pt-12">
  <Link to="/allBikes">
    <Button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition duration-300 shadow-md">
      View All Bikes
    </Button>
  </Link>
</div>
      </div>
    </Container>
  );
};

export default LatestBike;
