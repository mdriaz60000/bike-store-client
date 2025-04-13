
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Textarea } from "../../components/ui/textarea";
//
const CreateBike = () => {
 
      const form = useForm({
        // resolver: zodResolver(),
       
      });
    
      // const {
      //   formState: {},
      // } = form;
    
      const onSubmit = async () => {
        console.log("riaz")
      };
    return (
        <div className=" py-10  ">
        <div className=" w-[90%] mx-auto  ">
 
        <Form{...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
         <div className=" grid grid-cols-2 gap-5 ">
          <section>
          <FormField
              control={form.control}
              name="productName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Name</FormLabel>
                  <FormControl>
                    <Input className=" border-yellow-300" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand</FormLabel>
                  <FormControl>
                    <Input className=" border-yellow-300" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          </section>
          <section>
          <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Input className=" border-yellow-300" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input className=" border-yellow-300" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </section>
         </div>
          
          {/* //  imgurl */}
          <FormField
              control={form.control}
              name="img"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image Url</FormLabel>
                  <FormControl>
                    <Input className=" border-yellow-300" type="url" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* // text aria */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>DesCription</FormLabel>
                  <FormControl>
                    <Textarea className=" border-yellow-300"  {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
     
            <Button  type="submit" className="mt-5 w-full">
            add product
            </Button>
          </form>
        </Form>
   
      </div>
  
    </div>
    );
};

export default CreateBike;