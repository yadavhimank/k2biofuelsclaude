import { Eyebrow } from "@/components/ui/eyebrow";
import { Em } from "@/components/ui/em";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  italic?: string;
  body?: string;
  kicker?: string[];
  dense?: boolean;
  dark?: boolean;
}

export function PageHero({
  eyebrow,
  title,
  italic,
  body,
  kicker,
  dense: _dense,
  dark,
}: PageHeroProps) {
  return (
    <section
      data-screen-label={`HERO · ${eyebrow}`}
      className="k2-section-pad"
      style={{
        background: dark ? "var(--k2-ink)" : "var(--k2-canvas)",
        color: dark ? "var(--k2-on-ink)" : "var(--k2-ink)",
        borderBottom: dark ? "none" : "1px solid var(--k2-border)",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <Eyebrow
          accent={dark ? "#FFB37A" : undefined}
          style={{ marginBottom: 22 }}
        >
          {eyebrow}
        </Eyebrow>
        <h1
          className="k2-h1"
          style={{
            lineHeight: 1.04,
            letterSpacing: "-0.03em",
            fontWeight: 500,
            margin: "0 0 28px",
            maxWidth: 980,
          }}
        >
          {title}
          {italic && (
            <>
              {" "}
              <Em color={dark ? "#FFB37A" : undefined}>{italic}</Em>
            </>
          )}
        </h1>
        {body && (
          <p
            className="k2-body-lg"
            style={{
              lineHeight: 1.6,
              maxWidth: 720,
              color: dark ? "rgba(250,250,247,0.78)" : "var(--k2-text-2)",
              margin: 0,
            }}
          >
            {body}
          </p>
        )}
        {kicker && (
          <div
            className="k2-hero-kicker"
            style={{
              marginTop: 36,
              paddingTop: 24,
              borderTop: dark
                ? "1px solid rgba(250,250,247,0.15)"
                : "1px solid var(--k2-border)",
              color: dark ? "rgba(250,250,247,0.6)" : "var(--k2-text-3)",
            }}
          >
            {kicker.map((k, i) => (
              <span key={i}>● {k}</span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
