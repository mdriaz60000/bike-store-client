import { Link } from "react-router-dom";
import Container from "../../components/shared/Containeer/Containeer";
import { useEffect, useState } from "react";

type Blog = {
  id: number;
  title: string;
  image: string;
  excerpt: string;
  details: string;
};

const BlogPage = () => {

  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch("/blog.json") 
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error loading blogs:", error));
  }, []);
  return (
    <Container>

      {/* Hero Section */}
      <div className="text-center m-12">
        <h1 className="text-4xl font-bold text-primary mb-2">Our Latest Blogs</h1>
        <p className="text-gray-600 text-lg">
          Stay updated with the latest tips, reviews, and news from the motorbike world.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.slice(0, 3).map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 space-y-3">
              <h2 className="text-xl font-semibold text-gray-800">{blog.title}</h2>
              <p className="text-sm text-gray-600">{blog.excerpt}</p>
              <Link
                to={`/blog/${blog.id}`}
                className="text-primary font-medium hover:underline text-sm"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default BlogPage;
