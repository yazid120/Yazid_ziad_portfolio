import React, { useState, useEffect } from "react";

const servicesData = [
  {
    icon: "🌐",
    title: "Website Development",
    description: "Custom-built, responsive websites tailored to your business. From landing pages to full-featured web applications using modern technologies.",
    features: ["React / Next.js", "Responsive Design", "SEO Optimized", "Fast Performance"],
    popular: true,
  },
  {
    icon: "🎨",
    title: "Website Redesign",
    description: "Give your existing website a fresh, modern look. I'll revamp the UI/UX to improve user engagement and bring your brand up to date.",
    features: ["UI/UX Overhaul", "Modern Aesthetics", "Better Conversions", "Mobile First"],
    popular: false,
  },
  {
    icon: "⚙️",
    title: "Full Stack Projects",
    description: "End-to-end development of web applications with robust backends, databases, APIs, and scalable architecture.",
    features: ["REST APIs", "Database Design", "Authentication", "Cloud Deployment"],
    popular: false,
  },
  {
    icon: "🖌️",
    title: "Graphic Design",
    description: "Eye-catching visual assets for your brand — logos, banners, social media graphics, and marketing materials.",
    features: ["Logo Design", "Brand Identity", "Social Media Assets", "Print Ready"],
    popular: false,
  },
  {
    icon: "🛠️",
    title: "Maintenance & Support",
    description: "Ongoing support to keep your site running smoothly — bug fixes, updates, performance monitoring, and security patches.",
    features: ["Bug Fixes", "Performance Tuning", "Security Updates", "24/7 Monitoring"],
    popular: false,
  },
  {
    icon: "📱",
    title: "Landing Pages",
    description: "High-converting landing pages designed to capture leads and drive action. Perfect for product launches and campaigns.",
    features: ["Lead Capture", "A/B Testing Ready", "Analytics Integration", "Fast Delivery"],
    popular: false,
  },
];

const Services = function ({ isOpen, onClose }) {
  const [activeCard, setActiveCard] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === "Escape") onClose(); };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="services-overlay" onClick={onClose}>
      <div className="services-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="services-modal-header">
          <div>
            <h2 className="services-modal-title">My Services</h2>
            <p className="services-modal-desc">
              Need a website, a redesign, or a full project? Here's what I can do for you.
            </p>
          </div>
          <button className="services-close-btn" onClick={onClose} aria-label="Close">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Services Grid */}
        <div className="services-modal-body">
          <div className="services-grid">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className={`service-card ${activeCard === index ? "service-card--active" : ""}`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {service.popular && <span className="service-popular-badge">Popular</span>}
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
                <a href="mailto:yazidziad.dev@gmail.com" className="service-cta">
                  Get a Quote →
                </a>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="services-cta-banner">
            <h2 className="text-white text-2xl font-bold mb-2">Have a project in mind?</h2>
            <p className="text-slate-400 mb-4">Let's discuss how I can help bring your ideas to life.</p>
            <a href="mailto:yazidziad.dev@gmail.com" className="services-cta-btn">
              📩 Let's Talk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
