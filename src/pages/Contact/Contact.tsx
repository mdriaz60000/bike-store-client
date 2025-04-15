import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Textarea } from "../../components/ui/textarea";
import { AiOutlineMail } from "react-icons/ai";
import { MdAddCall } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Contact = () => {
  const form = useForm(); 

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
      <section >
        <div className="border p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <p className="flex gap-2 font-semibold items-center mb-2"><AiOutlineMail /> <span>hello@example.com</span></p>
        <p className="flex gap-2 font-semibold items-center mb-2"><MdAddCall /> <span>+1 (333) 123-425</span></p>
        <p className="flex gap-2 font-semibold items-center"><SlLocationPin /> <span>272 South Street, Mexican City, GL 20520</span> </p>
        </div>
        <br />
        <div className="border p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
         <p className="flex gap-4 font-bold text-2xl"><FaTwitter /> <FaLinkedin/> <FaGithub /></p>
        </div>
 
      </section>

      <section className="border p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Send us a message</h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              defaultValue=""
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              defaultValue=""
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your.email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              defaultValue=""
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Your message here..." rows={5} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="mt-5 w-full">
              Submit
            </Button>
          </form>
        </Form>
      </section>
    </div>
  );
};

export default Contact;
