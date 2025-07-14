import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Container from "../../components/shared/Containeer/Containeer";
import { ArrowLeft, Clock, Share2 } from "lucide-react";

type Blog = {
  id: number;
  title: string;
  image: string;
  excerpt: string;
  details: string;
  author?: string;
  date?: string;
  tags?: string[];
};

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [related, setRelated] = useState<Blog[]>([]);

  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((data: Blog[]) => {
        const found = data.find((item) => item.id === Number(id));
        setBlog(found || null);

        if (found) {
          const filtered = data.filter(
            (item) =>
              item.id !== found.id &&
              item.tags?.some((tag) => found.tags?.includes(tag))
          );
          setRelated(filtered.slice(0, 3)); // show 3 related blogs max
        }
      })
      .catch((err) => console.error("Blog load failed:", err));
  }, [id]);

  if (!blog) {
    return (
      <div className="text-center py-16 text-gray-500 text-lg">Loading blog...</div>
    );
  }

  const estimateReadingTime = (text: string) => {
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  return (
    <Container className="py-10 ">
      {/* Back link */}
      <div className="mb-6">
        <Link
          to="/blogs"
          className="flex items-center gap-2 text-primary hover:underline font-medium text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blogs
        </Link>
      </div>

      {/* Image */}
      <div className="rounded-xl overflow-hidden shadow mb-6 max-h-[400px]">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover transition hover:scale-105 duration-500"
        />
      </div>

      {/* Meta info */}
      <div className="flex flex-wrap justify-between items-center text-gray-500 text-sm mb-4 gap-2">
        <span>🖋 {blog.author || "Admin"}</span>
        <span>📅 {blog.date || new Date().toLocaleDateString()}</span>
        <span className="flex items-center gap-1">
          <Clock size={14} /> {estimateReadingTime(blog.details)}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>

      {/* Excerpt */}
      <p className="text-lg text-gray-600 mb-6 italic">{blog.excerpt}</p>

      {/* Tags */}
      {blog.tags && (
        <div className="mb-6 flex flex-wrap gap-2">
          {blog.tags.map((tag, i) => (
            <span key={i} className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="prose prose-lg max-w-none text-gray-800 mb-10">
        {blog.details}
      </div>

      {/* Share */}
      <div className="mb-10 border-t pt-6">
        <p className="text-sm text-gray-600 mb-2 flex items-center gap-1 font-semibold">
          <Share2 size={16} /> Share this post:
        </p>
        <div className="flex gap-3">
          <a
            href={`https://facebook.com/sharer/sharer.php?u=${window.location.href}`}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            Facebook
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${blog.title}`}
            target="_blank"
            rel="noreferrer"
            className="text-sky-500 hover:underline text-sm"
          >
            Twitter
          </a>
        </div>
      </div>

      {/* Related Posts */}
      {related.length > 0 && (
        <div className="mt-10 border-t pt-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Related Posts</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((item) => (
              <Link
                key={item.id}
                to={`/blogs/${item.id}`}
                className="rounded-xl border hover:shadow-lg p-3 transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-36 object-cover rounded-lg mb-2"
                />
                <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.excerpt.slice(0, 70)}...</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </Container>
  );
};

export default BlogDetails;
