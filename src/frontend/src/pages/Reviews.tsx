import type { PageId } from "../App";

interface ReviewsProps {
  onNavigate: (page: PageId) => void;
}

const TESTIMONIALS = [
  {
    stars: "★★★★★",
    text: "My 8-year-old son had recurring tonsillitis every month for 3 years. After just 4 months with Dr. Tiwary, he has had zero infections. We are truly grateful for this miracle!",
    name: "Rekha Devi",
    loc: "Daltonganj, Jharkhand",
    initial: "R",
  },
  {
    stars: "★★★★★",
    text: "I had severe psoriasis covering 40% of my body. Conventional doctors said it was incurable. Dr. Tiwary's treatment cleared 90% of my skin in 6 months. I feel like a new person!",
    name: "Arun Kumar Singh",
    loc: "Medininagar, Jharkhand",
    initial: "A",
  },
  {
    stars: "★★★★★",
    text: "My migraines were ruining my life — 3–4 attacks every week. After 3 months of homeopathic treatment, I am now living migraine-free. Dr. Tiwary's approach is truly holistic.",
    name: "Priya Kumari",
    loc: "Palamu, Jharkhand",
    initial: "P",
  },
];

export default function Reviews({ onNavigate }: ReviewsProps) {
  return (
    <section
      style={{ padding: "80px 24px", background: "#f0faf5", marginTop: 70 }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p
          style={{
            textAlign: "center",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#25a563",
            marginBottom: 12,
          }}
        >
          Patient Stories
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
            fontWeight: 700,
            textAlign: "center",
            color: "#0f2318",
            marginBottom: 16,
          }}
        >
          What Our <span style={{ color: "#0d6b3b" }}>Patients Say</span>
        </h2>
        <div
          style={{
            width: 60,
            height: 3,
            background: "linear-gradient(90deg, #0d6b3b, #25a563)",
            borderRadius: 2,
            margin: "0 auto 16px",
          }}
        />
        <p
          style={{
            textAlign: "center",
            color: "#5c7a66",
            fontSize: "0.95rem",
            lineHeight: 1.8,
            maxWidth: 600,
            margin: "0 auto 56px",
          }}
        >
          Real recoveries. Real gratitude. Hear from those who've experienced
          the healing power of homeopathy.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
          className="testimonials-grid"
        >
          {TESTIMONIALS.map(({ stars, text, name, loc, initial }) => (
            <div
              key={name}
              data-ocid={`testimonial-${initial}`}
              style={{
                background: "white",
                borderRadius: 20,
                padding: 28,
                border: "1px solid rgba(13,107,59,0.12)",
                boxShadow: "0 2px 16px rgba(13,107,59,0.08)",
                transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
              className="test-card-hover"
            >
              <div
                style={{ color: "#c9a84c", fontSize: "1rem", marginBottom: 16 }}
              >
                {stars}
              </div>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "#2d4a38",
                  lineHeight: 1.8,
                  marginBottom: 20,
                  fontStyle: "italic",
                }}
              >
                &ldquo;{text}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #0d6b3b, #25a563)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "1rem",
                    flexShrink: 0,
                  }}
                >
                  {initial}
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "0.88rem",
                      color: "#0f2318",
                    }}
                  >
                    {name}
                  </div>
                  <div style={{ fontSize: "0.73rem", color: "#5c7a66" }}>
                    {loc}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <p style={{ color: "#5c7a66", fontSize: "0.9rem", marginBottom: 24 }}>
            Trusted by 5000+ patients across Daltonganj and Palamu district
          </p>
          <button
            type="button"
            onClick={() => onNavigate("appointment")}
            data-ocid="reviews-book-btn"
            className="btn-primary-hover"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#0d6b3b",
              color: "white",
              padding: "14px 32px",
              borderRadius: 12,
              fontWeight: 600,
              fontSize: "0.95rem",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(13,107,59,0.3)",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            📅 Start Your Healing Journey
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .testimonials-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 768px) { .testimonials-grid { grid-template-columns: 1fr !important; } }
        .test-card-hover:hover { transform: translateY(-4px) !important; box-shadow: 0 8px 32px rgba(13,107,59,0.13) !important; }
        .btn-primary-hover:hover { background: #1a8a4e !important; transform: translateY(-2px) !important; }
      `}</style>
    </section>
  );
}
