import React from "react";
import "./Services.scss";
import * as HiIcons from "react-icons/hi";

const Services = ({ title, subtitle, items }) => (
  <section className="services-section">
    <h2 className="services-title">{title}</h2>
    <p className="services-subtitle">{subtitle}</p>
    <div className="services-grid">
      {items.map((service, idx) => {
        const IconComponent = HiIcons[service.icon] || HiIcons.HiOutlineCog;
        return (
          <div className="service-card" key={idx}>
            <div className="service-icon">
              <IconComponent size={48} />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.description}</p>
          </div>
        );
      })}
    </div>
  </section>
);

export default Services;
