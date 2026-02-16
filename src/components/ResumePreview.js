import React, { useState } from "react";

function ResumePreview({ formData }) {
  const [hoveredSection, setHoveredSection] = useState(null);

  const sectionStyle = (sectionName) => ({
    transition: "all 0.3s ease",
    padding: "10px",
    borderRadius: "6px",
    background: hoveredSection === sectionName ? "rgba(1, 56, 128, 0.05)" : "transparent"
  });

  return (
    <div
      id="resume"
      style={{
        padding: "20px",
        background: "white",
        width: "600px",
        borderRadius: "12px",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
        transition: "all 0.3s ease"
      }}
    >
      {/* Header Section: Image + Name/Position in 2 columns */}
      <div style={{ display: "flex", gap: "20px", alignItems: "center", marginBottom: "20px" }}>
        {/* Column 1: Image */}
        <div style={{ transition: "all 0.3s ease" }}>
          {formData.photo && (
            <img
              src={formData.photo}
              alt="profile"
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit: "cover",
                boxShadow: "0 4px 12px rgba(219, 114, 228, 0.2)",
                transition: "all 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.08)";
                e.target.style.boxShadow = "0 8px 16px rgba(219, 114, 228, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "0 4px 12px rgba(219, 114, 228, 0.2)";
              }}
            />
          )}
        </div>

        {/* Column 2: Name & Position */}
        <div>
          <h3 style={{ margin: "0 0 5px 0", transition: "all 0.3s ease", color: "#333" }}>{formData.name}</h3>
          <h5 style={{ margin: "0", transition: "all 0.3s ease", color: "#013880ff" }}>{formData.position}</h5>
        </div>
      </div>

      <hr style={{ border: "none", borderTop: "3px solid #013880ff", margin: "20px 0", transition: "all 0.3s ease" }}></hr>
      
      {/* Contact Info Section */}
      <div
        style={sectionStyle("contact")}
        onMouseEnter={() => setHoveredSection("contact")}
        onMouseLeave={() => setHoveredSection(null)}
      >
        <p style={{ margin: "5px 0", transition: "all 0.3s ease" }}>📧 Email: {formData.email}</p>
        <p style={{ margin: "5px 0", transition: "all 0.3s ease" }}>📱 Phone: {formData.phone}</p>
      </div>

      <div style={sectionStyle("profile")} onMouseEnter={() => setHoveredSection("profile")} onMouseLeave={() => setHoveredSection(null)}>
        <h4 style={{ margin: "15px 0 8px 0", color: "#013880ff", transition: "all 0.3s ease" }}>Profile</h4>
        <p style={{ margin: "0", lineHeight: "1.6", transition: "all 0.3s ease" }}>{formData.profile}</p>
      </div>

      <div style={sectionStyle("education")} onMouseEnter={() => setHoveredSection("education")} onMouseLeave={() => setHoveredSection(null)}>
        <h4 style={{ margin: "15px 0 8px 0", color: "#013880ff", transition: "all 0.3s ease" }}>Education</h4>
        <p style={{ margin: "0", lineHeight: "1.6", transition: "all 0.3s ease" }}>{formData.education}</p>
      </div>

      <div style={sectionStyle("skills")} onMouseEnter={() => setHoveredSection("skills")} onMouseLeave={() => setHoveredSection(null)}>
        <h4 style={{ margin: "15px 0 8px 0", color: "#013880ff", transition: "all 0.3s ease" }}>Skills</h4>
        <p style={{ margin: "0", lineHeight: "1.6", transition: "all 0.3s ease" }}>{formData.skills}</p>
      </div>

      <div style={sectionStyle("experience")} onMouseEnter={() => setHoveredSection("experience")} onMouseLeave={() => setHoveredSection(null)}>
        <h4 style={{ margin: "15px 0 8px 0", color: "#013880ff", transition: "all 0.3s ease" }}>Experience</h4>
        <p style={{ margin: "0", lineHeight: "1.6", transition: "all 0.3s ease" }}>{formData.experience}</p>
      </div>

      <div style={sectionStyle("projects")} onMouseEnter={() => setHoveredSection("projects")} onMouseLeave={() => setHoveredSection(null)}>
        <h4 style={{ margin: "15px 0 8px 0", color: "#013880ff", transition: "all 0.3s ease" }}>Projects</h4>
        <p style={{ margin: "0", lineHeight: "1.6", transition: "all 0.3s ease" }}>{formData.projects}</p>
      </div>

      <div style={sectionStyle("certifications")} onMouseEnter={() => setHoveredSection("certifications")} onMouseLeave={() => setHoveredSection(null)}>
        <h4 style={{ margin: "15px 0 8px 0", color: "#013880ff", transition: "all 0.3s ease" }}>Certifications</h4>
        <p style={{ margin: "0", lineHeight: "1.6", transition: "all 0.3s ease" }}>{formData.certifications}</p>
      </div>
    </div>
  );
}

export default ResumePreview;
