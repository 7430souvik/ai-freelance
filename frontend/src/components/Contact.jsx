import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MessageSquare,
  Send,
} from "lucide-react";

import "../styles/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (!response.ok) {
        throw new Error(data.message || "Failed to submit inquiry");
        }

        setSubmitted(true);

        setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: "",
        });
    } catch (error) {
        console.error("Contact form error:", error);
        alert(error.message || "Something went wrong. Please try again.");
    }
    };
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* Top CTA */}

        <div className="contact-intro">

          <div className="contact-intro-content">

            <span className="section-label">
              Start a Project
            </span>

            <h2>
              Have a workflow
              <br />
              worth automating?
            </h2>

            <p>
              Tell me what you're trying to build, what you're doing
              manually today, or where your team is spending too much time.
              I'll help you figure out where AI can make a difference.
            </p>

          </div>

          <div className="contact-orb">
            <div className="contact-orb-inner">
              <MessageSquare size={34} />
            </div>
          </div>

        </div>

        {/* Contact Content */}

        <div className="contact-grid">

          {/* Left */}

          <div className="contact-info">

            <h3>
              Let's build something
              <span> useful.</span>
            </h3>

            <p>
              Whether you need an AI agent, workflow automation, RAG system,
              or a complete AI-powered application, send me the details and
              I'll get back to you.
            </p>

            <div className="contact-details">

              <a
                href="mailto:your@email.com"
                className="contact-detail"
              >
                <div className="contact-detail-icon">
                  <Mail size={18} />
                </div>

                <div>
                  <span>Email</span>
                  <strong>souvikchatterjee080@gmail.com</strong>
                </div>
              </a>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <Send size={18} />
                </div>

                <div>
                  <span>Response time</span>
                  <strong>Usually within 24 hours</strong>
                </div>
              </div>

            </div>

            <div className="contact-note">
              <CheckCircle2 size={17} />

              <span>
                No obligation. Just tell me what you're trying to build.
              </span>
            </div>

          </div>

          {/* Form */}

          <div className="contact-form-wrapper">

            {submitted ? (

              <div className="form-success">

                <div className="success-icon">
                  <CheckCircle2 size={35} />
                </div>

                <h3>
                  Thanks for reaching out.
                </h3>

                <p>
                  Your project details have been received. I'll get back
                  to you as soon as possible.
                </p>

                <button
                  onClick={() => {
                    setSubmitted(false);

                    setFormData({
                      name: "",
                      email: "",
                      company: "",
                      service: "",
                      budget: "",
                      message: "",
                    });
                  }}
                >
                  Send another inquiry
                </button>

              </div>

            ) : (

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="form-row">

                  <div className="form-group">
                    <label htmlFor="name">
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                </div>

                <div className="form-row">

                  <div className="form-group">
                    <label htmlFor="company">
                      Company
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">
                      What do you need?
                    </label>

                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Select a service
                      </option>

                      <option value="ai-agents">
                        AI Agents
                      </option>

                      <option value="workflow-automation">
                        Workflow Automation
                      </option>

                      <option value="rag">
                        RAG / Knowledge System
                      </option>

                      <option value="ai-integration">
                        AI Integration
                      </option>

                      <option value="custom">
                        Custom AI Application
                      </option>
                    </select>
                  </div>

                </div>

                <div className="form-group">

                  <label htmlFor="budget">
                    Approximate Budget
                  </label>

                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">
                      Select a range
                    </option>

                    <option value="under-500">
                      Under $500
                    </option>

                    <option value="500-1000">
                      $500 – $1,000
                    </option>

                    <option value="1000-2500">
                      $1,000 – $2,500
                    </option>

                    <option value="2500-5000">
                      $2,500 – $5,000
                    </option>

                    <option value="5000-plus">
                      $5,000+
                    </option>

                    <option value="not-sure">
                      Not sure yet
                    </option>
                  </select>

                </div>

                <div className="form-group">

                  <label htmlFor="message">
                    Tell me about your project
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="What are you trying to build? What problem are you trying to solve?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />

                </div>

                <button
                  type="submit"
                  className="contact-submit"
                >
                  Send Project Inquiry

                  <ArrowRight size={17} />
                </button>

                <p className="form-disclaimer">
                  Your information will only be used to respond to your
                  project inquiry.
                </p>

              </form>

            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;