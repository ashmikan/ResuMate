import React from "react";

function ResumePreview({ formData, selectedTemplate = "sidebar", accentColor = "#0284c7" }) {
  
  // Custom styles to pass the chosen accent color down to CSS variables
  const containerStyle = {
    "--accent-color": accentColor,
    position: "relative"
  };

  // Helper to render section with formatted text
  const renderSection = (title, content, templateType) => {
    if (!content) return null;

    if (templateType === "sidebar") {
      return (
        <div className="main-section">
          <h4>{title}</h4>
          <p style={{ whiteSpace: "pre-line" }}>{content}</p>
        </div>
      );
    } else if (templateType === "minimal") {
      return (
        <div className="section">
          <h4>{title}</h4>
          <p style={{ whiteSpace: "pre-line" }}>{content}</p>
        </div>
      );
    } else if (templateType === "creative") {
      return (
        <div className="section">
          <h4>{title}</h4>
          <p style={{ whiteSpace: "pre-line" }}>{content}</p>
        </div>
      );
    } else { // executive
      return (
        <div className="section">
          <h4>{title}</h4>
          <p style={{ whiteSpace: "pre-line" }}>{content}</p>
        </div>
      );
    }
  };

  // 1. Template: Modern Sidebar
  const renderSidebarTemplate = () => {
    return (
      <div className="template-modern-sidebar" style={containerStyle}>
        {/* Left Sidebar */}
        <div className="sidebar">
          {formData.photo && (
            <img src={formData.photo} alt="Profile" className="sidebar-photo" />
          )}

          <div className="sidebar-section">
            <h4>Contact Info</h4>
            {formData.email && <p>📧 {formData.email}</p>}
            {formData.phone && <p>📱 {formData.phone}</p>}
          </div>

          {formData.skills && (
            <div className="sidebar-section">
              <h4>Skills</h4>
              {formData.skills.split(",").map((s, idx) => s.trim() && (
                <p key={idx} style={{ fontSize: "0.8rem", margin: "4px 0" }}>
                  • {s.trim()}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Right Main Content */}
        <div className="main-content">
          <div className="header-info">
            <h3>{formData.name || "Your Name"}</h3>
            <h5>{formData.position || "Your Job Title"}</h5>
          </div>

          {renderSection("Profile", formData.profile, "sidebar")}
          {renderSection("Education", formData.education, "sidebar")}
          {renderSection("Experience", formData.experience, "sidebar")}
          {renderSection("Projects", formData.projects, "sidebar")}
          {renderSection("Certifications", formData.certifications, "sidebar")}
        </div>
      </div>
    );
  };

  // 2. Template: Elegant Minimalist
  const renderMinimalTemplate = () => {
    return (
      <div className="template-elegant-minimal" style={containerStyle}>
        {/* Centered Header */}
        <div className="header">
          {formData.photo && (
            <img src={formData.photo} alt="Profile" className="header-photo" />
          )}
          <h3>{formData.name || "Your Name"}</h3>
          <h5>{formData.position || "Your Job Title"}</h5>
          <div className="contact-details">
            {formData.email && <span>📧 {formData.email}</span>}
            {formData.phone && <span>📱 {formData.phone}</span>}
          </div>
        </div>

        {/* Sections */}
        {renderSection("Profile", formData.profile, "minimal")}
        {renderSection("Education", formData.education, "minimal")}
        
        {formData.skills && (
          <div className="section">
            <h4>Skills</h4>
            <p>{formData.skills.split(",").map(s => s.trim()).filter(Boolean).join("  •  ")}</p>
          </div>
        )}

        {renderSection("Experience", formData.experience, "minimal")}
        {renderSection("Projects", formData.projects, "minimal")}
        {renderSection("Certifications", formData.certifications, "minimal")}
      </div>
    );
  };

  // 3. Template: Creative Badges
  const renderCreativeTemplate = () => {
    return (
      <div className="template-creative-badges" style={containerStyle}>
        {/* Top Gradient Header */}
        <div className="top-bar resume-accent-bg">
          {formData.photo && (
            <img src={formData.photo} alt="Profile" />
          )}
          <div>
            <h3>{formData.name || "Your Name"}</h3>
            <h5>{formData.position || "Your Job Title"}</h5>
            <div className="contact-info">
              {formData.email && <span>📧 {formData.email}</span>}
              {formData.phone && <span>📱 {formData.phone}</span>}
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="body-content">
          {renderSection("Profile Summary", formData.profile, "creative")}
          
          {formData.skills && (
            <div className="section">
              <h4>Skills & Tech Stack</h4>
              <div className="skills-badge-container">
                {formData.skills.split(",").map((s, idx) => s.trim() && (
                  <span key={idx} className="skill-badge">
                    {s.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}

          {renderSection("Professional Experience", formData.experience, "creative")}
          {renderSection("Education History", formData.education, "creative")}
          {renderSection("Featured Projects", formData.projects, "creative")}
          {renderSection("Certifications", formData.certifications, "creative")}
        </div>
      </div>
    );
  };

  // 4. Template: Classic Executive
  const renderExecutiveTemplate = () => {
    return (
      <div className="template-classic-executive" style={containerStyle}>
        {/* Header Block */}
        <div className="header">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ textAlign: "left" }}>
              <h3>{formData.name || "Your Name"}</h3>
              <h5>{formData.position || "Your Job Title"}</h5>
            </div>
            
            {formData.photo && (
              <img src={formData.photo} alt="Profile" className="header-photo" />
            )}
          </div>
          
          <div className="header-details">
            {formData.email && <div className="contact-info">📧 {formData.email}</div>}
            {formData.phone && <div className="contact-info">📱 {formData.phone}</div>}
          </div>
        </div>

        {/* Sections */}
        {renderSection("Summary", formData.profile, "executive")}
        <hr />
        {renderSection("Education", formData.education, "executive")}
        <hr />
        {formData.skills && (
          <div className="section">
            <h4>Core Competencies</h4>
            <p style={{ fontStyle: "italic" }}>
              {formData.skills.split(",").map(s => s.trim()).filter(Boolean).join(", ")}
            </p>
          </div>
        )}
        <hr />
        {renderSection("Professional History", formData.experience, "executive")}
        <hr />
        {renderSection("Key Projects", formData.projects, "executive")}
        <hr />
        {renderSection("Certifications & Training", formData.certifications, "executive")}
      </div>
    );
  };

  // Render the selected template layout
  return (
    <div id="resume" style={containerStyle}>
      {selectedTemplate === "sidebar" && renderSidebarTemplate()}
      {selectedTemplate === "minimal" && renderMinimalTemplate()}
      {selectedTemplate === "creative" && renderCreativeTemplate()}
      {selectedTemplate === "executive" && renderExecutiveTemplate()}
    </div>
  );
}

export default ResumePreview;
