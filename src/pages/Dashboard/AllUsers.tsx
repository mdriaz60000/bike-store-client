import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { useDeleteUserMutation, useGetAllUserQuery } from "../../redux/features/AdminApi/userApi";
import { RxUpdate } from "react-icons/rx";
import { MdDeleteForever } from "react-icons/md";
import Swal from 'sweetalert2'
import { tUser } from "../../type/user";



const AllUsers = () => {
  const { data, isLoading, } = useGetAllUserQuery(undefined);
  
  const [deleteUser] = useDeleteUserMutation();

  if (isLoading) return <div>Loading...</div>;
  

  const filteredUsers = data?.data?.filter((user: tUser) => user.role === "user") || [];

  const handleSoftDelete = (userId: string) => {
    console.log(userId)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => { 
      if (result.isConfirmed) {
        try {
          const res = await deleteUser(userId).unwrap();
          if (res?.success) {  
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted successfully.",
              icon: "success"
            });
          }
        } catch (error) {
          console.log(error)
          Swal.fire({
            title: "Error!",
            text: "Failed to delete user.",
            icon: "error"
          });
        }
      }
    });
  }

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableCaption>A list of all users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Update</TableHead>
            <TableHead>Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.map((user: tUser) => (
            <TableRow key={user._id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <button className="text-blue-500 hover:text-blue-700">
                  <RxUpdate />
                </button>
              </TableCell>
              <TableCell>
                <button 
                  onClick={() => handleSoftDelete(user._id)}
                  className="text-red-500 hover:text-red-700"
                  aria-label="Delete user"
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

export default AllUsers;