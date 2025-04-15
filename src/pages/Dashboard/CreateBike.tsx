import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Textarea } from "../../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";


import { useAddProductMutation } from "../../redux/features/AdminApi/ProductApi";
import { formSchema, FormValues } from "./Admin/ValidationSachma/addProductSchema";

const categories = ["Mountain", "Road", "Hybrid", "Electric"] as const;




const CreateBike = () => {

  const [productData] = useAddProductMutation()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: "",
      brand: "",
      category: "Mountain",
      price: 0,
      img: "",
      description: ""
    }
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (data : FormValues) => {
    
    try {
      console.log(data)
      const res = await productData(data).unwrap()
      console.log(res)
    } catch (error) {
      console.log(error)
    }
    
  };

  return (
    <div className="py-10">
      <div className="w-[90%] mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <section className="space-y-4">
                <FormField
                  control={form.control}
                  name="productName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Name <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input className="border-yellow-300" type="text" {...field} />
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
                      <FormLabel>Brand <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input className="border-yellow-300" type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </section>
              <section className="space-y-4">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category <span className="text-red-500">*</span></FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger className="border-yellow-300">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input className="border-yellow-300" type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </section>
            </div>
            
            <FormField
              control={form.control}
              name="img"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input className="border-yellow-300" type="url" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Textarea className="border-yellow-300" rows={5} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" className="mt-5 w-full" disabled={isSubmitting}>
              {isSubmitting ? "Adding..." : "Add product"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateBike;