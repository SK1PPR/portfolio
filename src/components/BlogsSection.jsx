import { ExternalLink, ArrowRight } from "lucide-react";

export const BlogsSection = () => {
  return (
    <section id="blogs" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Technical <span className="text-primary">Blogs</span>
        </h2>

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-muted-foreground text-lg mb-8">
            I write about my technical experiences, project insights, and deep dives into 
            systems programming, game development, and software architecture.
          </p>
          
          <p className="text-muted-foreground mb-12">
            From building emulators and vector databases to game development and systems programming, 
            I share my learnings and experiences on Hashnode.
          </p>

          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://skippr.hashnode.dev/"
            rel="noopener noreferrer"
          >
            Check Out My Blogs <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}; 