import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "@/redux/features/AdminApi/ProductApi";
 import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

// Define the prop types
interface EditProductProps {
  handleDelete: () => void;
  bikeId: string;
}

interface FormData {
  _id: string;
  productName: string;
  brand: string;
  price: number;
  quantity: number;
  category: string;
  rating: number;
  img: string;
  description: string;
}

const EditProduct = ({ handleDelete, bikeId }: EditProductProps) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    _id: "",
    productName: "",
    brand: "",
    price: 0,
    quantity: 0,
    category: "",
    rating: 0,
    img: "",
    description: "",
  });

  // Load product data using the product ID
  const { data, isLoading } = useGetSingleProductQuery(bikeId);
  const [updateProduct] = useUpdateProductMutation();

  // Populate formData when product is loaded
  useEffect(() => {
    if (data?.data) {
      setFormData({
        _id: data.data._id,
        productName: data.data.productName,
        brand: data.data.brand,
        price: data.data.price,
        quantity: data.data.quantity,
        category: data.data.category,
        rating: data.data.rating,
        img: data.data.img,
        description: data.data.description,
      });
    }
  }, [data]);

  // Handle form input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "price" || name === "quantity" || name === "rating"
          ? Number(value)
          : value,
    }));
  };

  // Submit updated data
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const res = await updateProduct({
      id: formData._id,
      updateData: formData,
    }).unwrap();

    console.log("Updated Product:", res);

    // Show success alert and then navigate after confirmation
    Swal.fire({
      title: "Success!",
      text: "Product updated successfully.",
      icon: "success",
      confirmButtonColor: "#3085d6",
    }).then(() => {
      navigate(`/details/${formData._id}`);
    });

    setOpen(false);
  } catch (err) {
    console.error("Update failed:", err);

    Swal.fire({
      title: "Error!",
      text: "Something went wrong while updating the product.",
      icon: "error",
      confirmButtonColor: "#d33",
    });
  }
};



  return (
    <div className=" px-3 pb-3">
      <div className="flex  gap-4 items-start text-primary">
        <Button className="w-full bg-red-500 hover:bg-red-600 transition-all duration-300" onClick={handleDelete}>
          Delete
        </Button>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="w-full bg-primary hover:bg-primary-dark transition-all duration-300">Edit</Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Edit Product</DialogTitle>
            </DialogHeader>

            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="productName">Product Name</Label>
                    <Input
                      name="productName"
                      value={formData.productName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="brand">Brand</Label>
                    <Input
                      name="brand"
                      value={formData.brand}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="price">Price</Label>
                    <Input
                      name="price"
                      type="number"
                      value={formData.price}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input
                      name="quantity"
                      type="number"
                      value={formData.quantity}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="category">Category</Label>
                    <Input
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="rating">Rating</Label>
                    <Input
                      name="rating"
                      type="number"
                      value={formData.rating}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="img">Image URL / Base64</Label>
                  <Input
                    name="img"
                    value={formData.img}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>
              
                  <Button type="submit" className="w-full">
                    Update Product
                  </Button>
                
              </form>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default EditProduct;
