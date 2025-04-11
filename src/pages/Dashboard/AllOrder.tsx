import { Table,TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow, } from "../../components/ui/table";


const Order = () => {
    return (
        <div>
            <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Name</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>BikeName</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>

        </div>
    );
};

export default Order;