import './App.css';
import React, { useState } from "react";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import logo from "./components/logo.png";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    email: "",
    phone: "",
    profile: "",
    education: "",
    skills: "",
    experience: "",
    projects: "",
    certifications: "",
    photo: ""
  });

  const [selectedTemplate, setSelectedTemplate] = useState("sidebar");
  const [accentColor, setAccentColor] = useState("#0284c7"); // Default Sky Blue

  const downloadPDF = () => {
    const input = document.getElementById("resume");
    if (!input) return;

    // Use a scale multiplier for ultra-sharp text in the output PDF
    html2canvas(input, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: "#ffffff"
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = pdfWidth - 20; // 10mm left and right margins
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      const marginX = 10;
      let marginY = 10;

      // Center vertically if the resume height is smaller than A4 page height minus margins
      if (imgHeight < pdfHeight - 20) {
        marginY = (pdfHeight - imgHeight) / 2;
      }

      pdf.addImage(imgData, "PNG", marginX, marginY, imgWidth, imgHeight, undefined, "FAST");
      
      const fileName = formData.name 
        ? `${formData.name.trim().replace(/\s+/g, "_")}_Resume.pdf`
        : "resume.pdf";
        
      pdf.save(fileName);
    });
  };

  return (
    <div className="App">
      {/* Floating Background Mesh Shapes */}
      <div className="bubbles">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      <div className="container mt-4">
        <div className="brand-lockup mb-4">
          <img className="brand-logo" src={logo} alt="ResuMate logo" />
          <div className="brand-copy">
            <h1 className="brand-name text-center mb-2">ResuMate</h1>
            <h2 className="tag text-center mb-0">Online Resume Builder</h2>
          </div>
        </div>

        <div className="row justify-content-center">
          {/* Left Column: Editor Form */}
          <div className="col-lg-6 col-md-12 mb-4">
            <ResumeForm
              formData={formData}
              setFormData={setFormData}
            />
          </div>

          {/* Right Column: Toolbar + Live Preview */}
          <div className="col-lg-6 col-md-12 d-flex flex-column align-items-center">
            
            {/* Design & Template Controls Toolbar */}
            <div className="settings-bar w-100" style={{ maxWidth: "600px" }}>
              <div className="settings-group">
                <span className="settings-label">Layout Template</span>
                <select
                  className="form-select"
                  style={{ width: "175px", padding: "6px 12px" }}
                  value={selectedTemplate}
                  onChange={(e) => setSelectedTemplate(e.target.value)}
                >
                  <option value="sidebar">Modern Sidebar</option>
                  <option value="minimal">Elegant Minimalist</option>
                  <option value="creative">Creative Badges</option>
                  <option value="executive">Classic Executive</option>
                </select>
              </div>

              <div className="settings-group">
                <span className="settings-label">Accent Color</span>
                <div className="color-picker-circles">
                  {[
                    { name: "sky", value: "#0284c7" },
                    { name: "indigo", value: "#4f46e5" },
                    { name: "emerald", value: "#059669" },
                    { name: "rose", value: "#e11d48" },
                    { name: "charcoal", value: "#1e293b" }
                  ].map((color) => (
                    <button
                      key={color.value}
                      type="button"
                      className={`color-circle ${accentColor === color.value ? "active" : ""}`}
                      style={{ backgroundColor: color.value }}
                      onClick={() => setAccentColor(color.value)}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Resume Live Preview Container */}
            <ResumePreview 
              formData={formData} 
              selectedTemplate={selectedTemplate}
              accentColor={accentColor}
            />

            {/* Action Download Button */}
            <button
              className="btn-custom"
              onClick={downloadPDF}
            >
              📥 Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
