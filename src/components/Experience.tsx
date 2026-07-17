import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const Experience: React.FC = () => {
  const experiences = [
    {
      role: "Senior Video Editor",
      company: "Design Accent Pvt. Ltd.",
      location: "Mumbai, Maharashtra",
      period: "04/2015 — Present",
      type: "Full-time • Senior Role",
      highlights: [
        "Produced over 500+ high-end promotional videos, advertisements, brand campaigns, and corporate presentations.",
        "Showcased expert proficiency in Adobe After Effects and Premiere Pro while collaborating directly with videographers, graphic designers, and 3D animators.",
        "Spearheaded post-production organization, structuring timeline workflows and ensuring 100% on-time delivery within strict client budgets.",
        "Mentored junior editors and standardized visual storytelling guidelines across multidisciplinary creative teams.",
      ],
      featuredBrands: ["Commercial Advertising", "Corporate Presentations", "Motion Graphics Suite"],
    },
    {
      role: "Lead Commercial Editor & Brand Collaborator",
      company: "Jerai Fitness • Being Strong • MRAI",
      location: "Mumbai / National",
      period: "2018 — Present",
      type: "Flagship Brand Projects",
      highlights: [
        "Engineered Jerai Fitness commercial campaigns featuring high-intensity beat sync, color grading, and dynamic kinetic typography.",
        "Crafted engaging promotional and social media vertical/horizontal reels for Being Strong with viral retention rates.",
        "Produced MRAI annual corporate presentations and documentaries showcased to 1,500+ global industry delegates.",
      ],
      featuredBrands: ["Jerai Fitness", "Being Strong", "MRAI"],
    },
    {
      role: "Corporate Documentary & Hospitality Editor",
      company: "Unique Stays • GDB International • Hero Earth",
      location: "Global / Remote",
      period: "2020 — Present",
      type: "Specialized Projects",
      highlights: [
        "Mastered cinematic B-roll sync and warm golden-hour color grading for Unique Stays luxury hospitality resort showcases.",
        "Directed post-production assembly for GDB International global sustainability documentaries with multi-language voiceover synchronization.",
        "Edited Hero Earth flagship real estate brand films combining emotional storytelling with VFX tracking and orchestral soundscapes.",
      ],
      featuredBrands: ["Unique Stays", "GDB International", "Hero Earth"],
    },
  ];

  return (
    <section id="experience" style={{ padding: "100px 0", position: "relative" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 64px" }}>
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
            <Briefcase size={14} />
            <span>CAREER JOURNEY & LEADERSHIP</span>
          </div>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900, letterSpacing: "-1px", marginBottom: "16px" }}>
            My Professional Timeline & <br />
            <span className="text-gradient">Industry Experience.</span>
          </h2>
          <p style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.6 }}>
            Over a decade of dedicated post-production excellence, leading projects at Design Accent Pvt. Ltd. and collaborating with premier national and international brands.
          </p>
        </div>

        {/* Timeline Container */}
        <div style={{ position: "relative", maxWidth: "900px", margin: "0 auto" }}>
          {/* Vertical Connecting Line */}
          <div
            style={{
              position: "absolute",
              left: "24px",
              top: "24px",
              bottom: "24px",
              width: "2px",
              background: "linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary), transparent)",
              zIndex: 0,
            }}
            className="timeline-line"
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                style={{
                  display: "flex",
                  gap: "32px",
                  position: "relative",
                  zIndex: 1,
                }}
                className="timeline-item"
              >
                {/* Timeline Icon Node */}
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: idx === 0 ? "var(--accent-gradient)" : "var(--glass-bg)",
                    border: `2px solid ${idx === 0 ? "#fff" : "var(--glass-border-hover)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: idx === 0 ? "#fff" : "var(--accent-primary)",
                    flexShrink: 0,
                    boxShadow: idx === 0 ? "0 0 20px var(--accent-glow)" : "none",
                  }}
                >
                  <Briefcase size={22} />
                </div>

                {/* Experience Card */}
                <div
                  className="glass-card"
                  style={{
                    padding: "32px",
                    borderRadius: "24px",
                    flexGrow: 1,
                    border: idx === 0 ? "1px solid var(--glass-border-hover)" : "1px solid var(--glass-border)",
                  }}
                >
                  {/* Top Meta Row */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
                    <div>
                      <span
                        style={{
                          background: `${idx === 0 ? "rgba(139, 92, 246, 0.2)" : "var(--glass-bg)"}`,
                          color: idx === 0 ? "var(--accent-primary)" : "var(--text-secondary)",
                          fontSize: "12px",
                          fontWeight: 700,
                          padding: "4px 12px",
                          borderRadius: "6px",
                          display: "inline-block",
                          marginBottom: "8px",
                          textTransform: "uppercase",
                        }}
                      >
                        {exp.type}
                      </span>
                      <h3 style={{ fontSize: "24px", fontWeight: 800, color: "var(--text-primary)" }}>
                        {exp.role}
                      </h3>
                      <h4 style={{ fontSize: "16px", fontWeight: 600, color: "var(--accent-secondary)", marginTop: "4px" }}>
                        {exp.company}
                      </h4>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" }} className="meta-right">
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: 700, color: "var(--text-primary)" }}>
                        <Calendar size={15} className="text-gradient" />
                        <span>{exp.period}</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "var(--text-muted)" }}>
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px", margin: "24px 0" }}>
                    {exp.highlights.map((point) => (
                      <div key={point} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                        <CheckCircle2 size={18} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <span style={{ fontSize: "15px", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Featured Brands / Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", paddingTop: "20px", borderTop: "1px solid var(--glass-border)" }}>
                    <span style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: 600, marginRight: "4px", display: "flex", alignItems: "center" }}>
                      Featured:
                    </span>
                    {exp.featuredBrands.map((brand) => (
                      <span
                        key={brand}
                        style={{
                          background: "var(--glass-bg)",
                          border: "1px solid var(--glass-border)",
                          padding: "4px 12px",
                          borderRadius: "8px",
                          fontSize: "12px",
                          fontWeight: 600,
                          color: "var(--text-primary)",
                        }}
                      >
                        ⚡ {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .timeline-line {
            display: none;
          }
          .timeline-item {
            flex-direction: column !important;
            gap: 16px !important;
          }
          .meta-right {
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
