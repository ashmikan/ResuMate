import React from "react";

function ResumePreview({ formData }) {

  return (
    <div
      id="resume"
      style={{
        padding: "20px",
        background: "white",
        width: "600px"
      }}
    >
      {/* Header Section: Image + Name/Position in 2 columns */}
      <div style={{ display: "flex", gap: "20px", alignItems: "center", marginBottom: "20px" }}>
        {/* Column 1: Image */}
        <div>
          {formData.photo && (
            <img
              src={formData.photo}
              alt="profile"
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit: "cover"
              }}
            />
          )}
        </div>

        {/* Column 2: Name & Position */}
        <div>
          <h3 style={{ margin: "0 0 5px 0" }}>{formData.name}</h3>
          <h5 style={{ margin: "0" }}>{formData.position}</h5>
        </div>
      </div>

      <hr style={{ border: "none", borderTop: "3px solid #013880ff", margin: "20px 0" }}></hr>
      <p>Email: {formData.email}</p>
      <p>Phone: {formData.phone}</p>

      <h4>Profile</h4>
      <p>{formData.profile}</p>

      <h4>Education</h4>
      <p>{formData.education}</p>

      <h4>Skills</h4>
      <p>{formData.skills}</p>

      <h4>Experience</h4>
      <p>{formData.experience}</p>

      <h4>Projects</h4>
      <p>{formData.projects}</p>

      <h4>Certifications</h4>
      <p>{formData.certifications}</p>
    </div>
  );
}

export default ResumePreview;
