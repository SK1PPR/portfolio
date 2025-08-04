import { BrainCircuit, Rocket, ServerCog } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Systems Developer & Technology Explorer
            </h3>

            <p className="text-muted-foreground">
              With a deep interest in computer systems, I specialize in building performant,
              reliable software across domains like distributed systems, developer tools,
              and backend infrastructure and modern data stacks.
            </p>

            <p className="text-muted-foreground">
              I enjoy crafting low-level tools and scalable infrastructure,
              and I'm constantly exploring new fields to expand my understanding of how
              complex systems work. From emulators and custom shells to vector databases,
              I love solving hard problems with clean, efficient code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <ServerCog className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Systems & Infrastructure</h4>
                  <p className="text-muted-foreground">
                    Designing and building low-level tools, developer infrastructure,
                    and backend systems like databases, emulators, shell environments,
                    and distributed data pipelines.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project-Based Learning</h4>
                  <p className="text-muted-foreground">
                    Tackling real-world problems through hands-on projects —
                    from building custom vector databases to implementing RISC-V
                    simulators and torrent clients. Continuously learning by building.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Exploration & Open Source</h4>
                  <p className="text-muted-foreground">
                    Passionate about exploring new domains, from compilers to AI infra.
                    Contributed to open-source projects like Inkscape (GSoC),
                    and always looking to expand into new areas of computing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
