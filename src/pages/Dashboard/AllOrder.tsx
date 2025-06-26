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
import { RxUpdate } from "react-icons/rx";
import { MdDeleteForever } from "react-icons/md";
import { useDeleteOrderMutation, useGetOrderQuery } from "../../redux/features/AdminApi/orderApi";
import { toast } from "sonner";

interface tOrder {
  productName: string;
  orderEmail: string;
  price: string;
  _id: string;
}

const Order = () => {
  const { data, isLoading, error } = useGetOrderQuery(undefined) as { data?: tOrder[] };
  const [deleteOrder] = useDeleteOrderMutation();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading orders</div>;

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
      <Table>
        <TableCaption>A list of all orders</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Order Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Update</TableHead>
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
                <button className="text-blue-500 hover:text-blue-700">
                  <RxUpdate />
                </button>
              </TableCell>
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
