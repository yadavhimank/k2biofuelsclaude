import type { Metadata } from "next";
import Link from "next/link";
import { PAGE_METADATA } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Em } from "@/components/ui/em";
import { CTAStrip } from "@/components/layout/cta-strip";

export const metadata: Metadata = PAGE_METADATA.about;

export default function AboutPage() {
  return (
    <>
      {/* Hero — full-bleed about banner */}
      <section
        data-screen-label="About · Hero"
        style={{
          position: "relative",
          height: "100vh",
          minHeight: 600,
          marginTop: "-120px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/aboutbanner.png"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.10) 70%, rgba(0,0,0,0.65) 100%)",
          }}
        />

        {/* Top — eyebrow, title, body */}
        <div
          className="k2-section-pad"
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            color: "var(--k2-on-ink)",
            paddingTop: 160,
          }}
        >
          <div style={{ maxWidth: 1320, margin: "0 auto" }}>
            <Eyebrow accent="#FFB37A" style={{ marginBottom: 22 }}>
              — A subsidiary of K2 Group of Industries
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
              <Em color="#2D7A3D">Turning problem into products.</Em>
              <br />
              <Em color="#E8651A">Powering the future with biofuels.</Em>
            </h1>
            <p
              className="k2-body-lg"
              style={{
                lineHeight: 1.6,
                maxWidth: 720,
                color: "rgba(250,250,247,0.92)",
                margin: 0,
                textShadow: "0 1px 12px rgba(0,0,0,0.8)",
              }}
            >
              Every winter, millions of tonnes of paddy straw burn across north
              India. We built a pellet plant 70 kilometres from Delhi to do
              something useful with it.
            </p>
          </div>
        </div>

        {/* Bottom — kicker strip */}
        <div
          className="k2-section-pad"
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            color: "var(--k2-on-ink)",
            paddingBottom: 48,
          }}
        >
          <div style={{ maxWidth: 1320, margin: "0 auto" }}>
            <div
              className="k2-hero-kicker"
              style={{
                paddingTop: 24,
                borderTop: "1px solid rgba(250,250,247,0.15)",
                color: "rgba(250,250,247,0.6)",
              }}
            >
              {[
                "Founded 2021",
                "Rewari · Haryana",
                "252 TPD capacity",
                "3.5 MW on-site solar",
                "K2 Group of Industries",
              ].map((k, i) => (
                <span key={i}>● {k}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fact strip */}
      <section
        style={{
          padding: "32px 32px",
          borderBottom: "1px solid var(--k2-border)",
        }}
      >
        <div
          className="k2-about-facts"
          style={{ maxWidth: 1320, margin: "0 auto", gap: 0 }}
        >
          {[
            ["Founded", "2021"],
            ["HQ", "Gurgaon, IN"],
            ["Plant", "Rewari, HR"],
            ["Capacity", "252 TPD"],
            ["Solar", "3.5 MW"],
            ["Workforce", "800+ (Group)"],
          ].map(([k, v], i) => (
            <div
              key={k}
              style={{
                padding: "20px 24px",
                borderLeft: i === 0 ? "none" : "1px solid var(--k2-border)",
              }}
            >
              <Eyebrow style={{ marginBottom: 10 }}>{k}</Eyebrow>
              <div
                style={{
                  fontFamily: "var(--k2-mono)",
                  fontSize: 22,
                  color: "var(--k2-ink)",
                  letterSpacing: -0.5,
                }}
              >
                {v}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About body */}
      <section style={{ padding: "112px 32px" }}>
        <div
          className="k2-grid-stack-mobile"
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            gridTemplateColumns: "1fr 1.5fr",
            gap: 96,
          }}
        >
          <div
            className="k2-about-body-sticky"
            style={{ position: "sticky", top: 100, alignSelf: "start" }}
          >
            <Eyebrow style={{ marginBottom: 14 }}>— 01 / About us</Eyebrow>
            <h2
              style={{
                fontSize: 38,
                margin: 0,
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                fontWeight: 500,
              }}
            >
              The company,
              <br />
              <Em>in four paragraphs.</Em>
            </h2>
          </div>
          <div
            style={{
              fontSize: 16,
              lineHeight: 1.75,
              color: "var(--k2-text-2)",
            }}
          >
            <p style={{ margin: "0 0 22px" }}>
              <strong style={{ color: "var(--k2-ink)" }}>
                K2 BioFuels Pvt. Ltd.
              </strong>{" "}
              is a forward-looking renewable energy company dedicated to the
              development and production of sustainable biofuels derived from
              biomass and organic resources. We deliver clean, renewable fuel
              solutions that meet the growing energy demands of industries while
              contributing to environmental conservation and India&apos;s
              transition toward a greener future.
            </p>
            <p style={{ margin: "0 0 22px" }}>
              At K2 BioFuels, we believe sustainability begins with our farmers.
              By purchasing agricultural residues such as rice straw, mustard
              husk, sugarcane bagasse, and other biomass, we provide farmers
              with an additional source of income while eliminating the need for
              stubble burning. Instead of allowing valuable agricultural waste to
              go unused, we transform it into high-quality biofuels, creating a
              win-win solution for farmers, industries, and the environment. This
              approach supports circular economy principles, strengthens rural
              livelihoods, reduces carbon emissions, and promotes cleaner air.
            </p>
            <p style={{ margin: "0 0 22px" }}>
              Our mission is to reduce dependence on fossil fuels by converting
              agricultural and organic waste into reliable, eco-friendly energy
              alternatives. Through advanced technology, efficient production
              processes, and stringent quality standards, we ensure consistent,
              high-performance biofuel products that enable industries to adopt
              cleaner energy without compromising efficiency or reliability.
            </p>
            <p style={{ margin: "0 0 22px" }}>
              At K2 BioFuels, sustainability is at the heart of every decision
              we make. We believe renewable energy is not just an alternative —
              it is the future. Through innovation, responsible practices, and a
              long-term vision, we are committed to driving India&apos;s clean
              energy transformation while creating lasting value for farmers,
              industries, communities, and the environment.
            </p>
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section style={{ padding: "80px 32px", background: "var(--k2-stone)" }}>
        <div
          className="k2-grid-2"
          style={{ maxWidth: 1320, margin: "0 auto", gap: 64 }}
        >
          <div>
            <Eyebrow style={{ marginBottom: 14 }}>— 02 / Mission</Eyebrow>
            <h3
              style={{
                fontSize: 26,
                margin: "0 0 16px",
                fontWeight: 500,
                letterSpacing: "-0.015em",
              }}
            >
              What we are trying to do
            </h3>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                color: "var(--k2-text-2)",
                margin: 0,
              }}
            >
              Replace one tonne of imported coal at a time, with one tonne of
              biomass that would otherwise have been burnt in the open.
              Profitably, repeatably, and at industrial scale.
            </p>
          </div>
          <div>
            <Eyebrow style={{ marginBottom: 14 }}>— 03 / Vision</Eyebrow>
            <h3
              style={{
                fontSize: 26,
                margin: "0 0 16px",
                fontWeight: 500,
                letterSpacing: "-0.015em",
              }}
            >
              Where we are heading
            </h3>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                color: "var(--k2-text-2)",
                margin: 0,
              }}
            >
              A globally trusted biofuels manufacturer supporting the transition
              to renewable energy across industries — built on real plants, real
              lab data, and a workforce that lives within commute of where the
              work happens.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section style={{ padding: "112px 32px" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div className="k2-section-header" style={{ marginBottom: 56 }}>
            <div>
              <Eyebrow style={{ marginBottom: 14 }}>— 04 / Leadership</Eyebrow>
              <h2
                style={{
                  fontSize: 44,
                  margin: 0,
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  fontWeight: 500,
                }}
              >
                Built and run by promoters,
                <br />
                <Em>not by a fund.</Em>
              </h2>
            </div>
            <div
              style={{
                fontSize: 14,
                color: "var(--k2-text-2)",
                maxWidth: 320,
                textAlign: "right",
                lineHeight: 1.6,
              }}
            >
              Operational leadership with three decades across renewable energy,
              grain processing, and rural enterprise.
            </div>
          </div>

          <div className="k2-grid-2" style={{ gap: 24 }}>
            {[
              {
                name: "Mr. Rajpal Yadav",
                role: "Co-Founder & Director",
                bio: "Drives the group strategy and operational excellence at the Rewari plant. Three decades of experience across renewable energy, agro processing and industrial operations.",
                mono: "RY",
                grad: "linear-gradient(135deg, #2D7A3D, #0A1F0E)",
                image: "/Mr.RajpalYadav.png",
              },
              {
                name: "Mrs. Archana Yadav",
                role: "Co-Founder & Director",
                bio: "Oversees finance, governance, and stakeholder relationships across the K2 Group. Long-term focus on operational discipline and sustainability.",
                mono: "AY",
                grad: "linear-gradient(135deg, #E8651A, #6B2C0A)",
                image: "/MrsArchanaYadav.png",
              },
            ].map((l) => (
              <div
                key={l.name}
                className="k2-leader-card"
                style={{
                  background: "var(--k2-surface)",
                  border: "1px solid var(--k2-border-med)",
                  padding: 36,
                  display: "flex",
                  gap: 28,
                }}
              >
                {"image" in l && l.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={l.image}
                    alt={l.name}
                    style={{
                      width: 96,
                      height: 96,
                      flex: "0 0 96px",
                      objectFit: "cover",
                      objectPosition: "top",
                      display: "block",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: 96,
                      height: 96,
                      flex: "0 0 96px",
                      background: l.grad,
                      color: "#FAFAF7",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 32,
                      fontWeight: 300,
                      letterSpacing: "0.05em",
                      fontFamily: "var(--k2-mono)",
                    }}
                  >
                    {l.mono}
                  </div>
                )}
                <div>
                  <Eyebrow style={{ marginBottom: 8 }}>{l.role}</Eyebrow>
                  <h3
                    style={{
                      fontSize: 24,
                      margin: "0 0 12px",
                      fontWeight: 500,
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {l.name}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.65,
                      color: "var(--k2-text-2)",
                      margin: 0,
                    }}
                  >
                    {l.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Director's message */}
      <section
        style={{
          padding: "96px 32px",
          background: "var(--k2-ink)",
          color: "var(--k2-on-ink)",
        }}
      >
        <div
          className="k2-grid-stack-mobile"
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            gridTemplateColumns: "1fr 1.6fr",
            gap: 80,
            alignItems: "start",
          }}
        >
          <div>
            <Eyebrow accent="var(--k2-cta)" style={{ marginBottom: 14 }}>
              — 05 / Director&apos;s message
            </Eyebrow>
            <h2
              style={{
                fontSize: 40,
                margin: 0,
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                fontWeight: 500,
              }}
            >
              On the future of energy,
              <br />
              <Em color="#FFB37A">from the boardroom.</Em>
            </h2>
          </div>
          <div
            style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: "rgba(250,250,247,0.85)",
            }}
          >
            <p style={{ margin: "0 0 22px" }}>
              At{" "}
              <strong style={{ color: "#fff" }}>K2 Biofuels Pvt. Ltd.</strong>,
              we believe the future of energy lies in sustainability,
              innovation, and responsibility. Our vision is to reduce dependence
              on fossil fuels by delivering clean and reliable biofuel solutions
              derived from biomass and organic resources.
            </p>
            <p style={{ margin: "0 0 22px" }}>
              As we move forward, our focus remains on integrating advanced
              technologies with operational excellence and affordability. We are
              committed to supporting industrial energy needs while contributing
              to environmental protection and rural economic development.
            </p>
            <p style={{ margin: "0 0 36px" }}>
              We thank our partners, customers, and stakeholders for their
              continued trust and support as we work together toward a greener
              and more sustainable future.
            </p>
            <div
              style={{
                paddingTop: 24,
                borderTop: "1px solid rgba(250,250,247,0.15)",
              }}
            >
              <div style={{ fontSize: 16, fontWeight: 500, color: "#fff" }}>
                — Mr. Rajpal Yadav &amp; Mrs. Archana Yadav
              </div>
              <div
                style={{
                  fontSize: 15,
                  color: "rgba(250,250,247,0.6)",
                  marginTop: 4,
                }}
              >
                Directors, K2 Biofuels Pvt. Ltd.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Group companies */}
      <section style={{ padding: "112px 32px" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <Eyebrow style={{ marginBottom: 14 }}>
              — 06 / K2 Group of Industries
            </Eyebrow>
            <h2
              style={{
                fontSize: 44,
                margin: 0,
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                fontWeight: 500,
                maxWidth: 800,
              }}
            >
              The wider K2 platform.
            </h2>
          </div>

          <div className="k2-grid-3" style={{ gap: 24 }}>
            {[
              {
                name: "K2 Power Renewable",
                status: "Operational",
                desc: "2 MW biomass gasifier and briquette manufacturing on the same Rewari complex.",
                cap: "Capacity · 2 MW + 60 TPD briquettes",
                live: "Live",
                bar: "var(--k2-eyebrow)",
                highlight: false,
              },
              {
                name: "K2 Biofuels",
                status: "You are here",
                desc: "Pellet manufacturing from agro residues — paddy, mustard, rice — for industrial off-take.",
                cap: "Capacity · 252 TPD pellets",
                live: "Live",
                bar: "var(--k2-cta)",
                highlight: true,
              },
              {
                name: "K2 Ethanol",
                status: "Commissioning",
                desc: "Grain-based ethanol distillery with cattle feed unit and rice mill, supplying OMCs under the EBP.",
                cap: "Capacity · 150 KLPD",
                live: "Commissioning",
                bar: "var(--k2-ink)",
                highlight: false,
              },
            ].map((c) => (
              <div
                key={c.name}
                style={{
                  background: c.highlight
                    ? "var(--k2-canvas)"
                    : "var(--k2-surface)",
                  border: c.highlight
                    ? "2px solid var(--k2-ink)"
                    : "1px solid var(--k2-border-med)",
                  padding: 32,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 6,
                    background: c.bar,
                    marginBottom: 24,
                  }}
                />
                <Eyebrow
                  accent={c.highlight ? "var(--k2-cta)" : undefined}
                  style={{ marginBottom: 12 }}
                >
                  {c.status}
                </Eyebrow>
                <h3
                  style={{
                    fontSize: 24,
                    margin: "0 0 14px",
                    fontWeight: 500,
                    letterSpacing: "-0.015em",
                  }}
                >
                  {c.name}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.65,
                    color: "var(--k2-text-2)",
                    margin: "0 0 28px",
                  }}
                >
                  {c.desc}
                </p>
                <div
                  style={{
                    fontFamily: "var(--k2-mono)",
                    fontSize: 13,
                    color: "var(--k2-text-2)",
                    lineHeight: 1.95,
                  }}
                >
                  <div>{c.cap}</div>
                  <div>
                    Status ·{" "}
                    <span
                      style={{
                        color:
                          c.live === "Live"
                            ? "var(--k2-eyebrow)"
                            : "var(--k2-cta)",
                      }}
                    >
                      {c.live}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why K2 — quick grid */}
      <section
        style={{ padding: "64px 32px 96px", background: "var(--k2-stone)" }}
      >
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <Eyebrow style={{ marginBottom: 14 }}>
              — 07 / Why K2 Biofuels
            </Eyebrow>
            <h2
              style={{
                fontSize: 34,
                margin: 0,
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
                fontWeight: 500,
              }}
            >
              What sets us apart.
            </h2>
          </div>
          <div className="k2-grid-4" style={{ gap: 16 }}>
            {[
              [
                "Sustainable focus",
                "Environmentally responsible production from agricultural waste streams.",
              ],
              [
                "Quality assurance",
                "In-house lab. Every batch tested for GCV, moisture, ash, fines.",
              ],
              [
                "Industrial scale",
                "252 TPD installed capacity. Volume-protected contracts.",
              ],
              [
                "Innovation driven",
                "Advanced processing, automated bagging, real-time QC.",
              ],
            ].map(([h, b], idx) => (
              <div
                key={h}
                style={{
                  background: "var(--k2-surface)",
                  border: "1px solid var(--k2-border-med)",
                  padding: 28,
                }}
              >
                <Eyebrow style={{ marginBottom: 10 }}>0{idx + 1}</Eyebrow>
                <h3
                  style={{ fontSize: 17, margin: "0 0 10px", fontWeight: 500 }}
                >
                  {h}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.65,
                    color: "var(--k2-text-2)",
                    margin: 0,
                  }}
                >
                  {b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog callout */}
      <section
        style={{
          padding: "48px 32px",
          borderTop: "1px solid var(--k2-border)",
        }}
      >
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <div>
            <Eyebrow style={{ marginBottom: 10 }}>
              — From the company blog
            </Eyebrow>
            <p
              style={{
                fontSize: 16,
                color: "var(--k2-text-2)",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              How we built the plant, the supply chain, and the quality systems
              behind it.
            </p>
          </div>
          <Link
            href="/blog?category=Company"
            style={{
              textDecoration: "none",
              color: "var(--k2-ink)",
              fontWeight: 500,
              fontSize: 14,
              borderBottom: "1px solid var(--k2-ink)",
              paddingBottom: 2,
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            Read our story →
          </Link>
        </div>
      </section>

      <CTAStrip
        eyebrow="— Visit the plant"
        title="Want to see"
        italic="how it actually works?"
        body="We host serious buyers on-site at our Rewari plant — straight from the receiving yard to the dispatch weighbridge."
        primary="Schedule a plant visit →"
        secondary="Download company profile"
      />
    </>
  );
}
