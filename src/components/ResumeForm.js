import React, { useState } from "react";

function ResumeForm({ formData, setFormData }) {
  const [activeTab, setActiveTab] = useState("personal");

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
    <div className="card">
      <h3>Enter Resume Details</h3>

      {/* Tabs Header */}
      <div className="form-tabs">
        <button
          type="button"
          className={`form-tab ${activeTab === "personal" ? "active" : ""}`}
          onClick={() => setActiveTab("personal")}
        >
          👤 Personal Info
        </button>
        <button
          type="button"
          className={`form-tab ${activeTab === "experience" ? "active" : ""}`}
          onClick={() => setActiveTab("experience")}
        >
          💼 Work & Edu
        </button>
        <button
          type="button"
          className={`form-tab ${activeTab === "skills" ? "active" : ""}`}
          onClick={() => setActiveTab("skills")}
        >
          🛠️ Skills & Projects
        </button>
        <button
          type="button"
          className={`form-tab ${activeTab === "extra" ? "active" : ""}`}
          onClick={() => setActiveTab("extra")}
        >
          🏅 Extras
        </button>
      </div>

      {/* Tab Contents */}
      <div className="tab-content">
        {activeTab === "personal" && (
          <div className="animate-fade">
            <div className="input-wrapper">
              <span className="input-icon">👤</span>
              <input
                className="form-control"
                name="name"
                value={formData.name || ""}
                placeholder="Full Name"
                onChange={handleChange}
              />
            </div>

            <div className="input-wrapper">
              <span className="input-icon">💼</span>
              <input
                className="form-control"
                name="position"
                value={formData.position || ""}
                placeholder="Job Position"
                onChange={handleChange}
              />
            </div>

            <div className="input-wrapper">
              <span className="input-icon">📧</span>
              <input
                className="form-control"
                name="email"
                type="email"
                value={formData.email || ""}
                placeholder="Email Address"
                onChange={handleChange}
              />
            </div>

            <div className="input-wrapper">
              <span className="input-icon">📞</span>
              <input
                className="form-control"
                name="phone"
                value={formData.phone || ""}
                placeholder="Phone Number"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="settings-label mb-1">📝 Profile Summary</label>
              <textarea
                className="form-control"
                name="profile"
                value={formData.profile || ""}
                placeholder="Describe your professional background, goals, and key achievements..."
                onChange={handleChange}
                maxLength={600}
              />
              <div className="char-counter">
                {(formData.profile || "").length} / 600 characters
              </div>
            </div>
          </div>
        )}

        {activeTab === "experience" && (
          <div className="animate-fade">
            <div className="mb-4">
              <label className="settings-label mb-1">🎓 Education Details</label>
              <textarea
                className="form-control"
                name="education"
                value={formData.education || ""}
                placeholder="Degrees, universities, graduation years, and relevant courses (one per line)..."
                onChange={handleChange}
                maxLength={1000}
              />
              <div className="char-counter">
                {(formData.education || "").length} / 1000 characters
              </div>
            </div>

            <div className="mb-3">
              <label className="settings-label mb-1">💼 Work Experience</label>
              <textarea
                className="form-control"
                name="experience"
                value={formData.experience || ""}
                placeholder="Job titles, companies, dates, and responsibilities/achievements (one per line)..."
                onChange={handleChange}
                maxLength={1500}
              />
              <div className="char-counter">
                {(formData.experience || "").length} / 1500 characters
              </div>
            </div>
          </div>
        )}

        {activeTab === "skills" && (
          <div className="animate-fade">
            <div className="mb-4">
              <label className="settings-label mb-1">🛠️ Key Skills</label>
              <textarea
                className="form-control"
                name="skills"
                value={formData.skills || ""}
                placeholder="Programming languages, frameworks, tools, soft skills (comma-separated)..."
                onChange={handleChange}
                maxLength={500}
              />
              <div className="char-counter">
                {(formData.skills || "").length} / 500 characters
              </div>
            </div>

            <div className="mb-3">
              <label className="settings-label mb-1">🚀 Key Projects</label>
              <textarea
                className="form-control"
                name="projects"
                value={formData.projects || ""}
                placeholder="Project names, tech stacks, and core accomplishments (one per line)..."
                onChange={handleChange}
                maxLength={1200}
              />
              <div className="char-counter">
                {(formData.projects || "").length} / 1200 characters
              </div>
            </div>
          </div>
        )}

        {activeTab === "extra" && (
          <div className="animate-fade">
            <div className="mb-4">
              <label className="settings-label mb-1">🏅 Certifications & Awards</label>
              <textarea
                className="form-control"
                name="certifications"
                value={formData.certifications || ""}
                placeholder="Certifying bodies, titles, and dates (one per line)..."
                onChange={handleChange}
                maxLength={800}
              />
              <div className="char-counter">
                {(formData.certifications || "").length} / 800 characters
              </div>
            </div>

            <div className="mb-3">
              <label className="settings-label mb-1 d-block">📷 Profile Picture</label>
              <div className="custom-file-upload">
                {formData.photo ? (
                  <div>
                    <img
                      src={formData.photo}
                      alt="Profile Thumbnail"
                      className="upload-thumbnail"
                    />
                    <div>
                      <button
                        type="button"
                        className="remove-photo-btn"
                        onClick={() => setFormData({ ...formData, photo: "" })}
                      >
                        Remove Photo
                      </button>
                    </div>
                  </div>
                ) : (
                  <label htmlFor="photo-upload" className="w-100 h-100">
                    <span className="upload-icon">📷</span>
                    <div>
                      <strong>Upload Profile Photo</strong>
                      <p className="text-muted small mb-0">Click or tap to choose an image</p>
                    </div>
                    <input
                      id="photo-upload"
                      type="file"
                      style={{ display: "none" }}
                      accept="image/*"
                      onChange={handlePhoto}
                    />
                  </label>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResumeForm;
