import { useEffect, useState } from "react";
import type { PageId } from "../App";

interface ServicesProps {
  onNavigate: (page: PageId) => void;
}

const SERVICES = [
  {
    key: "skin",
    icon: "🧴",
    title: "Skin Disorders",
    desc: "Effective homeopathic management of eczema, psoriasis, acne, urticaria, ringworm, vitiligo and other dermatological conditions without steroids or side effects.",
    points: [
      "Eczema & Atopic Dermatitis",
      "Psoriasis (all stages)",
      "Acne Vulgaris & Rosacea",
      "Urticaria & Hives",
      "Ringworm & Fungal Infections",
      "Vitiligo (White Patches)",
      "Seborrheic Dermatitis",
      "Lichen Planus",
    ],
  },
  {
    key: "hair",
    icon: "💇",
    title: "Hair Problems",
    desc: "Natural remedies for hair fall, alopecia, dandruff, premature greying and scalp disorders. Constitutional treatment that stimulates hair growth from within.",
    points: [
      "Severe Hair Fall (Alopecia)",
      "Alopecia Areata (Patchy Hair Loss)",
      "Premature Baldness (Male & Female)",
      "Dandruff & Scalp Itching",
      "Premature Greying of Hair",
      "Dry, Brittle & Damaged Hair",
      "Scalp Psoriasis",
      "Post-Pregnancy Hair Loss",
    ],
  },
  {
    key: "allergy",
    icon: "🤧",
    title: "Allergy & Asthma",
    desc: "Long-term relief from allergic rhinitis, seasonal allergies, food allergies, asthma and respiratory hypersensitivity through immune system correction.",
    points: [
      "Allergic Rhinitis (Hay Fever)",
      "Dust & Pollen Allergies",
      "Food Allergies & Intolerances",
      "Skin Allergies & Contact Dermatitis",
      "Bronchial Asthma",
      "Seasonal Allergic Reactions",
      "Eye Allergies (Allergic Conjunctivitis)",
      "Insect Sting Allergies",
    ],
  },
  {
    key: "migraine",
    icon: "🧠",
    title: "Migraine & Headache",
    desc: "Targeted homeopathic constitutional treatment to reduce frequency, severity and recurrence of migraines without dependency on painkillers.",
    points: [
      "Chronic Migraine (Frequent Attacks)",
      "Cluster Headaches",
      "Tension Headaches",
      "Migraine with Aura",
      "Hormonal Migraines (in Women)",
      "Stress-Triggered Headaches",
      "Sinus Headaches",
      "Post-Traumatic Headaches",
    ],
  },
  {
    key: "child",
    icon: "👶",
    title: "Child Care",
    desc: "Safe, gentle and effective treatment for children's recurring infections, behavioural issues, growth concerns, bed-wetting and developmental challenges.",
    points: [
      "Recurrent Colds, Cough & Tonsillitis",
      "Bed-Wetting (Nocturnal Enuresis)",
      "Behavioural & Attention Issues (ADHD)",
      "Delayed Growth & Development",
      "Childhood Asthma & Allergies",
      "Ear Infections (Otitis Media)",
      "Digestive Issues & Food Aversion",
      "Childhood Eczema & Skin Problems",
    ],
  },
  {
    key: "chronic",
    icon: "🩺",
    title: "Chronic Diseases",
    desc: "Holistic management of diabetes, hypertension, thyroid disorders, arthritis, irritable bowel syndrome and other long-standing health conditions.",
    points: [
      "Diabetes Mellitus (Type 2)",
      "Hypertension (High Blood Pressure)",
      "Hypothyroidism & Hyperthyroidism",
      "Rheumatoid Arthritis & Joint Pain",
      "Irritable Bowel Syndrome (IBS)",
      "Gastric Ulcer & Acidity",
      "Kidney Stones (Prevention & Management)",
      "Fatty Liver & Digestive Disorders",
    ],
  },
];

export default function Services({ onNavigate }: ServicesProps) {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const activeService = SERVICES.find((s) => s.key === activeModal);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) e.target.classList.add("visible");
        }
      },
      { threshold: 0.1 },
    );
    const els = document.querySelectorAll(".fade-up-scroll");
    for (const el of els) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeModal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModal]);

  return (
    <div>
      <section
        style={{ padding: "80px 24px", background: "white", marginTop: 70 }}
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
            What We Treat
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
            Our <span style={{ color: "#0d6b3b" }}>Specialised Services</span>
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
            We provide holistic homeopathic treatment for a wide range of
            conditions — addressing the root cause, not just the symptoms.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
            className="services-grid"
          >
            {SERVICES.map(({ key, icon, title, desc }, i) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveModal(key)}
                className="fade-up-scroll service-card-hover"
                data-ocid={`service-card-${key}`}
                style={{
                  background: "white",
                  borderRadius: 20,
                  padding: "32px 24px",
                  border: "1px solid rgba(13,107,59,0.12)",
                  boxShadow: "0 2px 16px rgba(13,107,59,0.08)",
                  cursor: "pointer",
                  transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  transitionDelay: `${i * 0.08}s`,
                  opacity: 0,
                  transform: "translateY(20px)",
                  textAlign: "left",
                  fontFamily: "'Poppins', sans-serif",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 16,
                    background: "#f0faf5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.8rem",
                    marginBottom: 20,
                  }}
                >
                  {icon}
                </div>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#0f2318",
                    marginBottom: 10,
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "#5c7a66",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {desc}
                </p>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    marginTop: 16,
                    color: "#0d6b3b",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                  }}
                >
                  Learn More →
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {activeModal && activeService && (
        <dialog
          open
          aria-label={activeService.title}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 2000,
            background: "rgba(10,30,18,0.5)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
            border: "none",
            width: "100%",
            maxWidth: "100vw",
            maxHeight: "100vh",
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") setActiveModal(null);
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveModal(null);
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: 24,
              padding: "36px 32px",
              maxWidth: 520,
              width: "100%",
              maxHeight: "85vh",
              overflowY: "auto",
              position: "relative",
            }}
          >
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              aria-label="Close"
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                background: "#f0faf5",
                border: "none",
                width: 34,
                height: 34,
                borderRadius: "50%",
                cursor: "pointer",
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ✕
            </button>
            <span
              style={{ fontSize: "2.4rem", marginBottom: 14, display: "block" }}
            >
              {activeService.icon}
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.5rem",
                color: "#0f2318",
                marginBottom: 12,
              }}
            >
              {activeService.title}
            </h2>
            <p
              style={{
                color: "#5c7a66",
                fontSize: "0.92rem",
                lineHeight: 1.9,
                marginBottom: 18,
              }}
            >
              {activeService.desc}
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px" }}>
              {activeService.points.map((pt) => (
                <li
                  key={pt}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    padding: "9px 14px",
                    background: "#f0faf5",
                    borderRadius: 10,
                    marginBottom: 8,
                    fontSize: "0.85rem",
                    color: "#2d4a38",
                  }}
                >
                  <span
                    style={{ color: "#0d6b3b", fontWeight: 700, flexShrink: 0 }}
                  >
                    ✓
                  </span>
                  {pt}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => {
                setActiveModal(null);
                onNavigate("appointment");
              }}
              data-ocid="service-modal-book-btn"
              className="btn-primary-hover"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#0d6b3b",
                color: "white",
                padding: "12px 24px",
                borderRadius: 12,
                fontWeight: 600,
                fontSize: "0.88rem",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              📅 Book Consultation for This
            </button>
          </div>
        </dialog>
      )}

      <style>{`
        @media (max-width: 1024px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 768px) { .services-grid { grid-template-columns: 1fr !important; } }
        .fade-up-scroll.visible { opacity: 1 !important; transform: translateY(0) !important; }
        .service-card-hover:hover { transform: translateY(-8px) !important; box-shadow: 0 20px 60px rgba(13,107,59,0.18) !important; }
        .btn-primary-hover:hover { background: #1a8a4e !important; transform: translateY(-2px) !important; }
      `}</style>
    </div>
  );
}
