/* eslint-disable @typescript-eslint/no-unused-vars */
import { Card, CardContent, CardFooter } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Bike } from "../../types";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import Swal from "sweetalert2";
import { useAddOderMutation } from "../../redux/features/AdminApi/orderApi";
import { Star, Wrench, Truck, CreditCard } from "lucide-react"; // service icons
import EditProduct from "../allBikes/EditProduct";
import { useDeleteProductMutation } from "@/redux/features/AdminApi/ProductApi";
import { useNavigate } from "react-router-dom";



interface User {
  role?: string;
  name?: string;
  image?: string;
  email?: string
}

const BikeDetailsCard = ({ bike }: { bike: Bike }) => {
  const user = useAppSelector(useCurrentUser) as User | undefined;
  const [addOrder] = useAddOderMutation();
   const [deleteProduct] = useDeleteProductMutation();
    const navigate = useNavigate();

  const handleAddProduct = async () => {
      if (!user) {
    Swal.fire({
      title: "Unauthorized!",
      text: "Please login to place an order.",
      icon: "warning",
      confirmButtonText: "Login",
    });
    return;
  }
    const orderData = {
      userName: user?.name,
      price: bike.price,
      brand: bike.brand,
      category: bike.category,
      img: bike.img,
      productName: bike.productName,
      orderEmail: user?.email,
    };

    try {
      await addOrder(orderData).unwrap();
      Swal.fire({
        title: "Success!",
        text: "Order placed successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to place the order.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

 

const handleDelete = async () => {
  // Show confirmation dialog first
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  });

  // If user confirmed
  if (result.isConfirmed) {
    try {
      await deleteProduct(bike._id).unwrap();

      Swal.fire({
        title: "Deleted!",
        text: "Your bike has been deleted.",
        icon: "success"
      });

      navigate("/")

      // Optionally reload data or show toast here
    } catch (error) {
      console.error("Delete failed:", error);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong while deleting.",
        icon: "error"
      });
    }
  }
};

  return (
    <Card className="rounded-2xl overflow-hidden border border-gray-200">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Bike Image */}
        <div className="w-full h-full border border-primary">
          <img
            src={bike.img || "https://via.placeholder.com/400x300?text=No+Image"}
            alt={bike.productName || "Bike Image"}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Bike Info */}
        <div className="flex flex-col justify-between">
          <CardContent className="p-6 space-y-4">

  
            {/* Brand / Price / Model */}
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-gray-500">{bike.brand}</h3>
                <h4 className="text-lg text-gray-600 mt-1">
                  Model: {bike.productName}
                </h4>
              </div>
              <span className="text-2xl font-bold text-primary">${bike.price}</span>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-sm leading-relaxed">
              {bike.description || "No description provided."}
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Category: {bike.category || "N/A"}
            </p>

            {/* Rating */}
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

            {/* Services Included */}
            <div className="mt-6">
              <h4 className="text-md font-semibold mb-2 text-gray-700">
                Services Included:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-primary" /> 3 Free Servicing
                </li>
                <li className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-primary" /> EMI Available
                </li>
                <li className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-primary" /> Free Home Delivery
                </li>
              </ul>
            </div>
          </CardContent>

          {/* Actions */}
                            {user?.role === "admin" ? (
                      <EditProduct handleDelete={handleDelete} bikeId={bike._id} />
                    ): (
                              <CardFooter className="flex justify-between gap-4  p-6 pt-0">

            
                          <Button
              className="w-full bg-primary hover:bg-primary-dark transition-all duration-300"
              onClick={handleAddProduct}
            >
             
              Buy Now
              
            </Button>
           

           
                <Button
              className="w-full bg-primary hover:bg-primary-dark transition-all duration-300"
              onClick={handleAddProduct}
            >
              Add to Cart
            </Button>
       

          </CardFooter>
                    )}

  
        </div>
      </div>
    </Card>
  );
};

export default BikeDetailsCard;
