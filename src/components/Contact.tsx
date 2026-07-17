import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Sparkles, Film, ArrowUpRight, Share2, Globe, Video } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" style={{ padding: "100px 0 60px", position: "relative" }}>
      <div className="container">
        {/* Main CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card glow-effect"
          style={{
            padding: "64px 48px",
            borderRadius: "32px",
            background: "linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(15, 23, 42, 0.8) 100%)",
            border: "1px solid var(--glass-border-hover)",
            position: "relative",
            overflow: "hidden",
            marginBottom: "80px",
          }}
        >
          {/* Subtle Ambient Glow */}
          <div
            style={{
              position: "absolute",
              top: "-50%",
              right: "-20%",
              width: "400px",
              height: "400px",
              background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
              filter: "blur(60px)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 0.8fr",
              gap: "48px",
              alignItems: "center",
            }}
            className="contact-grid"
          >
            {/* Left Box */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "6px 16px",
                  borderRadius: "9999px",
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "20px",
                }}
              >
                <Sparkles size={14} />
                <span>LET'S BUILD SOMETHING CINEMATIC</span>
              </div>
              <h2
                style={{
                  fontSize: "clamp(36px, 4.5vw, 56px)",
                  fontWeight: 900,
                  lineHeight: 1.1,
                  letterSpacing: "-1.5px",
                  color: "#ffffff",
                  marginBottom: "20px",
                }}
              >
                Have a Commercial or <br />
                <span className="text-gradient">Brand Campaign to Edit?</span>
              </h2>
              <p
                style={{
                  fontSize: "17px",
                  color: "rgba(255, 255, 255, 0.75)",
                  lineHeight: 1.6,
                  maxWidth: "520px",
                  marginBottom: "32px",
                }}
              >
                Whether you need high-energy commercial cuts, complex corporate documentaries, or viral vertical social media reels, I bring your raw footage to life.
              </p>

              <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", alignItems: "center" }}>
                <a
                  href="mailto:darsh.editor@gmail.com"
                  style={{
                    background: "var(--accent-gradient)",
                    color: "#ffffff",
                    padding: "18px 36px",
                    borderRadius: "9999px",
                    fontSize: "16px",
                    fontWeight: 700,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    boxShadow: "0 10px 30px -10px var(--accent-glow)",
                    transition: "transform 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <Mail size={18} />
                  <span>darsh.editor@gmail.com</span>
                </a>

                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.8)", fontSize: "14px", fontWeight: 600 }}>
                  <MapPin size={16} color="var(--accent-primary)" />
                  <span>Mumbai, Maharashtra</span>
                </div>
              </div>
            </div>

            {/* Right Box / Social Cards */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {[
                { name: "LinkedIn Profile", label: "Professional Network & Experience", icon: <Share2 size={20} />, href: "https://linkedin.com" },
                { name: "Instagram / Reels", label: "Vertical Edits & Brand Teasers", icon: <Globe size={20} />, href: "https://instagram.com" },
                { name: "Vimeo Showreel", label: "4K High-Bitrate Client Portfolio", icon: <Video size={20} />, href: "https://vimeo.com" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    padding: "20px",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    textDecoration: "none",
                    color: "#ffffff",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)";
                    e.currentTarget.style.borderColor = "var(--accent-primary)";
                    e.currentTarget.style.transform = "translateX(6px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "12px",
                        background: "rgba(255, 255, 255, 0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--accent-primary)",
                      }}
                    >
                      {social.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: "16px", fontWeight: 700 }}>{social.name}</div>
                      <div style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.6)" }}>{social.label}</div>
                    </div>
                  </div>
                  <ArrowUpRight size={20} color="var(--accent-primary)" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "32px",
            borderTop: "1px solid var(--glass-border)",
            flexWrap: "wrap",
            gap: "20px",
          }}
          className="footer-bottom"
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", fontWeight: 800, fontSize: "18px" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                background: "var(--accent-gradient)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
              }}
            >
              <Film size={16} />
            </div>
            <span>DARSH SHAH</span>
          </div>

          <div style={{ fontSize: "14px", color: "var(--text-secondary)", fontWeight: 500 }}>
            © 2026 Darsh Shah • Senior Video Editor & Creative Storyteller. Crafted with passion.
          </div>

          <a
            href="#hero"
            style={{
              fontSize: "14px",
              color: "var(--text-secondary)",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Back to top ↑
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
