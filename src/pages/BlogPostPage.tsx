import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, User, Calendar, Share2 } from "lucide-react";
import { blogPosts } from "@/data/blogData";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="pt-32 pb-20 text-center min-h-screen bg-background">
          <h1 className="text-2xl font-bold text-foreground mb-4">Post not found</h1>
          <Link to="/blog" className="text-primary hover:underline">← Back to Blog</Link>
        </div>
        <Footer />
      </>
    );
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug);
  const shareUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent(post.title);

  // Simple markdown to HTML (handles ##, ###, **, -, links, tables roughly)
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: JSX.Element[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      if (line.startsWith("### ")) {
        elements.push(<h3 key={i} className="text-xl font-bold text-foreground mt-8 mb-3">{line.replace("### ", "")}</h3>);
      } else if (line.startsWith("## ")) {
        elements.push(<h2 key={i} className="text-2xl font-bold text-foreground mt-10 mb-4">{line.replace("## ", "")}</h2>);
      } else if (line.startsWith("- **")) {
        const match = line.match(/- \*\*(.+?)\*\*\s*[—–-]\s*(.*)/);
        if (match) {
          elements.push(
            <li key={i} className="text-muted-foreground ml-4 mb-2 list-disc">
              <strong className="text-foreground">{match[1]}</strong> — {match[2]}
            </li>
          );
        } else {
          const text = line.replace(/- \*\*(.+?)\*\*/, "<strong>$1</strong>");
          elements.push(<li key={i} className="text-muted-foreground ml-4 mb-2 list-disc" dangerouslySetInnerHTML={{ __html: text.replace("- ", "") }} />);
        }
      } else if (line.startsWith("- ")) {
        elements.push(<li key={i} className="text-muted-foreground ml-4 mb-2 list-disc">{line.replace("- ", "")}</li>);
      } else if (line.match(/^\d+\.\s/)) {
        elements.push(
          <li key={i} className="text-muted-foreground ml-4 mb-2 list-decimal">
            {line.replace(/^\d+\.\s/, "").replace(/\*\*(.+?)\*\*/g, "$1")}
          </li>
        );
      } else if (line.startsWith("|") && line.includes("|")) {
        // skip table rows for simplicity
        i++;
        continue;
      } else if (line.trim() === "") {
        elements.push(<div key={i} className="h-2" />);
      } else {
        // Process inline markdown
        let html = line
          .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground">$1</strong>')
          .replace(/\*(.+?)\*/g, '<em>$1</em>')
          .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">$1</a>');
        elements.push(<p key={i} className="text-muted-foreground leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: html }} />);
      }
      i++;
    }
    return elements;
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 bg-background min-h-screen">
        <article className="container max-w-3xl">
          {/* Breadcrumb */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft size={16} /> Back to Blog
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
              <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
              <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
              <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
            </div>
          </motion.header>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="prose-content"
          >
            {renderContent(post.content)}
          </motion.div>

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-muted rounded-xl border border-border">
            <h3 className="font-bold text-foreground mb-2">About Dr. Karthika</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Dr. Karthika BDS, Root Canal Specialist (C.C), is a passionate dental professional at White Sapphire Dental Clinic in Mudaliyarpet, Pondicherry. Specializing in pain-free root canal treatments and cosmetic dentistry.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 p-6 bg-accent rounded-xl text-center">
            <h3 className="font-bold text-foreground mb-2">Ready to book your appointment?</h3>
            <p className="text-muted-foreground text-sm mb-4">📍 #21D, Rodier Mill Street, Mudaliyarpet, Pondicherry</p>
            <Button asChild variant="whatsapp" size="lg">
              <a
                href="https://wa.me/7598000829?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
              >
                📱 Book via WhatsApp
              </a>
            </Button>
          </div>

          {/* Share */}
          <div className="mt-8 flex items-center gap-3">
            <Share2 size={16} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Share:</span>
            <a href={`https://wa.me/?text=${shareText}%20${shareUrl}`} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">WhatsApp</a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">Facebook</a>
            <a href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">Twitter</a>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="font-bold text-foreground mb-4">You might also like</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {relatedPosts.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/blog/${p.slug}`}
                    className="p-4 rounded-xl bg-muted hover:bg-accent transition-colors group"
                  >
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                      {p.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">{p.readTime}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default BlogPostPage;
