import { ShoppingCart } from "lucide-react"
import { Button } from "../../ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog"
import { useGetOrderQuery } from "../../../redux/features/AdminApi/orderApi"

export function OrderCart() {
  const { data } = useGetOrderQuery([])
  console.log(data)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <ShoppingCart className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Your Order</DialogTitle>
          <DialogDescription>
            Review your items before proceeding to payment.
          </DialogDescription>
        </DialogHeader>

        {data?.map((item: any, index) => (
          <div key={index} className="mb-4">
            <p>Brand: {item.brand}</p>
            <p>Price: ${item.price}</p>
          </div>
        ))}

        <DialogFooter>
          <Button type="submit">Payment</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
