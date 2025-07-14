/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { MdDeleteForever } from "react-icons/md";
import { useDeleteOrderMutation, useGetOrderQuery } from "../../redux/features/AdminApi/orderApi";
import { toast } from "sonner";
import { Skeleton } from "../../components/ui/skeleton";

type tOrder = {
  productName: string;
  orderEmail: string;
  price: string;
  _id: string;

}

const Order = () => {
  const { data , isLoading } = useGetOrderQuery(undefined)  ;
  const [deleteOrder] = useDeleteOrderMutation();

  if (isLoading) return <Skeleton className="h-[20px] w-[100px] rounded-full" />;

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteOrder(id).unwrap();
      if (res.success) {
        toast.success("Delete successful");
      }
    } catch (err) {
      toast.error("Failed to delete order");
    }
  };

  return (
    <div className="overflow-x-auto">
      <div>
        <p className="md:text-2xl ">All Orders Bikes :</p>
      </div>
      <Table>
        <TableCaption>A list of all orders</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Order Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((order: tOrder) => (
            <TableRow key={order._id}>
              <TableCell className="font-medium">{order.productName}</TableCell>
              <TableCell>{order.price}</TableCell>
              <TableCell>{order.orderEmail}</TableCell>

              <TableCell>
                <button
                  onClick={() => handleDelete(order._id)}
                  className="text-red-500 hover:text-red-700"
                  aria-label="Delete order"
                >
                  <MdDeleteForever size={20} />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Order;
