import { Trophy, Calendar, Tag } from "lucide-react";
import achievementsData from "@/data/achievements.json";

const achievements = achievementsData;

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          <span className="text-primary">Achievements</span> & Recognition
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my notable achievements, awards, and recognitions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col border border-border/50"
            >
              <div className="p-6 flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="w-5 h-5 text-primary" />
                  <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                    {achievement.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3"> {achievement.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {achievement.description}
                </p>
              </div>
              
              <div className="p-6 pt-0">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{achievement.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag size={14} />
                    <span>{achievement.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            These achievements represent my commitment to excellence in software engineering, 
            systems programming, and innovative problem-solving.
          </p>
        </div>
      </div>
    </section>
  );
}; 