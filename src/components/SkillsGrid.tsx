import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Film, Sliders, Volume2, Layers, Cpu, Scissors, Wand2, Monitor } from "lucide-react";

const SkillsGrid: React.FC = () => {
  const softwareStack = [
    {
      name: "Adobe Premiere Pro",
      level: "Expert / Primary Editing DAW",
      percentage: 98,
      icon: "Pr",
      color: "#9999ff",
      desc: "High-speed timeline assembly, multicam sync, proxies, speed ramping, and dynamic linking.",
    },
    {
      name: "Adobe After Effects",
      level: "Expert / Motion & VFX",
      percentage: 95,
      icon: "Ae",
      color: "#cf9eff",
      desc: "Broadcast lower thirds, kinetic typography, rotoscoping, 3D object tracking, and VFX compositing.",
    },
    {
      name: "Adobe Photoshop",
      level: "Advanced / Visual Assets",
      percentage: 90,
      icon: "Ps",
      color: "#31a8ff",
      desc: "Custom thumbnail design, storyboarding, masking, and matte painting preparation.",
    },
    {
      name: "DaVinci Resolve / Color",
      level: "Advanced / Color Grading Suite",
      percentage: 88,
      icon: "Re",
      color: "#ff6b6b",
      desc: "LOG recovery, custom LUT design, color wheels, HDR curves, and cinematic skin tone protection.",
    },
    {
      name: "Audio Design & Mixing",
      level: "Professional / Soundscape Sync",
      percentage: 92,
      icon: "Au",
      color: "#00e676",
      desc: "Dialogue clean-up, EQ balancing, SFX layering, and precise beat matching for commercials.",
    },
  ];

  const coreAbilities = [
    {
      title: "Commercial & Brand Editing",
      description: "Crafting high-converting promotional campaigns with punchy pacing and emotional hooks.",
      icon: <Scissors className="text-gradient" size={24} />,
    },
    {
      title: "Kinetic Typography & Titles",
      description: "Designing sleek, broadcast-ready motion titles, lower thirds, and animated callouts.",
      icon: <Wand2 className="text-gradient" size={24} />,
    },
    {
      title: "Multicam & Corporate Assembly",
      description: "Seamlessly switching complex multi-camera corporate presentations and documentary interviews.",
      icon: <Monitor className="text-gradient" size={24} />,
    },
    {
      title: "Cinematic Color Grading",
      description: "Establishing distinct moods with custom color palettes tailored to brand identity.",
      icon: <Sliders className="text-gradient" size={24} />,
    },
    {
      title: "Soundscape & Beat Sync",
      description: "Enhancing visual cuts with immersive Foley, riser sound effects, and rhythmic audio transitions.",
      icon: <Volume2 className="text-gradient" size={24} />,
    },
    {
      title: "VFX & Compositing",
      description: "Integrating clean motion tracking, object removal, screen replacements, and visual effects.",
      icon: <Layers className="text-gradient" size={24} />,
    },
  ];

  return (
    <section id="skills" style={{ padding: "100px 0", position: "relative" }}>
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
            <Cpu size={14} />
            <span>CREATIVE STACK & CAPABILITIES</span>
          </div>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900, letterSpacing: "-1px", marginBottom: "16px" }}>
            My Software Suite & <br />
            <span className="text-gradient">Post-Production Mastery.</span>
          </h2>
          <p style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.6 }}>
            Combining industry-standard software proficiency with refined visual storytelling expertise to transform raw footage into captivating narratives.
          </p>
        </div>

        {/* Software Stack Meters */}
        <div style={{ marginBottom: "80px" }}>
          <h3 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "32px", display: "flex", alignItems: "center", gap: "10px" }}>
            <Film size={20} className="text-gradient" />
            <span>Primary Editing & VFX Suite</span>
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "24px",
            }}
            className="software-grid"
          >
            {softwareStack.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card glow-effect"
                style={{
                  padding: "24px",
                  borderRadius: "20px",
                  border: "1px solid var(--glass-border)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "14px",
                      background: `${item.color}18`,
                      border: `1px solid ${item.color}40`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: item.color,
                      fontWeight: 900,
                      fontSize: "20px",
                      letterSpacing: "-0.5px",
                      boxShadow: `0 8px 20px ${item.color}20`,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                      <h4 style={{ fontSize: "18px", fontWeight: 800 }}>{item.name}</h4>
                      <span style={{ fontSize: "14px", fontWeight: 700, color: item.color }}>{item.percentage}%</span>
                    </div>
                    <span style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: 600 }}>{item.level}</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div style={{ width: "100%", height: "8px", background: "rgba(255,255,255,0.08)", borderRadius: "4px", overflow: "hidden", marginBottom: "12px" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                    style={{
                      height: "100%",
                      background: `linear-gradient(90deg, ${item.color} 0%, var(--accent-secondary) 100%)`,
                      borderRadius: "4px",
                    }}
                  />
                </div>
                <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.5 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core Capabilities Grid */}
        <div>
          <h3 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "32px", display: "flex", alignItems: "center", gap: "10px" }}>
            <Sparkles size={20} className="text-gradient" />
            <span>Core Storytelling Capabilities</span>
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
            }}
            className="capabilities-grid"
          >
            {coreAbilities.map((cap, idx) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card"
                style={{
                  padding: "28px",
                  borderRadius: "20px",
                  display: "flex",
                  gap: "18px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    background: "var(--glass-bg)",
                    border: "1px solid var(--glass-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {cap.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: "17px", fontWeight: 800, marginBottom: "8px", color: "var(--text-primary)" }}>
                    {cap.title}
                  </h4>
                  <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                    {cap.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;
