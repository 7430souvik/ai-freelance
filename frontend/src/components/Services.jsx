import {
  Bot,
  BrainCircuit,
  Database,
  Network,
  ArrowUpRight,
} from "lucide-react";

import "../styles/services.css";

const services = [
  {
    number: "01",
    icon: Bot,
    title: "AI Agents",
    description:
      "Intelligent agents that can understand context, reason over information, use tools, and execute multi-step tasks.",
    features: [
      "Customer support agents",
      "Research agents",
      "Internal AI assistants",
      "Sales agents",
    ],
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "Workflow Automation",
    description:
      "Transform repetitive business processes into intelligent workflows that run automatically.",
    features: [
      "Lead qualification",
      "CRM automation",
      "Email automation",
      "Report generation",
    ],
  },
  {
    number: "03",
    icon: Database,
    title: "RAG & Knowledge Systems",
    description:
      "Connect AI models to your private documents and business knowledge so they can provide accurate, contextual answers.",
    features: [
      "Chat with documents",
      "Knowledge assistants",
      "Semantic search",
      "Internal knowledge bases",
    ],
  },
  {
    number: "04",
    icon: Network,
    title: "AI Integrations",
    description:
      "Connect your AI systems with the tools, APIs, databases, and platforms your business already uses.",
    features: [
      "REST API integration",
      "Database integration",
      "CRM integration",
      "Third-party services",
    ],
  },
];

function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">

        <div className="services-heading">
          <div>
            <span className="section-label">What I Build</span>

            <h2 className="services-title">
              AI that does more
              <br />
              than just chat.
            </h2>
          </div>

          <p className="services-intro">
            I build AI systems that can understand information, make decisions,
            interact with your existing tools, and execute real business
            workflows.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="service-card" key={service.number}>

                <div className="service-card-top">
                  <span className="service-number">
                    {service.number}
                  </span>

                  <div className="service-icon">
                    <Icon size={22} />
                  </div>
                </div>

                <h3>{service.title}</h3>

                <p className="service-description">
                  {service.description}
                </p>

                <div className="service-features">
                  {service.features.map((feature) => (
                    <div className="service-feature" key={feature}>
                      <span className="feature-dot"></span>
                      {feature}
                    </div>
                  ))}
                </div>

                <a href="#contact" className="service-link">
                  Discuss this service
                  <ArrowUpRight size={16} />
                </a>

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Services;