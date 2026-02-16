import React from "react";

function ResumeForm({ formData, setFormData }) {

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({
        ...formData,
        photo: reader.result
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="card p-3">

      <h3>Enter Resume Details</h3>

      <input
        className="form-control mb-2"
        name="name"
        placeholder="Full Name"
        onChange={handleChange}
      />

      <input
        className="form-control mb-2"
        name="position"
        placeholder="Job Position"
        onChange={handleChange}
      />

      <input
        className="form-control mb-2"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <input
        className="form-control mb-2"
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
      />

      <textarea
        className="form-control mb-2"
        name="profile"
        placeholder="Profile"
        onChange={handleChange}
      />

      <textarea
        className="form-control mb-2"
        name="education"
        placeholder="Education"
        onChange={handleChange}
      />

      <textarea
        className="form-control mb-2"
        name="skills"
        placeholder="Skills"
        onChange={handleChange}
      />

      <textarea
        className="form-control mb-2"
        name="experience"
        placeholder="Experience"
        onChange={handleChange}
      />

      <textarea
        className="form-control mb-2"
        name="projects"
        placeholder="Projects"
        onChange={handleChange}
      />

      <textarea
        className="form-control mb-2"
        name="certifications"
        placeholder="Certifications"
        onChange={handleChange}
      />

      <label>Upload Photo</label>
      <input
        type="file"
        className="form-control"
        accept="image/*"
        onChange={handlePhoto}
      />

    </div>
  );
}

export default ResumeForm;
