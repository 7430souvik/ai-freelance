import { useEffect, useState } from "react";
import {
  ArrowRight,
  BrainCircuit,
  Check,
  Database,
  FileText,
  Loader2,
  Mail,
  MessageSquare,
  Play,
  Search,
  Sparkles,
  UserRound,
  Zap,
} from "lucide-react";

import "../styles/workflow.css";

const steps = [
  {
    number: "01",
    title: "Input",
    icon: MessageSquare,
    description:
      "A customer, employee, or system sends information to the AI.",
  },
  {
    number: "02",
    title: "Understand",
    icon: BrainCircuit,
    description:
      "The AI understands the request and retrieves the information it needs.",
  },
  {
    number: "03",
    title: "Reason",
    icon: Sparkles,
    description:
      "The agent decides what needs to happen and plans the next actions.",
  },
  {
    number: "04",
    title: "Use Tools",
    icon: Database,
    description:
      "The agent interacts with APIs, databases, documents, and external tools.",
  },
  {
    number: "05",
    title: "Take Action",
    icon: Zap,
    description:
      "The workflow completes the task and delivers the result.",
  },
];

const leadSteps = [
  {
    id: 0,
    title: "New Lead",
    description: "Website form submitted",
    icon: UserRound,
    status: "Lead received",
  },
  {
    id: 1,
    title: "AI Analysis",
    description: "Understanding requirements",
    icon: BrainCircuit,
    status: "Analyzing lead...",
  },
  {
    id: 2,
    title: "Research",
    description: "Checking company information",
    icon: Search,
    status: "Researching...",
  },
  {
    id: 3,
    title: "Lead Scoring",
    description: "Evaluating opportunity",
    icon: Sparkles,
    status: "Calculating score...",
  },
  {
    id: 4,
    title: "CRM Update",
    description: "Saving lead information",
    icon: Database,
    status: "Updating CRM...",
  },
  {
    id: 5,
    title: "Sales Notification",
    description: "Sales team notified",
    icon: Mail,
    status: "Notification sent",
  },
];

function Workflow() {
  const [activeStep, setActiveStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    if (activeStep < leadSteps.length - 1) {
      const timer = setTimeout(() => {
        setActiveStep((current) => current + 1);
      }, 1500);

      return () => clearTimeout(timer);
    }

    setIsRunning(false);
  }, [activeStep, isRunning]);

  const runWorkflow = () => {
    setActiveStep(0);
    setIsRunning(true);
  };

  const selectStep = (index) => {
    if (isRunning) return;

    setActiveStep(index);
  };

  return (
    <section id="process" className="workflow-section">
      <div className="workflow-container">

        {/* Header */}

        <div className="workflow-header">
          <span className="section-label">
            How It Works
          </span>

          <h2 className="workflow-title">
            From a simple request
            <br />
            to real-world action.
          </h2>

          <p className="workflow-description">
            AI agents become powerful when they can do more than generate
            text. I build systems that connect AI models with your data,
            tools, APIs, and business workflows.
          </p>
        </div>

        {/* Main workflow */}

        <div className="workflow-diagram">

          <div className="workflow-line"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div className="workflow-step" key={step.number}>

                <div className="workflow-node">
                  <div className="workflow-icon">
                    <Icon size={22} />
                  </div>

                  <span>{step.number}</span>
                </div>

                <div className="workflow-step-content">
                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <ArrowRight
                    className="workflow-arrow"
                    size={18}
                  />
                )}

              </div>
            );
          })}
        </div>

        {/* Dynamic Demo */}

        <div className="workflow-demo">

          <div className="demo-header">

            <div>
              <span className="demo-label">
                Interactive Demo
              </span>

              <h3>
                Automated Lead Qualification
              </h3>

              <p>
                See how an AI agent can process a new lead from start to
                finish.
              </p>
            </div>

            <button
              className="run-workflow-button"
              onClick={runWorkflow}
              disabled={isRunning}
            >
              {isRunning ? (
                <>
                  <Loader2
                    size={16}
                    className="spin"
                  />
                  Running...
                </>
              ) : (
                <>
                  <Play size={15} />
                  Run Workflow
                </>
              )}
            </button>

          </div>

          {/* Progress */}

          <div className="demo-progress">

            <div
              className="demo-progress-bar"
              style={{
                width: `${(activeStep / (leadSteps.length - 1)) * 100}%`,
              }}
            />

          </div>

          {/* Workflow Steps */}

          <div className="lead-workflow">

            {leadSteps.map((step, index) => {
              const Icon = step.icon;

              const completed = index < activeStep;
              const active = index === activeStep;

              return (
                <div
                  className={`lead-step ${
                    active ? "active" : ""
                  } ${completed ? "completed" : ""}`}
                  key={step.id}
                  onClick={() => selectStep(index)}
                >

                  <div className="lead-step-number">

                    {completed ? (
                      <Check size={16} />
                    ) : (
                      <Icon size={17} />
                    )}

                  </div>

                  <div className="lead-step-info">

                    <span className="lead-step-title">
                      {step.title}
                    </span>

                    <span className="lead-step-description">
                      {step.description}
                    </span>

                  </div>

                </div>
              );
            })}

          </div>

          {/* Result */}

          <div className="lead-result">

            <div className="result-icon">
              {activeStep === leadSteps.length - 1 ? (
                <Check size={20} />
              ) : (
                <BrainCircuit size={20} />
              )}
            </div>

            <div className="result-content">

              <span className="result-label">
                {leadSteps[activeStep].status}
              </span>

              <strong>
                {activeStep === 0 &&
                  "A new potential customer has entered the system."}

                {activeStep === 1 &&
                  "AI is analyzing the lead's requirements and intent."}

                {activeStep === 2 &&
                  "AI is gathering additional information about the prospect."}

                {activeStep === 3 &&
                  "AI has determined that this is a high-value opportunity."}

                {activeStep === 4 &&
                  "Lead information and score are being stored in the CRM."}

                {activeStep === 5 &&
                  "Sales has been notified and can follow up immediately."}
              </strong>

            </div>

          </div>

          {/* Example Lead Data */}

          <div className="lead-data">

            <div className="lead-data-header">
              <FileText size={16} />
              Lead information
            </div>

            <div className="lead-data-grid">

              <div>
                <span>Name</span>
                <strong>Sarah Johnson</strong>
              </div>

              <div>
                <span>Company</span>
                <strong>Acme Technologies</strong>
              </div>

              <div>
                <span>Requirement</span>
                <strong>AI Automation</strong>
              </div>

              <div>
                <span>Lead Score</span>
                <strong className="high-score">
                  92 / 100
                </strong>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Workflow;