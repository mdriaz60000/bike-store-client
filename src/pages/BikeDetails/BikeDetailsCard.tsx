import { Card, CardContent, CardFooter, CardHeader } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Bike } from "../../types";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";

import Swal from "sweetalert2";
import { useAddOderMutation } from "../../redux/features/AdminApi/orderApi";


interface User {
  email: string;
}

const BikeDetailsCard = ({ bike }: { bike: Bike }) => {
  const user = useAppSelector(useCurrentUser) as User | undefined;
  const [addOrder] = useAddOderMutation();

  const handleAddProduct = async () => {

    const orderData = {
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
    } catch (error :any ) {
      Swal.fire({
        title: "Error!",
        text: "Failed to place the order.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
      <CardHeader className="p-0 relative">
        <img
          src={bike.img}
          alt={bike.brand}
          width={400}
          height={300}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
        />
        {bike.category && (
          <span className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
            {bike.category}
          </span>
        )}
      </CardHeader>

      <CardContent className="p-6 space-y-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold text-gray-900">{bike.brand}</h3>
            <h4 className="text-md text-gray-600">Model: {bike.productName}</h4>
          </div>
          <span className="text-xl font-bold text-primary">${bike.price}</span>
        </div>

        <p className="text-gray-500 text-sm line-clamp-2">{bike.description}</p>
      </CardContent>

      <CardFooter className="p-4 bg-gray-50">
        <Button
          className="w-full bg-primary hover:bg-primary-dark transition-colors duration-300"
          onClick={handleAddProduct}
        >
          Add Product
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BikeDetailsCard;
