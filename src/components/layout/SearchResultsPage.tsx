import { Link, useSearchParams } from "react-router-dom";
import { useGetSearchQuery } from "@/redux/features/search/search";

import Container from "../shared/Containeer/Containeer";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Star } from "lucide-react";
import { Button } from "../ui/button";

const SearchResultsPage = () => {
  const [params] = useSearchParams();
  const searchTerm = params.get("searchTerm") || "";
  const { data, isLoading } = useGetSearchQuery(searchTerm);

  return (
    <Container>
      <h2 className="text-xl p-2 mb-4">Search results for "{searchTerm}"</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : data?.data?.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.data.map((item: item) => (
            <div key={item._id} className="border rounded p-2">
     <Card className="group w-full max-w-sm mx-auto overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
      <CardHeader className="p-0 relative">
        <img
          src={item.img}
          alt={item.brand}
          width={400}
          height={300}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {item.category && (
          <span className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {item.category}
          </span>
        )}
      </CardHeader>

      <CardContent className="py-6 space-y-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold text-gray-900">{item.brand}</h3>
          </div>
          <span className="text-xl font-bold text-primary">${item.price}</span>
        </div>

        <div className="flex items-center gap-1 text-primary text-sm">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                item.rating && item.rating >= i + 1
                  ? "fill-primary stroke-primary"
                  : item.rating && item.rating >= i + 0.5
                  ? "fill-primary stroke-primary"
                  : "stroke-primary"
              }`}
            />
          ))}
          <span className="text-gray-500 ml-2 text-xs">
            {item.rating || "0.0"}
          </span>
        </div>

        <p className="text-gray-500 text-sm line-clamp-2">{item.description}</p>

        <div className=" pt-2">
          <Link to={`/details/${item._id}`} className="w-full">
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
      ) : (
        <p>No items found.</p>
      )}
    </Container>
  );
};

export default SearchResultsPage;
