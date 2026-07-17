import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Layers, Sliders, Film } from "lucide-react";

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShowreelModal: React.FC<ShowreelModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeTab, setActiveTab] = useState<"commercial" | "vfx" | "color">("commercial");

  const reelClips = {
    commercial: {
      title: "Jerai Fitness & Being Strong High-Energy Campaign Reel",
      description: "Fast-paced rhythmic cutting, dynamic kinetic typography, and punchy sound effects sync designed for high conversion.",
      tools: ["Premiere Pro", "After Effects", "Sound Design Sync"],
      color: "#8b5cf6",
    },
    vfx: {
      title: "Hero Earth & MRAI Motion Graphics & VFX Breakdown",
      description: "Seamless rotoscoping, 3D object tracking, custom lower thirds, and broadcast-ready motion overlays.",
      tools: ["After Effects", "Photoshop", "Cinema 4D Element"],
      color: "#3b82f6",
    },
    color: {
      title: "Unique Stays & GDB International Cinematic Color Grading",
      description: "Log footage recovery, custom LUT creation, skin tone preservation, and cinematic teal/orange contrast grading.",
      tools: ["DaVinci Resolve", "Color Wheels", "HDR Curves"],
      color: "#ec4899",
    },
  };

  const currentClip = reelClips[activeTab];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "rgba(0, 0, 0, 0.85)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
        >
          <motion.div
            initial={{ scale: 0.9, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 30, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card"
            style={{
              width: "100%",
              maxWidth: "1050px",
              background: "var(--bg-secondary)",
              border: "1px solid var(--glass-border-hover)",
              borderRadius: "28px",
              overflow: "hidden",
              boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.9)",
            }}
          >
            {/* Top Modal Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "20px 28px",
                borderBottom: "1px solid var(--glass-border)",
                background: "var(--glass-bg)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "12px",
                    background: "var(--accent-gradient)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                  }}
                >
                  <Film size={18} />
                </div>
                <div>
                  <h3 style={{ fontSize: "18px", fontWeight: 700 }}>
                    Darsh Shah • <span className="text-gradient">Interactive Showreel 2026</span>
                  </h3>
                  <p style={{ fontSize: "12px", color: "var(--text-secondary)" }}>
                    Senior Commercial & Corporate Video Editor Breakdown
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                style={{
                  background: "var(--glass-bg)",
                  border: "1px solid var(--glass-border)",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-primary)",
                  cursor: "pointer",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--glass-border)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--glass-bg)")}
              >
                <X size={20} />
              </button>
            </div>

            {/* Video Player / Interactive Screen */}
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16 / 9",
                background: "#08080c",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              {/* 4K Cinematic Background Image */}
              <img
                src="/assets/projects/showreel_cover_4k.png"
                alt="Darsh Shah Showreel Screen"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: 0.45,
                  zIndex: 0,
                }}
              />

              {/* Simulated Cinematic Video Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `radial-gradient(circle at 50% 40%, ${currentClip.color}35 0%, rgba(8,8,12,0.88) 85%)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                }}
              >
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    textAlign: "center",
                    padding: "40px",
                    maxWidth: "680px",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "6px 16px",
                      borderRadius: "9999px",
                      background: `${currentClip.color}20`,
                      border: `1px solid ${currentClip.color}50`,
                      color: "#fff",
                      fontSize: "12px",
                      fontWeight: 600,
                      marginBottom: "16px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    <Sparkles size={14} />
                    <span>{activeTab.toUpperCase()} SHOWCASE REEL</span>
                  </div>
                  <h2 style={{ fontSize: "28px", fontWeight: 800, color: "#fff", marginBottom: "12px" }}>
                    {currentClip.title}
                  </h2>
                  <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, marginBottom: "24px" }}>
                    {currentClip.description}
                  </p>

                  {/* Tool Tags */}
                  <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
                    {currentClip.tools.map((tool) => (
                      <span
                        key={tool}
                        style={{
                          background: "rgba(255,255,255,0.08)",
                          border: "1px solid rgba(255,255,255,0.15)",
                          padding: "6px 14px",
                          borderRadius: "8px",
                          fontSize: "13px",
                          color: "#fff",
                          fontWeight: 500,
                        }}
                      >
                        ⚡ {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Animated Audio Wave bars when playing */}
              {isPlaying && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "78px",
                    display: "flex",
                    gap: "4px",
                    alignItems: "flex-end",
                    height: "36px",
                    zIndex: 2,
                  }}
                >
                  {[...Array(24)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: ["8px", `${Math.floor(Math.random() * 32 + 8)}px`, "8px"],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.6 + (i % 5) * 0.1,
                      }}
                      style={{
                        width: "4px",
                        background: currentClip.color,
                        borderRadius: "2px",
                        opacity: 0.9,
                        boxShadow: `0 0 10px ${currentClip.color}`,
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Bottom Video Controls Overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "16px 24px",
                  background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  zIndex: 3,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    style={{
                      background: "var(--accent-gradient)",
                      border: "none",
                      borderRadius: "50%",
                      width: "44px",
                      height: "44px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      cursor: "pointer",
                      boxShadow: "0 4px 15px var(--accent-glow)",
                    }}
                  >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} style={{ marginLeft: "2px" }} />}
                  </button>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: 600, color: "#fff" }}>
                      {isPlaying ? "Playing Showreel..." : "Paused"}
                    </div>
                    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)" }}>
                      01:14 / 02:45 • 4K UHD 60fps
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      borderRadius: "10px",
                      padding: "8px",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>
                  <button
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      borderRadius: "10px",
                      padding: "8px",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    <Maximize2 size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Category Switch Tabs */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "12px",
                padding: "20px 28px",
                background: "var(--glass-bg)",
                borderTop: "1px solid var(--glass-border)",
              }}
            >
              {[
                { id: "commercial", label: "Commercials & Brands", icon: <Sliders size={16} /> },
                { id: "vfx", label: "Motion & VFX Compositing", icon: <Layers size={16} /> },
                { id: "color", label: "Cinematic Color Grading", icon: <Sparkles size={16} /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "14px",
                    borderRadius: "16px",
                    background: activeTab === tab.id ? "var(--accent-primary)" : "var(--glass-bg)",
                    border: `1px solid ${activeTab === tab.id ? "var(--accent-primary)" : "var(--glass-border)"}`,
                    color: activeTab === tab.id ? "#fff" : "var(--text-secondary)",
                    fontWeight: 600,
                    fontSize: "14px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    boxShadow: activeTab === tab.id ? "0 4px 15px var(--accent-glow)" : "none",
                  }}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ShowreelModal;
