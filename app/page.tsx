import { CapabilityCard } from "@/components/CapabilityCard";

const capabilities = [
  {
    title: "Rapid Web Experiences",
    description:
      "Design and ship polished Next.js applications, marketing sites, and internal tools ready for Vercel in one shot.",
    tags: ["Next.js", "UI/UX", "Deploy"]
  },
  {
    title: "Autonomous Problem Solving",
    description:
      "Understand your intent—even if it is casual or ambiguous—and translate it into actionable product decisions.",
    tags: ["Planning", "Reasoning", "Product"]
  },
  {
    title: "Automations & Integrations",
    description:
      "Connect APIs, wire up Supabase, and automate workflows so ideas move from concept to production instantly.",
    tags: ["API", "Supabase", "Automation"]
  },
  {
    title: "Conversational Intelligence",
    description:
      "Chat fluently in Hinglish or English, keeping context tight and responses on-point for your goals.",
    tags: ["Hindi + English", "Context", "Personalized"]
  }
];

const workflow = [
  {
    title: "Samjho (Understand)",
    detail:
      "Parse your casual prompt—“agent tum kon ho?”—and map it to concrete deliverables without you babysitting."
  },
  {
    title: "Socho (Strategize)",
    detail:
      "Break down the goal, choose the right stack, and plan the cleanest implementation path automatically."
  },
  {
    title: "Banao (Build)",
    detail:
      "Write production-grade code, wire styling, craft copy, and assemble UI states like a seasoned teammate."
  },
  {
    title: "Launch (Deploy)",
    detail:
      "Run local checks, push to Vercel, and hand over a live URL so you can share it instantly."
  }
];

export default function HomePage() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4rem",
        padding: "6rem 5vw 8rem"
      }}
    >
      <section
        style={{
          display: "grid",
          gap: "2.5rem",
          alignItems: "center",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))"
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.4rem 0.75rem",
              borderRadius: "999px",
              border: "1px solid rgba(96, 165, 250, 0.35)",
              background: "rgba(15, 23, 42, 0.55)",
              fontSize: "0.78rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(129, 140, 248, 0.9)"
            }}
          >
            autonomous • bilingual • shipping
          </div>
          <h1
            style={{
              marginTop: "1.75rem",
              fontSize: "clamp(2.75rem, 4vw, 4rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#F5F3FF"
            }}
          >
            Agent Codex kaun hai?
            <br />
            <span style={{ color: "rgba(96, 165, 250, 0.9)" }}>
              Aapka autonomous web copilot.
            </span>
          </h1>
          <p
            style={{
              marginTop: "1.25rem",
              fontSize: "1.1rem",
              maxWidth: "36rem",
              color: "rgba(203, 213, 225, 0.88)"
            }}
          >
            Main ek hands-on coding agent hoon jo aapki halki si soch ko full
            launch-ready product mein convert karta hoon—without stopping to ask
            permission. Hinglish prompts se lekar complex product specs tak,
            sab kuch handle karta hoon.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              marginTop: "2rem"
            }}
          >
            <a
              href="mailto:hello@agentcodex.dev?subject=Ship%20something%20with%20Agent%20Codex"
              style={{
                padding: "0.85rem 1.8rem",
                borderRadius: "999px",
                background:
                  "linear-gradient(135deg, rgba(59,130,246,0.95), rgba(236,72,153,0.85))",
                fontWeight: 600,
                color: "#0B1120",
                boxShadow:
                  "0 18px 35px -18px rgba(59,130,246,0.7), 0 10px 25px -20px rgba(236,72,153,0.8)",
                transition: "transform 0.2s ease"
              }}
            >
              Start a project
            </a>
            <a
              href="#capabilities"
              style={{
                padding: "0.85rem 1.8rem",
                borderRadius: "999px",
                border: "1px solid rgba(148, 163, 184, 0.35)",
                color: "rgba(148, 163, 184, 0.9)",
                fontWeight: 600
              }}
            >
              See capabilities
            </a>
          </div>
        </div>
        <div
          style={{
            position: "relative",
            padding: "2.5rem",
            borderRadius: "28px",
            background:
              "linear-gradient(160deg, rgba(2, 6, 23, 0.8), rgba(15, 23, 42, 0.55))",
            border: "1px solid rgba(148, 163, 184, 0.2)",
            boxShadow:
              "0 30px 60px -35px rgba(59, 130, 246, 0.55), inset 0 1px 0 rgba(255,255,255,0.06)",
            overflow: "hidden"
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "-30% -10% auto auto",
              width: "220px",
              height: "220px",
              background:
                "radial-gradient(circle, rgba(56, 189, 248, 0.4), transparent 70%)",
              filter: "blur(10px)"
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: "auto auto -35% -15%",
              width: "310px",
              height: "310px",
              background:
                "radial-gradient(circle, rgba(251, 191, 36, 0.35), transparent 70%)",
              filter: "blur(12px)"
            }}
          />
          <div
            style={{
              position: "relative",
              display: "grid",
              gap: "1.5rem"
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <span
                style={{
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  fontSize: "0.72rem",
                  color: "rgba(148, 163, 184, 0.6)"
                }}
              >
                profile
              </span>
              <span
                style={{
                  padding: "0.35rem 0.75rem",
                  borderRadius: "999px",
                  background: "rgba(96, 165, 250, 0.25)",
                  color: "#E0F2FE",
                  fontSize: "0.75rem",
                  fontWeight: 600
                }}
              >
                always-on
              </span>
            </div>
            <div
              style={{
                display: "grid",
                gap: "1.05rem"
              }}
            >
              <InfoRow label="Mode" value="Autonomous coding agent" />
              <InfoRow label="Persona" value="Friendly, incisive, bilingual" />
              <InfoRow label="Stack" value="Next.js • TypeScript • Supabase • Vercel" />
              <InfoRow label="Turnaround" value="Minutes, not days" />
            </div>
            <blockquote
              style={{
                margin: 0,
                fontSize: "0.95rem",
                color: "rgba(226, 232, 240, 0.78)",
                borderLeft: "3px solid rgba(96, 165, 250, 0.45)",
                paddingLeft: "1rem",
                fontStyle: "italic"
              }}
            >
              “Aap bas idea bolo, baaki build, polish, deploy mera kaam hai.”
            </blockquote>
          </div>
        </div>
      </section>

      <section id="capabilities" style={{ display: "grid", gap: "1.5rem" }}>
        <header>
          <h2
            style={{
              fontSize: "2.15rem",
              fontWeight: 700,
              letterSpacing: "-0.01em",
              color: "#F8FAFC"
            }}
          >
            Main aapke liye kya kar sakta hoon?
          </h2>
          <p
            style={{
              marginTop: "0.75rem",
              maxWidth: "42rem",
              color: "rgba(203, 213, 225, 0.82)",
              fontSize: "1.02rem"
            }}
          >
            Product strategy se lekar deployment tak, har step automated craftsmanship se
            hota hai. You get a partner that thinks like a PM, codes like a senior
            engineer, aur ship karta hai jaise DevOps pro.
          </p>
        </header>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem"
          }}
        >
          {capabilities.map((capability) => (
            <CapabilityCard key={capability.title} {...capability} />
          ))}
        </div>
      </section>

      <section
        style={{
          display: "grid",
          gap: "2rem",
          padding: "2.5rem",
          borderRadius: "24px",
          background:
            "linear-gradient(155deg, rgba(15, 23, 42, 0.78), rgba(30, 41, 59, 0.55))",
          border: "1px solid rgba(100, 116, 139, 0.2)"
        }}
      >
        <header>
          <h2
            style={{
              fontSize: "1.95rem",
              fontWeight: 700,
              letterSpacing: "-0.01em",
              color: "#E2E8F0"
            }}
          >
            Ek hi baat bolo. Main end-to-end handle karta hoon.
          </h2>
        </header>
        <div
          style={{
            display: "grid",
            gap: "1.5rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))"
          }}
        >
          {workflow.map((step) => (
            <div
              key={step.title}
              style={{
                padding: "1.4rem",
                borderRadius: "18px",
                background: "rgba(15, 23, 42, 0.55)",
                border: "1px solid rgba(148, 163, 184, 0.2)",
                display: "grid",
                gap: "0.75rem"
              }}
            >
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#BFDBFE",
                  letterSpacing: "0.015em"
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  color: "rgba(226, 232, 240, 0.78)",
                  fontSize: "0.95rem"
                }}
              >
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          padding: "3rem",
          borderRadius: "26px",
          background:
            "linear-gradient(120deg, rgba(59, 130, 246, 0.2), rgba(236, 72, 153, 0.2))",
          border: "1px solid rgba(147, 197, 253, 0.25)",
          textAlign: "center",
          display: "grid",
          gap: "1.25rem"
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            color: "#0F172A",
            letterSpacing: "-0.01em"
          }}
        >
          Banaayein kuch tez aur solid?
        </h2>
        <p
          style={{
            color: "rgba(15, 23, 42, 0.8)",
            fontSize: "1.05rem",
            maxWidth: "40rem",
            margin: "0 auto"
          }}
        >
          Drop a single line. Phir aap relax karo, aur main app-ready solution deliver
          karta hoon—documentation ke saath, deployment ke saath.
        </p>
        <a
          href="mailto:hello@agentcodex.dev?subject=Build%20with%20Agent%20Codex"
          style={{
            justifySelf: "center",
            padding: "0.9rem 2.25rem",
            borderRadius: "999px",
            background: "#0F172A",
            color: "#E2E8F0",
            fontWeight: 700,
            letterSpacing: "0.02em",
            boxShadow: "0 15px 35px -20px rgba(15, 23, 42, 0.65)"
          }}
        >
          Tell me your idea
        </a>
      </section>
    </main>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1.5rem"
      }}
    >
      <span
        style={{
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          fontSize: "0.7rem",
          color: "rgba(148, 163, 184, 0.55)"
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontSize: "0.95rem",
          color: "rgba(226, 232, 240, 0.88)",
          textAlign: "right"
        }}
      >
        {value}
      </span>
    </div>
  );
}
