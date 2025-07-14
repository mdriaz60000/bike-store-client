import { Link } from "react-router-dom";
import Container from "../../components/shared/Containeer/Containeer";
import { useGetProductQuery } from "../../redux/features/AdminApi/ProductApi";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { Star } from "lucide-react";
import { Bike } from "../../types";
import { Skeleton } from "@/components/ui/skeleton";

const OfferCard = () => {
  const { data, error, isLoading } = useGetProductQuery(undefined);

  const offers = data?.data|| [];
  const ratedProducts = offers.filter((product: Bike) => product.offer);

  if (isLoading) {
    return (
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 shadow-sm space-y-3 animate-pulse"
            >
              <Skeleton className="h-40 w-full rounded-md" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-8 w-full rounded-md" />
            </div>
          ))}
        </div>
      </Container>
    );
  }

  if (error) return <p className="text-center text-red-500">Error loading products.</p>;

  return (
    <Container>
      <div className="text-center my-6 md:my-12">
        <p className="text-3xl md:text-4xl font-bold text-primary mb-3">Now Offer</p>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Get Your Desired Product from Featured Offer!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {ratedProducts.map((bike: Bike) => (
          <div
            key={bike._id}
            className="p-2 rounded-lg hover:shadow-md transition-all"
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
                {bike.offer && (
                  <span className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {bike.offer}% OFF
                  </span>
                )}
              </CardHeader>

              <CardContent className="py-6 space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-gray-600">{bike.brand}</h3>
                  <span className="text-xl font-bold text-primary">${bike.price}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 text-primary text-sm">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        bike.rating && bike.rating >= i + 1
                          ? "fill-primary stroke-primary"
                          : "stroke-primary"
                      }`}
                    />
                  ))}
                  <span className="text-gray-500 ml-2 text-xs">
                    {bike.rating?.toFixed(1) || "0.0"}
                  </span>
                </div>

                <p className="text-gray-500 text-sm line-clamp-2">{bike.description}</p>

                <Link to={`/details/${bike._id}`} className="w-full block">
                  <Button className="w-full bg-primary hover:bg-primary-dark opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default OfferCard;
