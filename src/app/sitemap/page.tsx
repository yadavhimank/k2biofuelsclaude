import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { BLOG_POSTS } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Sitemap — K2 Biofuels",
  description: "A complete index of all pages on the K2 Biofuels website.",
};

const MAIN_PAGES = [
  {
    path: "/",
    label: "Home",
    desc: "K2 Biofuels — industrial biomass fuel from agro residue.",
  },
  {
    path: "/about",
    label: "About",
    desc: "Our story, team, and the K2 Group of Industries.",
  },
  {
    path: "/products",
    label: "Products",
    desc: "Biomass pellets and briquettes — specs, grades, and packaging.",
  },
  {
    path: "/infrastructure",
    label: "Infrastructure",
    desc: "252 TPD Rewari plant — mills, lab, and process flow.",
  },
  {
    path: "/sustainability",
    label: "Sustainability",
    desc: "GHG accounting, certifications, and environmental impact.",
  },
  {
    path: "/clients",
    label: "Clients",
    desc: "Industry segments, how we work, and our client philosophy.",
  },
  {
    path: "/newsroom",
    label: "Newsroom",
    desc: "Press coverage, policy updates, and official statements.",
  },
  {
    path: "/blog",
    label: "Blog",
    desc: "Technical writing from our plant floor and policy team.",
  },
  {
    path: "/careers",
    label: "Careers",
    desc: "Open roles at the Rewari plant and Gurgaon HQ.",
  },
  {
    path: "/contact",
    label: "Contact",
    desc: "Send us your boiler specs — sample dispatched in 48 hours.",
  },
  {
    path: "/faq",
    label: "FAQ",
    desc: "Common questions on fuel specs, delivery, and quality.",
  },
];

const PRODUCT_SECTIONS = [
  {
    path: "/products#pellets",
    label: "Biomass Pellets",
    desc: "8mm die, paddy / mustard / mixed blend, IS:17065 compliant.",
  },
  {
    path: "/products#briquettes",
    label: "Biomass Briquettes",
    desc: "90mm screw-press briquettes for kilns and cogen units.",
  },
  {
    path: "/products#applications",
    label: "Applications",
    desc: "Thermal plants, sugar mills, paper & pulp, brick kilns.",
  },
  {
    path: "/products#specs",
    label: "Quality & Specs",
    desc: "GCV, moisture, ash, sulphur — batch-level data sheet.",
  },
];

const LEGAL_PAGES = [
  {
    path: "/privacy",
    label: "Privacy Policy",
    desc: "What data we collect, how we use it, and your rights.",
  },
  {
    path: "/terms",
    label: "Terms of Service",
    desc: "Terms for using this website and our services.",
  },
];

function formatDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${day} ${months[month - 1]} ${year}`;
}

const sortedPosts = [...BLOG_POSTS].sort(
  (a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
);

export default function SitemapPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="k2-section-pad"
        style={{
          marginTop: "-120px",
          paddingTop: 160,
          background: "var(--k2-ink)",
          color: "var(--k2-on-ink)",
          borderBottom: "1px solid rgba(250,250,247,0.1)",
        }}
      >
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <Eyebrow accent="var(--k2-cta)" style={{ marginBottom: 22 }}>
            — Site index
          </Eyebrow>
          <h1
            className="k2-h1"
            style={{
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              fontWeight: 500,
              margin: "0 0 20px",
              maxWidth: 860,
            }}
          >
            Sitemap.
          </h1>
          <p
            className="k2-body-lg"
            style={{
              lineHeight: 1.6,
              maxWidth: 640,
              color: "rgba(250,250,247,0.72)",
              margin: 0,
            }}
          >
            Every page on k2biofuels.com, organised by section.
          </p>
        </div>
      </section>

      <div
        style={{ maxWidth: 1320, margin: "0 auto", padding: "72px 32px 96px" }}
      >
        {/* Main pages */}
        <section style={{ marginBottom: 72 }}>
          <Eyebrow style={{ marginBottom: 24 }}>— 01 / Main pages</Eyebrow>
          <div style={{ borderTop: "2px solid var(--k2-ink)" }}>
            {MAIN_PAGES.map((p) => (
              <Link
                key={p.path}
                href={p.path}
                style={{
                  display: "grid",
                  gridTemplateColumns: "200px 1fr",
                  gap: "0 32px",
                  padding: "18px 0",
                  borderBottom: "1px solid var(--k2-border)",
                  textDecoration: "none",
                  color: "inherit",
                  alignItems: "baseline",
                }}
                className="k2-sitemap-row"
              >
                <span
                  style={{
                    fontWeight: 600,
                    fontSize: 16,
                    letterSpacing: "-0.01em",
                    color: "var(--k2-ink)",
                  }}
                >
                  {p.label}
                </span>
                <span
                  style={{
                    fontSize: 14,
                    color: "var(--k2-text-2)",
                    lineHeight: 1.6,
                  }}
                >
                  {p.desc}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Products breakdown */}
        <section style={{ marginBottom: 72 }}>
          <Eyebrow style={{ marginBottom: 24 }}>— 02 / Products</Eyebrow>
          <div style={{ borderTop: "2px solid var(--k2-ink)" }}>
            {PRODUCT_SECTIONS.map((p) => (
              <Link
                key={p.path}
                href={p.path}
                style={{
                  display: "grid",
                  gridTemplateColumns: "200px 1fr",
                  gap: "0 32px",
                  padding: "18px 0",
                  borderBottom: "1px solid var(--k2-border)",
                  textDecoration: "none",
                  color: "inherit",
                  alignItems: "baseline",
                }}
                className="k2-sitemap-row"
              >
                <span
                  style={{
                    fontWeight: 600,
                    fontSize: 16,
                    letterSpacing: "-0.01em",
                    color: "var(--k2-ink)",
                  }}
                >
                  {p.label}
                </span>
                <span
                  style={{
                    fontSize: 14,
                    color: "var(--k2-text-2)",
                    lineHeight: 1.6,
                  }}
                >
                  {p.desc}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Blog posts */}
        <section style={{ marginBottom: 72 }}>
          <Eyebrow style={{ marginBottom: 24 }}>— 03 / Blog posts</Eyebrow>
          <div style={{ borderTop: "2px solid var(--k2-ink)" }}>
            {sortedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{
                  display: "grid",
                  gap: "0 32px",
                  padding: "18px 0",
                  borderBottom: "1px solid var(--k2-border)",
                  textDecoration: "none",
                  color: "inherit",
                  alignItems: "baseline",
                }}
                className="k2-sitemap-row k2-sitemap-blog-row"
              >
                <span
                  style={{
                    fontWeight: 600,
                    fontSize: 15,
                    letterSpacing: "-0.01em",
                    color: "var(--k2-ink)",
                    lineHeight: 1.4,
                  }}
                >
                  {post.title}
                  <span
                    className="k2-sitemap-blog-date-mob"
                    style={{
                      display: "block",
                      fontFamily: "var(--k2-mono)",
                      fontSize: 12,
                      fontWeight: 400,
                      color: "var(--k2-text-3)",
                      letterSpacing: 0.4,
                      marginTop: 4,
                    }}
                  >
                    {formatDate(post.publishedAt)}
                  </span>
                </span>
                <span
                  className="k2-sitemap-blog-excerpt"
                  style={{
                    fontSize: 14,
                    color: "var(--k2-text-2)",
                    lineHeight: 1.6,
                  }}
                >
                  {post.excerpt}
                </span>
                <span
                  className="k2-sitemap-blog-date-desk"
                  style={{
                    fontFamily: "var(--k2-mono)",
                    fontSize: 12,
                    color: "var(--k2-text-3)",
                    letterSpacing: 0.4,
                    textAlign: "right",
                  }}
                >
                  {formatDate(post.publishedAt)}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Legal */}
        <section>
          <Eyebrow style={{ marginBottom: 24 }}>— 04 / Legal</Eyebrow>
          <div style={{ borderTop: "2px solid var(--k2-ink)" }}>
            {LEGAL_PAGES.map((p) => (
              <Link
                key={p.path}
                href={p.path}
                style={{
                  display: "grid",
                  gridTemplateColumns: "200px 1fr",
                  gap: "0 32px",
                  padding: "18px 0",
                  borderBottom: "1px solid var(--k2-border)",
                  textDecoration: "none",
                  color: "inherit",
                  alignItems: "baseline",
                }}
                className="k2-sitemap-row"
              >
                <span
                  style={{
                    fontWeight: 600,
                    fontSize: 16,
                    letterSpacing: "-0.01em",
                    color: "var(--k2-ink)",
                  }}
                >
                  {p.label}
                </span>
                <span
                  style={{
                    fontSize: 14,
                    color: "var(--k2-text-2)",
                    lineHeight: 1.6,
                  }}
                >
                  {p.desc}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
