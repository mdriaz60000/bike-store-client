
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form";
import { Input } from "../../ui/input";

import { z } from "zod";
import { Bike } from "lucide-react";
import { LoginSchema } from "./LoginValidationSchema";
import { useLoginMutation } from "../../../redux/features/auth/authApi";
import { useAppDispatch } from "../../../redux/hooks";
import { setUser } from "../../../redux/features/auth/authSlice";



const LoginForm = () => {

  const navigate = useNavigate();
  const [login, {data}] = useLoginMutation()
  const dispatch = useAppDispatch();
  console.log(data)
  const form = useForm({
    resolver: zodResolver(LoginSchema),
   
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    // console.log("Form Data:", data);
    const res = await login(data).unwrap()

    dispatch(setUser({user: res.data.accessUser, token: res.data.accessToken}))
    navigate("/dashboard")
    
  }; 

  return (
  <div className="   w-screen flex justify-center ">
      <div className="border-2 border-gray-300 rounded-xl flex-grow max-w-md w-full p-5">
      <div className="flex items-center space-x-4 text-primary  ">
        <Bike />
        <div>
          <h1 className="text-xl font-semibold">Login</h1>
          <p className="font-extralight text-sm text-gray-600">
            Join us today and start your journey!
          </p>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
   
          <Button disabled={isSubmitting} type="submit" className="mt-5 w-full">
            {isSubmitting ? "LogIning..." : "Login"}
          </Button>
        </form>
      </Form>
      <p className="text-sm text-gray-600 text-center my-3">
        Create have an account?
        <Link to="/register" className="text-primary">
          Register
        </Link>
      </p>
    </div>

  </div>
  );
};

export default LoginForm;
