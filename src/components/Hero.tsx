import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";
import ShowreelModal from "./ShowreelModal";

const Hero: React.FC = () => {
  const [showreelOpen, setShowreelOpen] = useState(false);

  const stats = [
    { label: "Years Experience", value: "10+" },
    { label: "Commercials & Reels", value: "500+" },
    { label: "Major Client Brands", value: "6+" },
    { label: "On-Time Delivery", value: "100%" },
  ];

  return (
    <section id="hero" style={{ padding: "80px 0 60px", position: "relative" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Status Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                borderRadius: "9999px",
                background: "var(--glass-bg)",
                border: "1px solid var(--glass-border)",
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--text-secondary)",
                marginBottom: "24px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#10b981",
                  boxShadow: "0 0 12px #10b981",
                }}
              />
              <span>Available for Commercial & Brand Projects</span>
            </div>

            {/* Main Title */}
            <h1
              style={{
                fontSize: "clamp(42px, 5.5vw, 68px)",
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: "-1.5px",
                marginBottom: "20px",
              }}
            >
              Visual Storyteller & <br />
              <span className="text-gradient">Senior Video Editor.</span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "18px",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                marginBottom: "36px",
                maxWidth: "560px",
              }}
            >
              Over a decade of crafting high-impact commercial campaigns, corporate documentaries, and dynamic promotional reels for industry leaders like <strong style={{ color: "var(--text-primary)" }}>Jerai Fitness, Being Strong, and MRAI</strong>.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "48px" }}>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setShowreelOpen(true)}
                style={{
                  background: "var(--accent-gradient)",
                  color: "#ffffff",
                  padding: "16px 32px",
                  borderRadius: "9999px",
                  fontSize: "16px",
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  boxShadow: "0 10px 30px -10px var(--accent-glow)",
                }}
              >
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Play size={14} fill="#ffffff" />
                </div>
                <span>Watch Showreel</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="#work"
                style={{
                  background: "var(--glass-bg)",
                  color: "var(--text-primary)",
                  padding: "16px 32px",
                  borderRadius: "9999px",
                  fontSize: "16px",
                  fontWeight: 600,
                  border: "1px solid var(--glass-border)",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
              >
                <span>Explore Brand Work</span>
                <ArrowUpRight size={18} color="var(--accent-primary)" />
              </motion.a>
            </div>

            {/* Metrics Row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "20px",
                paddingTop: "32px",
                borderTop: "1px solid var(--glass-border)",
              }}
              className="metrics-grid"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontSize: "28px",
                      fontWeight: 800,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.5px",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: "13px", color: "var(--text-muted)", fontWeight: 500 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual / Showreel Preview Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: "relative" }}
          >
            {/* Background Glow */}
            <div
              style={{
                position: "absolute",
                inset: "-20px",
                background: "var(--accent-gradient)",
                borderRadius: "36px",
                filter: "blur(50px)",
                opacity: 0.3,
                zIndex: 0,
              }}
            />

            {/* Main Interactive Video Card */}
            <div
              onClick={() => setShowreelOpen(true)}
              className="glass-card glow-effect"
              style={{
                position: "relative",
                zIndex: 1,
                borderRadius: "28px",
                overflow: "hidden",
                cursor: "pointer",
                border: "1px solid var(--glass-border-hover)",
                aspectRatio: "16 / 10",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "32px",
                background: "linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(15, 23, 42, 0.8) 100%)",
              }}
            >
              {/* 4K Showreel Workstation Background */}
              <img
                src="/assets/projects/showreel_cover_4k.png"
                alt="Darsh Shah Showreel Workstation"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.35) 50%, rgba(8,8,12,0.92) 100%)",
                  zIndex: 1,
                }}
              />

              {/* Top Bar of Preview */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative", zIndex: 2 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span
                    style={{
                      background: "#ef4444",
                      color: "#fff",
                      fontSize: "11px",
                      fontWeight: 700,
                      padding: "4px 10px",
                      borderRadius: "6px",
                      letterSpacing: "0.5px",
                      textTransform: "uppercase",
                    }}
                  >
                    REC • 4K
                  </span>
                  <span style={{ fontSize: "13px", color: "var(--text-secondary)", fontWeight: 500 }}>
                    Showreel_2026_Final_v3.mp4
                  </span>
                </div>
                <div style={{ display: "flex", gap: "6px" }}>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f56" }} />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ffbd2e" }} />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#27c93f" }} />
                </div>
              </div>

              {/* Center Play Trigger */}
              <div style={{ textAlign: "center", margin: "auto", position: "relative", zIndex: 2 }}>
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "var(--accent-gradient)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                    boxShadow: "0 15px 35px var(--accent-glow)",
                  }}
                >
                  <Play size={36} fill="#ffffff" color="#ffffff" style={{ marginLeft: "4px" }} />
                </motion.div>
                <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#fff", marginBottom: "6px" }}>
                  Watch Commercial Reel
                </h3>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>
                  2 mins • High-Impact Brand Cuts & VFX Sync
                </p>
              </div>

              {/* Bottom Simulated Timeline Scrub */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", position: "relative", zIndex: 2 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "var(--text-secondary)", fontWeight: 600 }}>
                  <span>00:15 / 02:45</span>
                  <span>Adobe Premiere Pro • After Effects</span>
                </div>
                <div style={{ width: "100%", height: "6px", background: "rgba(255,255,255,0.15)", borderRadius: "3px", overflow: "hidden" }}>
                  <div style={{ width: "45%", height: "100%", background: "var(--accent-gradient)" }} />
                </div>
              </div>
            </div>

            {/* Floating Badge - Software Expertise */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card"
              style={{
                position: "absolute",
                bottom: "-24px",
                left: "-20px",
                padding: "16px 20px",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                gap: "14px",
                zIndex: 2,
                boxShadow: "0 15px 30px rgba(0,0,0,0.6)",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "#9999ff20",
                  border: "1px solid #9999ff50",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#9999ff",
                  fontWeight: 800,
                  fontSize: "18px",
                }}
              >
                Pr
              </div>
              <div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-primary)" }}>
                  Adobe Premiere Pro
                </div>
                <div style={{ fontSize: "12px", color: "var(--text-secondary)" }}>
                  Advanced Multicam & Color Sync
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <ShowreelModal isOpen={showreelOpen} onClose={() => setShowreelOpen(false)} />

      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .metrics-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
