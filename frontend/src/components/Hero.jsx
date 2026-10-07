import { useEffect, useState } from "react";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

import "../styles/hero.css";

const words = [
  "automate it.",
  "analyze it.",
  "research it.",
  "execute it.",
  "scale it.",
];

function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setWordIndex((current) => (current + 1) % words.length);
        setIsVisible(true);
      }, 350);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">

      {/* Animated background */}

      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-grid"></div>

      <div className="hero-orbit hero-orbit-one"></div>
      <div className="hero-orbit hero-orbit-two"></div>

      {/* Floating particles */}

      <div className="hero-particle particle-one"></div>
      <div className="hero-particle particle-two"></div>
      <div className="hero-particle particle-three"></div>
      <div className="hero-particle particle-four"></div>

      <div className="hero-content">

        {/* Badge */}

        <div className="hero-badge">
          <span className="hero-status"></span>

          <Sparkles size={14} />

          AI Agents & Automation

          <span className="badge-arrow">✦</span>
        </div>

        {/* Main headline */}

        <h1>

          <span className="hero-line">
            Automate the work.
          </span>

          <span className="hero-line hero-dynamic-line">
            Let AI{" "}

            <span
              className={`hero-changing-word ${
                isVisible ? "word-visible" : "word-hidden"
              }`}
            >
              {words[wordIndex]}
            </span>
          </span>

        </h1>

        {/* Description */}

        <p className="hero-description">
          I build intelligent AI agents and automation systems that
          understand information, use tools, execute workflows, and
          help businesses eliminate repetitive work.
        </p>

        {/* Buttons */}

        <div className="hero-buttons">

          <a
            href="#contact"
            className="hero-primary"
          >
            Start a Project

            <ArrowRight size={17} />
          </a>

          <a
            href="#work"
            className="hero-secondary"
          >
            Explore My Work
          </a>

        </div>

        {/* Small trust line */}

        <div className="hero-trust">

          <div className="trust-item">
            <Zap size={14} />
            AI-powered workflows
          </div>

          <span className="trust-divider"></span>

          <div className="trust-item">
            Built for real businesses
          </div>

        </div>

      </div>

      {/* Bottom floating AI card */}

      <div className="hero-floating-card">

        <div className="floating-icon">
          <Sparkles size={16} />
        </div>

        <div>
          <span>AI Workflow</span>
          <strong>Running automatically</strong>
        </div>

        <div className="floating-status">
          <span></span>
        </div>

      </div>

    </section>
  );
}

export default Hero;