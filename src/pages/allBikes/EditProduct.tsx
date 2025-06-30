/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";

const EditProduct = ({ handleDelete }: {handleDelete : any}) => {
  return (
    <div>
      <div className="flex justify-between items-start text-primary">
        <Button className=" bg-red-700 hover:bg-red-600" onClick={handleDelete}>
          Delete
        </Button>

        <Button>Update</Button>
      </div>
    </div>
  );
};

export default EditProduct;
