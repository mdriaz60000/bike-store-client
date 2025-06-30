/* eslint-disable @typescript-eslint/no-unused-vars */
import { ShoppingCart } from "lucide-react";
import { Button } from "../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { useDeleteOrderMutation, useGetOrderQuery } from "../../../redux/features/AdminApi/orderApi";
import { toast } from "sonner";
import { useAppSelector } from "../../../redux/hooks";
import { useCurrentUser } from "../../../redux/features/auth/authSlice";

import { useEffect, useState } from "react";
import { IUser } from "../../../types";

type OrderItem = {
  _id: string;
  brand: string;
  price: number;
  orderEmail: string;
};

export function OrderCart() {
  const user = useAppSelector(useCurrentUser) as IUser
 
  const { data } = useGetOrderQuery([]) as { data?: OrderItem[] };
  const [deleteOrder] = useDeleteOrderMutation();
  const [userOrders, setUserOrders] = useState<OrderItem[]>([]);

  useEffect(() => {
    if (data && user?.email) {
      const filteredOrders = data.filter((item) => item.orderEmail ===user?.email);
      setUserOrders(filteredOrders);
    }
  }, [data, user]);

  const handleDeleteOrder = async (id: string) => {
    try {
      const res = await deleteOrder(id).unwrap();
      if (res.success) {
        toast("Delete successful");
      
      }
    } catch (err) {
      toast.error("Failed to delete order");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        
          <ShoppingCart className="w-5 h-5" />
       
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Your Order</DialogTitle>
          <DialogDescription>
            Review your items before proceeding to payment.
          </DialogDescription>
        </DialogHeader>

        {userOrders.length > 0 ? (
          userOrders.map((item) => (
            <div key={item._id} className="mb-4 border-b pb-2">
              <p>Brand: {item.brand}</p>
              <p>Price: ${item.price}</p>
              <a href="">
                           <Button           
                variant="destructive"
                size="sm"
                className="mt-2"
                onClick={() => handleDeleteOrder(item._id)}
              >
                Delete
              </Button>
              </a>
   
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">No orders found.</p>
        )}

        <DialogFooter>
          <Button type="submit">Proceed to Payment</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
