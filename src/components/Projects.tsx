import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Film } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: "commercial" | "corporate" | "social";
  categoryLabel: string;
  client: string;
  description: string;
  tools: string[];
  gradient: string;
  image: string;
  duration: string;
  fps: string;
  metrics: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projectsData: Project[] = [
    {
      id: 1,
      title: "Jerai Fitness Commercial Campaign",
      category: "commercial",
      categoryLabel: "Commercial / Brand Campaign",
      client: "Jerai Fitness India",
      description: "High-intensity commercial campaign showcasing flagship gym equipment. Engineered rapid rhythmic cuts synced to custom bass drops and kinetic typography.",
      tools: ["Premiere Pro", "After Effects", "Color Grading", "Sound Design"],
      gradient: "linear-gradient(135deg, #1e1b4b 0%, #4c1d95 50%, #831843 100%)",
      image: "/assets/projects/jerai_fitness_promo.png",
      duration: "01:30",
      fps: "4K 60fps",
      metrics: "2.5M+ Views across Brand Channels",
    },
    {
      id: 2,
      title: "Being Strong Social & Promotional Reel",
      category: "social",
      categoryLabel: "Promotional & Social Media Reel",
      client: "Being Strong (Salman Khan Brand)",
      description: "Slick, dynamic promotional reel crafted for Instagram & YouTube shorts. Features custom transition overlays, speed ramps, and high-energy beat matching.",
      tools: ["Premiere Pro", "Dynamic Transitions", "After Effects", "Audio Sync"],
      gradient: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #065f46 100%)",
      image: "/assets/projects/being_strong_reel.png",
      duration: "00:45",
      fps: "9:16 Vertical & 16:9 4K",
      metrics: "300% Engagement Increase",
    },
    {
      id: 3,
      title: "MRAI Annual Corporate Presentation & Reel",
      category: "corporate",
      categoryLabel: "Corporate Presentation & Reel",
      client: "Material Recycling Association of India",
      description: "Sophisticated corporate presentation video featuring custom 3D infographic lower thirds, executive interview multicam cuts, and polished audio mastering.",
      tools: ["Premiere Pro", "Motion Graphics", "Title Animation", "Photoshop"],
      gradient: "linear-gradient(135deg, #18181b 0%, #312e81 50%, #4338ca 100%)",
      image: "/assets/projects/mrai_corporate_event.png",
      duration: "04:15",
      fps: "1080p Broadcast",
      metrics: "Presented to 1,500+ Global Delegates",
    },
    {
      id: 4,
      title: "Unique Stays Luxury Hospitality Showcase",
      category: "commercial",
      categoryLabel: "Hospitality & Lifestyle Showcase",
      client: "Unique Stays Resorts & Villas",
      description: "Cinematic lifestyle and hospitality showcase. Emphasized warm golden-hour color grading, smooth drone footage stabilization, and immersive environmental soundscapes.",
      tools: ["DaVinci Resolve", "Cinematic B-Roll Sync", "Premiere Pro", "Audio Design"],
      gradient: "linear-gradient(135deg, #3f6212 0%, #166534 50%, #064e3b 100%)",
      image: "/assets/projects/unique_stays_resort.png",
      duration: "02:20",
      fps: "4K UHD Cinematic",
      metrics: "45% Booking Inquiry Surge",
    },
    {
      id: 5,
      title: "GDB International Global Corporate Documentary",
      category: "corporate",
      categoryLabel: "Global Corporate Documentary",
      client: "GDB International Inc.",
      description: "In-depth documentary exploring global sustainability and recycling plants. Mastered multi-language subtitles, clean voiceover mixing, and seamless B-roll transitions.",
      tools: ["Multicam Editing", "Voiceover Clean & Sync", "Motion Infographics"],
      gradient: "linear-gradient(135deg, #311042 0%, #86198f 50%, #be185d 100%)",
      image: "/assets/projects/gdb_international_doc.png",
      duration: "08:40",
      fps: "4K Corporate Documentary",
      metrics: "Featured at International Eco-Summit",
    },
    {
      id: 6,
      title: "Hero Earth Brand Documentary & Promo",
      category: "commercial",
      categoryLabel: "Brand Documentary & Promo",
      client: "Hero Realty / Hero Earth",
      description: "Inspiring environmental and architectural brand narrative. Combined emotional cinematic storytelling with 3D tracked callout titles and rich orchestral score mixing.",
      tools: ["Cinematic Storytelling", "VFX Tracking", "Soundscape Design", "Color Grading"],
      gradient: "linear-gradient(135deg, #1e293b 0%, #0369a1 50%, #047857 100%)",
      image: "/assets/projects/hero_earth_film.png",
      duration: "03:10",
      fps: "4K HDR 24fps",
      metrics: "Flagship Real Estate Brand Film",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((item) => item.category === activeFilter);

  return (
    <section id="work" style={{ padding: "100px 0", position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 56px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "9999px",
              background: "var(--glass-bg)",
              border: "1px solid var(--glass-border)",
              fontSize: "12px",
              fontWeight: 600,
              color: "var(--accent-primary)",
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: "16px",
            }}
          >
            <Film size={14} />
            <span>FEATURED CLIENT SHOWCASE</span>
          </div>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 900,
              letterSpacing: "-1px",
              marginBottom: "16px",
            }}
          >
            Crafting Impact Across <br />
            <span className="text-gradient">Flagship Brand Projects.</span>
          </h2>
          <p style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.6 }}>
            Explore my editing portfolio spanning commercial campaigns, corporate documentaries, and social media reels for industry leaders.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
            marginBottom: "56px",
          }}
        >
          {[
            { id: "all", label: "All Projects (6)" },
            { id: "commercial", label: "Commercials & Campaigns" },
            { id: "corporate", label: "Corporate & Documentaries" },
            { id: "social", label: "Social Media Reels" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              style={{
                background: activeFilter === tab.id ? "var(--accent-gradient)" : "var(--glass-bg)",
                border: `1px solid ${activeFilter === tab.id ? "transparent" : "var(--glass-border)"}`,
                color: activeFilter === tab.id ? "#ffffff" : "var(--text-secondary)",
                padding: "12px 24px",
                borderRadius: "9999px",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: activeFilter === tab.id ? "0 4px 15px var(--accent-glow)" : "none",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
            gap: "32px",
          }}
          className="projects-grid"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                key={project.id}
                className="glass-card project-card-hover"
                onClick={() => setSelectedProject(project)}
                style={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  border: "1px solid var(--glass-border)",
                  position: "relative",
                  background: "var(--bg-secondary)",
                }}
              >
                {/* Visual Header Box with 4K Image */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "16 / 9",
                    background: project.gradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "24px",
                    overflow: "hidden",
                  }}
                >
                  {/* High-Resolution 4K Image */}
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      zIndex: 1,
                    }}
                  />

                  {/* Dark Gradient Overlay for Contrast */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.85) 100%)",
                      zIndex: 2,
                    }}
                  />

                  {/* Client Badge & Duration */}
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      left: "16px",
                      right: "16px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      zIndex: 3,
                    }}
                  >
                    <span
                      style={{
                        background: "rgba(0,0,0,0.65)",
                        backdropFilter: "blur(10px)",
                        padding: "6px 12px",
                        borderRadius: "8px",
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#fff",
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                    >
                      {project.client}
                    </span>
                    <span
                      style={{
                        background: "var(--accent-primary)",
                        padding: "4px 10px",
                        borderRadius: "6px",
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "#fff",
                        boxShadow: "0 4px 12px var(--accent-glow)",
                      }}
                    >
                      {project.duration}
                    </span>
                  </div>

                  {/* Center Play Button Overlay */}
                  <motion.div
                    whileHover={{ scale: 1.18 }}
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      background: "rgba(255, 255, 255, 0.25)",
                      backdropFilter: "blur(14px)",
                      border: "1.5px solid rgba(255, 255, 255, 0.6)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 3,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.7)",
                    }}
                  >
                    <Play size={26} fill="#ffffff" color="#ffffff" style={{ marginLeft: "3px" }} />
                  </motion.div>

                  {/* FPS & Category bottom overlay */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "12px",
                      left: "16px",
                      zIndex: 3,
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.9)",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <span style={{ color: "#10b981" }}>●</span>
                    <span>{project.fps}</span>
                  </div>
                </div>

                {/* Content Box */}
                <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--accent-primary)", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "8px" }}>
                    {project.categoryLabel}
                  </div>
                  <h3 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "12px", lineHeight: 1.3, color: "var(--text-primary)" }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "20px", flexGrow: 1 }}>
                    {project.description}
                  </p>

                  {/* Tools Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", paddingTop: "16px", borderTop: "1px solid var(--glass-border)" }}>
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        style={{
                          background: "var(--glass-bg)",
                          border: "1px solid var(--glass-border)",
                          padding: "4px 10px",
                          borderRadius: "6px",
                          fontSize: "12px",
                          color: "var(--text-primary)",
                          fontWeight: 500,
                        }}
                      >
                        ⚡ {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 110,
              background: "rgba(0,0,0,0.88)",
              backdropFilter: "blur(24px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px",
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card"
              style={{
                width: "100%",
                maxWidth: "850px",
                background: "var(--bg-secondary)",
                borderRadius: "28px",
                overflow: "hidden",
                border: "1px solid var(--glass-border-hover)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  aspectRatio: "16 / 9",
                  background: selectedProject.gradient,
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                {/* 4K Modal Banner Image */}
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: 1,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)",
                    zIndex: 2,
                  }}
                />

                <div style={{ textAlign: "center", padding: "24px", color: "#fff", position: "relative", zIndex: 3 }}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    style={{
                      width: "76px",
                      height: "76px",
                      borderRadius: "50%",
                      background: "var(--accent-gradient)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                      boxShadow: "0 15px 35px var(--accent-glow)",
                      cursor: "pointer",
                    }}
                  >
                    <Play size={34} fill="#fff" color="#fff" style={{ marginLeft: "3px" }} />
                  </motion.div>
                  <h3 style={{ fontSize: "28px", fontWeight: 800 }}>{selectedProject.title}</h3>
                  <p style={{ fontSize: "15px", opacity: 0.9 }}>{selectedProject.client} • {selectedProject.metrics}</p>
                </div>
              </div>

              <div style={{ padding: "32px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px", flexWrap: "wrap", gap: "12px" }}>
                  <div>
                    <h4 style={{ fontSize: "18px", fontWeight: 800 }}>Campaign Overview</h4>
                    <span style={{ fontSize: "13px", color: "var(--accent-primary)", fontWeight: 600 }}>{selectedProject.categoryLabel}</span>
                  </div>
                  <span style={{ background: "var(--glass-bg)", padding: "6px 14px", borderRadius: "10px", border: "1px solid var(--glass-border)", fontSize: "13px", fontWeight: 600 }}>
                    🏆 {selectedProject.metrics}
                  </span>
                </div>
                <p style={{ fontSize: "15px", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "24px" }}>
                  {selectedProject.description}
                </p>

                <h5 style={{ fontSize: "14px", fontWeight: 700, marginBottom: "12px", color: "var(--text-primary)" }}>
                  Editing Stack & Techniques Applied:
                </h5>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "32px" }}>
                  {selectedProject.tools.map((t) => (
                    <span key={t} style={{ background: "var(--glass-bg)", border: "1px solid var(--glass-border)", padding: "8px 16px", borderRadius: "8px", fontSize: "13px", fontWeight: 600 }}>
                      ⚡ {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px" }}>
                  <button
                    onClick={() => setSelectedProject(null)}
                    style={{
                      background: "var(--accent-gradient)",
                      color: "#fff",
                      border: "none",
                      padding: "12px 28px",
                      borderRadius: "9999px",
                      fontSize: "14px",
                      fontWeight: 700,
                      cursor: "pointer",
                      boxShadow: "0 4px 15px var(--accent-glow)",
                    }}
                  >
                    Close Showcase
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
