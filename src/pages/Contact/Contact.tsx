import React from "react";
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
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { useSendMessageMutation } from "@/redux/features/message/message";


// Define form data type
type FormData = {
  name: string;
  email: string;
  message: string;
};

// Props for ContactItem component
interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

// Props for SocialIcon component
interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
  color: string;
}

// Props for Card component
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Contact = () => {
  const form = useForm<FormData>();
  const [sendMessage, { isLoading, isSuccess, isError }] = useSendMessageMutation();

  const onSubmit = async (data: FormData) => {
    try {
      await sendMessage({
        UserName: data.name,
        email: data.email,
        message: data.message,
      }).unwrap();
      form.reset();
      alert(" Message sent successfully!");
    } catch (error) {
      console.error(" Failed to send message:", error);
      alert(" Failed to send message.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">Get In Touch</h1>
        <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">
          Have questions or feedback? We'd love to hear from you
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information Section */}
        <div className="space-y-6">
          <Card className="p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h2>
            <div className="space-y-4">
              <ContactItem
                icon={<AiOutlineMail className="h-6 w-6 text-primary" />}
                title="Email"
                content="hello@example.com"
              />
              <ContactItem
                icon={<MdAddCall className="h-6 w-6 text-primary" />}
                title="Phone"
                content="+1 (333) 123-425"
              />
              <ContactItem
                icon={<SlLocationPin className="h-6 w-6 text-primary" />}
                title="Address"
                content="272 South Street, Mexican City, GL 20520"
              />
            </div>
          </Card>

          <Card className="p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Follow Us</h2>
            <div className="flex gap-6">
              <SocialIcon
                icon={<FaTwitter className="h-6 w-6" />}
                href="#"
                color="text-blue-400 hover:text-blue-500"
              />
              <SocialIcon
                icon={<FaLinkedin className="h-6 w-6" />}
                href="#"
                color="text-blue-600 hover:text-blue-700"
              />
              <SocialIcon
                icon={<FaGithub className="h-6 w-6" />}
                href="#"
                color="text-gray-700 hover:text-gray-900"
              />
            </div>
          </Card>
        </div>

        {/* Contact Form Section */}
        <Card className="p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a message</h2>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your name"
                        {...field}
                        className="py-6 px-4 border-gray-300 focus-visible:ring-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        {...field}
                        className="py-6 px-4 border-gray-300 focus-visible:ring-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Your message here..."
                        rows={6}
                        {...field}
                        className="px-4 border-gray-300 focus-visible:ring-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full py-6 text-lg bg-primary hover:bg-primary-dark transition-colors"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </Button>

              {/* Feedback messages */}
              {isSuccess && <p className="text-green-600 text-sm">Message sent successfully!</p>}
              {isError && <p className="text-red-600 text-sm">Failed to send message.</p>}
            </form>
          </Form>
        </Card>
      </div>
    </div>
  );
};

// Reusable Contact Item Component
const ContactItem: React.FC<ContactItemProps> = ({ icon, title, content }) => (
  <div className="flex items-start gap-4">
    <div className="mt-1">{icon}</div>
    <div>
      <h3 className="font-semibold text-gray-700">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

// Reusable Social Icon Component
const SocialIcon: React.FC<SocialIconProps> = ({ icon, href, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`${color} transition-colors p-3 rounded-full bg-gray-50 hover:bg-gray-100`}
  >
    {icon}
  </a>
);

// Card component
const Card: React.FC<CardProps> = ({ children, className, ...props }) => (
  <div className={`rounded-xl border border-gray-200 ${className}`} {...props}>
    {children}
  </div>
);

export default Contact;
