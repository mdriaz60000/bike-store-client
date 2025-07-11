import { Link } from "react-router-dom";
import Container from "../../components/shared/Containeer/Containeer";
import { useGetProductQuery } from "../../redux/features/AdminApi/ProductApi";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { Star } from "lucide-react";
import { Bike } from "../../types";

const OfferCard = () => {
  const { data, error, isLoading } = useGetProductQuery(undefined);

  const offers = data?.data?.bikes || [];

  const ratedProducts = offers.filter((product: Bike) => product.offer);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products.</p>;

  return (
    <Container>
            <div className='text-center my-6 md:my-12'>
          <p className='text-3xl md:text-4xl font-bold text-primary mb-3'>Now Offer</p>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Get Your Desired Product from Featured Offer!
          </p>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
        {ratedProducts.map((bike: Bike) => (
          <div
            key={bike._id}
            className="p-4  rounded-lg  hover:shadow-md transition-all"
          >
    <Card className="group w-full max-w-sm mx-auto overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
      <CardHeader className="p-0 relative">
        <img
          src={bike.img}
          alt={bike.brand}
          width={400}
          height={300}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {bike.category && (
          <span className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {bike.offer}%
          </span>
        )}
      </CardHeader>

      <CardContent className="py-6 space-y-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold text-gray-500">{bike.brand}</h3>
          </div>
          <span className="text-xl font-bold text-primary">${bike.price}</span>
        </div>

        <div className="flex items-center gap-1 text-primary text-sm">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                bike.rating && bike.rating >= i + 1
                  ? "fill-primary stroke-primary"
                  : bike.rating && bike.rating >= i + 0.5
                  ? "fill-primary stroke-primary"
                  : "stroke-primary"
              }`}
            />
          ))}
          <span className="text-gray-500 ml-2 text-xs">
            {bike.rating || "0.0"}
          </span>
        </div>

        <p className="text-gray-500 text-sm line-clamp-2">{bike.description}</p>

        <div className=" ">
          <Link to={`/details/${bike._id}`} className="w-full">
            <Button className="w-full bg-primary hover:bg-primary-dark opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default OfferCard;
