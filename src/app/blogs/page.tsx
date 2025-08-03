import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';

// Define TypeScript interface for type safety
interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  image?: string; // Optional property
}

// Blog post data with TypeScript typing
const blogPosts: BlogPost[] = [
  {
    slug: "introduction",
    title: "Welcome to GlobalFanFlicks",
    description: "Learn about our agency and how we help models succeed",
    date: "May 15, 2024",
    image: "https://images.unsplash.com/photo-1585229608510-3099443a3adc?q=80&w=496&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    slug: "model-tips",
    title: "Top Tips for New Models",
    description: "Essential advice for starting your modeling career",
    date: "June 1, 2024",
    image: "https://images.unsplash.com/photo-1623601903065-0d5b4ae594d4?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export default function BlogList() {
  return (
    <>
      <Head>
        <title>Blog | GlobalFanFlicks</title>
        <meta name="description" content="Latest articles and tips for models" />
      </Head>

      <div style={{ 
        background: "radial-gradient(circle at top left, #0a0420 0%, #1a1a2e 50%, #0a0420 100%)",
        color: "#fff",
        padding: "2rem",
        minHeight: "100vh"
      }}>
        <h1 style={{
          background: "linear-gradient(90deg, #ff007a, #a100ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: "2.5rem",
          textAlign: "center",
          marginBottom: "3rem"
        }}>
          GlobalFanFlicks Blog
        </h1>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "2rem",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          {blogPosts.map(post => (
            <div
              key={post.slug}
              style={{
                background: "rgba(30,30,30,0.7)",
                borderRadius: "10px",
                padding: "1.5rem",
                border: "1px solid rgba(255,255,255,0.1)"
              }}
            >
              {/* Conditional image rendering - only shows if image exists */}
              {post.image ? (
                <Image 
                  src={post.image} 
                  alt={post.title}
                  width={300}
                  height={200}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginBottom: "1rem"
                  }}
                />
              ) : (
                <div style={{
                  width: "100%",
                  height: "200px",
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "8px",
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#666"
                }}>
                  No Image
                </div>
              )}

              <h2 style={{ color: "#fff", fontSize: "1.5rem" }}>{post.title}</h2>
              <p style={{ color: "#aaa" }}>{post.description}</p>
              
              <Link 
                href={`/blogs/${post.slug}`}
                style={{
                  color: "#ff007a",
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-block",
                  marginTop: "1rem"
                }}
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}