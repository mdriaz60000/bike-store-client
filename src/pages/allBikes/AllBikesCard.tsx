import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { Bike } from "../../types";
import { Button } from "../../components/ui/button";
import { Star } from "lucide-react";
import { useDeleteProductMutation } from "@/redux/features/AdminApi/ProductApi";
import { useAppSelector } from "@/redux/hooks";
import { useCurrentUser } from "@/redux/features/auth/authSlice";
import EditProduct from "./EditProduct";

interface User {
  role?: string;
  name?: string;
  image?: string;
}

const AllBikesCard = ({ bike }: { bike: Bike }) => {
  const [deleteProduct] = useDeleteProductMutation();
  const user: User | null = useAppSelector(useCurrentUser);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this bike?")) {
      try {
        await deleteProduct(bike._id).unwrap();
        // Optionally show toast or reload data
      } catch (error) {
        console.error("Delete failed:", error);
      }
    }
  };

  return (
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
            {bike.category}
          </span>
        )}
      </CardHeader>

      <CardContent className="py-6 space-y-3">
        {user?.role === "admin" && (
          <EditProduct handleDelete={handleDelete} bikeId={bike._id} />
        )}

        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-gray-900">{bike.brand}</h3>
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
          <span className="text-gray-500 ml-2 text-xs">{bike.rating || "0.0"}</span>
        </div>

        <p className="text-gray-500 text-sm line-clamp-2">{bike.description}</p>

        <div className="pt-2">
          <Link to={`/details/${bike._id}`} className="w-full">
            <Button className="w-full bg-primary hover:bg-primary-dark opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default AllBikesCard;