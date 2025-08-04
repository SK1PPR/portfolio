import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import skillsData from "@/data/skills.json";

const { skills, categories } = skillsData;

// Icon mapping for automatic icon detection
const iconMap = {
  // Frontend
  html5: "🌐",
  javascript: "⚡",
  react: "⚛️",
  nextdotjs: "⚡",
  tailwindcss: "🎨",
  
  // Backend
  nodedotjs: "🟢",
  express: "🚀",
  flask: "🍵",
  python: "🐍",
  
  // Systems
  rust: "🦀",
  cplusplus: "⚙️",
  c: "🔧",
  gnubash: "💻",
  verilog: "🔌",
  linux: "🐧",
  debug: "🔍",
  monitor: "📊",
  opengl: "🎮",
  vulkan: "⚡",
  
  // Data & Infrastructure
  database: "🗄️",
  mongodb: "🍃",
  mysql: "🐬",
  rocksdb: "🪨",
  snowflake: "❄️",
  apacheflink: "🌊",
  apachehadoop: "🐘",
  supabase: "🟦",
  
  // Tools
  git: "📝",
  docker: "🐳",
  figma: "🎨",
  vscode: "💻",
  
  // Automation
  automation: "🤖",
  
  // Game Development
  unity: "🎮",
  unrealengine: "🎯",
  godotengine: "🎲",
  csharp: "💎",
  script: "📜"
};

// Category color mapping
const categoryColors = {
  frontend: "from-blue-500/20 to-purple-500/20",
  backend: "from-green-500/20 to-orange-500/20",
  systems: "from-red-500/20 to-yellow-500/20",
  "data & infra": "from-indigo-500/20 to-cyan-500/20",
  automation: "from-purple-500/20 to-pink-500/20",
  tools: "from-gray-500/20 to-white/20",
  "game dev": "from-orange-500/20 to-red-500/20"
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleSkills, setVisibleSkills] = useState([]);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  // Staggered animation for skills
  useEffect(() => {
    setVisibleSkills([]);
    const timer = setTimeout(() => {
      filteredSkills.forEach((_, index) => {
        setTimeout(() => {
          setVisibleSkills(prev => [...prev, index]);
        }, index * 100);
      });
    }, 300);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full transition-all duration-300 capitalize font-medium text-sm",
                "hover:scale-105 transform",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary/70 text-foreground hover:bg-secondary/90"
              )}
            >
              {category === "data & infra" ? "Data & Infra" : category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={cn(
                "group relative overflow-hidden rounded-xl transition-all duration-500 transform",
                "bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm",
                "border border-border/30 hover:border-primary/50",
                "hover:scale-105 hover:shadow-2xl hover:shadow-primary/20",
                "cursor-pointer",
                visibleSkills.includes(index) 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              )}
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)`,
                backdropFilter: "blur(10px)"
              }}
            >
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl"></div>
              
              {/* Category-specific gradient */}
              <div className={cn(
                "absolute inset-0 rounded-xl opacity-20",
                `bg-gradient-to-br ${categoryColors[skill.category] || categoryColors.tools}`
              )}></div>

              <div className="relative p-6 text-center">
                {/* Icon */}
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {iconMap[skill.icon] || "💻"}
                </div>
                
                {/* Skill name */}
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </h3>
                
                {/* Category badge */}
                <div className="mt-3">
                  <span className={cn(
                    "px-2 py-1 text-xs font-medium rounded-full",
                    "bg-primary/20 text-primary border border-primary/30"
                  )}>
                    {skill.category}
                  </span>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/10 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
