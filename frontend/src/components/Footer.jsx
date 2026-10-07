import { ArrowUpRight,  Mail } from "lucide-react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-main">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              Souvik<span>.</span>
            </a>

            <p>
              Building AI agents, automation systems, and intelligent
              software that help businesses work smarter.
            </p>

            <a href="mailto:your@email.com" className="footer-email">
              <Mail size={16} />
              souvikchatterjee080@gmail.com
            </a>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Navigate</h4>
              <a href="#services">Services</a>
              <a href="#process">Process</a>
              <a href="#use-cases">Use Cases</a>
              <a href="#work">Work</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="footer-column">
              <h4>Services</h4>
              <a href="#services">AI Agents</a>
              <a href="#services">Workflow Automation</a>
              <a href="#services">RAG Systems</a>
              <a href="#services">AI Integrations</a>
            </div>

            <div className="footer-column">
              <h4>Connect</h4>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
                <ArrowUpRight size={14} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
                <ArrowUpRight size={14} />
              </a>

              <a href="mailto:your@email.com">
                Email
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Souvik. All rights reserved.</span>

          <span className="footer-built">
            Built with AI & curiosity.
          </span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;