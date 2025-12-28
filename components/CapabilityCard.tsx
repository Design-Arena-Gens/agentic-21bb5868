type CapabilityCardProps = {
  title: string;
  description: string;
  tags: string[];
};

export function CapabilityCard({ title, description, tags }: CapabilityCardProps) {
  return (
    <article
      className="capability-card"
      style={{
        borderRadius: "18px",
        padding: "24px",
        background:
          "linear-gradient(145deg, rgba(17, 24, 39, 0.85), rgba(30, 41, 59, 0.6))",
        border: "1px solid rgba(148, 163, 184, 0.2)",
        boxShadow:
          "0 18px 45px -20px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255,255,255,0.05)"
      }}
    >
      <h3
        style={{
          fontSize: "1.35rem",
          fontWeight: 700,
          letterSpacing: "-0.01em",
          marginBottom: "0.75rem"
        }}
      >
        {title}
      </h3>
      <p
        style={{
          color: "rgba(226, 232, 240, 0.82)",
          marginBottom: "1rem",
          fontSize: "0.98rem"
        }}
      >
        {description}
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.45rem"
        }}
      >
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding: "0.35rem 0.7rem",
              borderRadius: "999px",
              background:
                "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(236, 72, 153, 0.2))",
              color: "rgba(190, 242, 100, 0.9)",
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontWeight: 600
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
