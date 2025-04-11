import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { useGetAllUserQuery } from "../../redux/features/AdminApi/userApi";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

const AllUsers = () => {
  const { data, isLoading, error } = useGetAllUserQuery(undefined);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users</div>;

  const filteredUsers = data?.data?.filter((user: User) => user.role === "user") || [];

  return (
    <div>
      <Table>
        <TableCaption>A list of all users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="text-right">Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.map((user: User) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell className="text-right">{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllUsers;