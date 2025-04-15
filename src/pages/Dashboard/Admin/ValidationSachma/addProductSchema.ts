import { z } from "zod";



export  const formSchema = z.object({
  productName: z.string(),
  brand: z.string().min(2, "Brand must be at least 2 characters"),
  category: z.enum( ["Mountain", "Road", "Hybrid", "Electric"]), 
  price: z.coerce.number(),
  img: z.string().url("Please enter a valid URL"),
  description: z.string().min(10, "Description must be at least 10 characters")
});

export type FormValues = z.infer<typeof formSchema>;