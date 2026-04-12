<img
  src="/assets/images/doctor-consulting.png"
  alt="Dr. Ritesh Clinic Logo"
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "top center",
  }}
/>import { useState } from "react";
import Breadcrumb from "./components/Breadcrumb";
import FloatingActions from "./components/FloatingActions";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./pages/About";
import Appointment from "./pages/Appointment";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import Services from "./pages/Services";
import Why from "./pages/Why";

export type PageId =
  | "home"
  | "about"
  | "services"
  | "why"
  | "reviews"
  | "blog"
  | "appointment"
  | "contact";

const PAGE_COMPONENTS: Record<
  PageId,
  React.ComponentType<{ onNavigate: (p: PageId) => void }>
> = {
  home: Home,
  about: About,
  services: Services,
  why: Why,
  reviews: Reviews,
  blog: Blog,
  appointment: Appointment,
  contact: Contact,
};

const ALL_PAGES: PageId[] = [
  "home",
  "about",
  "services",
  "why",
  "reviews",
  "blog",
  "appointment",
  "contact",
];

export default function App() {
  const [activePage, setActivePage] = useState<PageId>("home");

  const navigate = (page: PageId) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      style={{
        fontFamily: "var(--font-body)",
        background: "#ffffff",
        color: "#0f2318",
        overflowX: "hidden",
      }}
    >
      <Nav activePage={activePage} onNavigate={navigate} />
      <Breadcrumb activePage={activePage} onNavigate={navigate} />
      <main>
        {ALL_PAGES.map((page) => {
          const Component = PAGE_COMPONENTS[page];
          const isActive = activePage === page;
          return (
            <div
              key={page}
              style={{
                display: isActive ? "block" : "none",
                animation: isActive
                  ? "pageIn 0.4s cubic-bezier(0.22,1,0.36,1)"
                  : "none",
              }}
            >
              <Component onNavigate={navigate} />
            </div>
          );
        })}
      </main>
      <Footer onNavigate={navigate} />
      <FloatingActions />
    </div>
  );
}
