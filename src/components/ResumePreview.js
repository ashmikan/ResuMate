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

      {formData.photo && (
        <img
          src={formData.photo}
          alt="profile"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%"
          }}
        />
      )}

      <h2>{formData.name}</h2>
      <p>Email: {formData.email}</p>
      <p>Phone: {formData.phone}</p>

      <h4>Education</h4>
      <p>{formData.education}</p>

      <h4>Skills</h4>
      <p>{formData.skills}</p>

      <h4>Experience</h4>
      <p>{formData.experience}</p>

    </div>
  );
}

export default ResumePreview;
