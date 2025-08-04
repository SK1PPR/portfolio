import { Calendar, MapPin, Building2 } from "lucide-react";
import experienceData from "@/data/experience.json";
import { useState } from "react";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    year: 'numeric' 
  });
};

export const ExperienceSection = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>

        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          My professional journey through various internships and roles, 
          each contributing to my growth as a developer and designer.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20"></div>

          <div className="space-y-12">
            {experienceData.map((experience, index) => (
              <div
                key={experience.id}
                className="relative flex items-start min-h-[200px]"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 top-6 w-4 h-4 rounded-full border-4 border-background shadow-lg z-10 transition-all duration-300 ${
                  activeCard === index ? 'bg-primary scale-110' : 'bg-primary/60'
                }`}></div>

                {/* Content card */}
                <div className="flex-1 ml-16 w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl">
                  <div className={`bg-card p-6 rounded-lg shadow-xs card-hover border transition-all duration-300 transform origin-left ${
                    activeCard === index 
                      ? 'border-primary/50 shadow-lg scale-105' 
                      : 'border-border/50 scale-100'
                  }`}>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          {experience.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Building2 className="h-4 w-4" />
                            <span>{experience.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <ul className="space-y-3">
                        {experience.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <span className={`mt-1.5 transition-colors duration-300 ${
                              activeCard === index ? 'text-primary text-base' : 'text-muted-foreground/60'
                            }`}>•</span>
                            <span className={activeCard === index ? 'text-foreground/90' : 'text-muted-foreground'}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 text-xs font-medium border rounded-full transition-all duration-300 ${
                            activeCard === index 
                              ? 'bg-primary/20 text-primary border-primary/30' 
                              : 'bg-secondary/50 text-secondary-foreground border-border'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 