import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Container from "../../components/shared/Containeer/Containeer";
import { ArrowLeft } from "lucide-react";

type Blog = {
  id: number;
  title: string;
  image: string;
  excerpt: string;
  details: string;
};

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((data: Blog[]) => {
        const found = data.find((item) => item.id === Number(id));
        setBlog(found || null);
      })
      .catch((err) => console.error("Failed to load blog:", err));
  }, [id]);

  if (!blog) {
    return <div className="text-center py-10 text-gray-500">Loading blog...</div>;
  }

  return (
    <Container className="py-10">
      {/* Back Button */}
      <div className="mb-6">
        <Link to="/blogs" className="flex items-center gap-2 text-primary hover:underline font-medium text-sm">
          <ArrowLeft className="w-4 h-4" />
          Back to Blogs
        </Link>
      </div>

      {/* Blog Image */}
      <div className="overflow-hidden rounded-xl shadow-lg mb-6 max-h-[500px]">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Blog Title */}
      <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
        {blog.title}
      </h1>

      {/* Blog Excerpt (optional intro) */}
      <p className="text-lg text-gray-500 mb-6 italic">{blog.excerpt}</p>

      {/* Blog Content */}
      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        {blog.details}
      </div>
    </Container>
  );
};

export default BlogDetails;
