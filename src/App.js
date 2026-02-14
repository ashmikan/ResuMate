import './App.css';
import React, { useState } from "react";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    skills: "",
    experience: "",
    photo: ""
  });

  const downloadPDF = () => {

    const input = document.getElementById("resume");

    html2canvas(input).then((canvas) => {

      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF();

      pdf.addImage(imgData, "PNG", 10, 10);

      pdf.save("resume.pdf");

    });
  };


  return (
    <div className="App">
      <div className="container mt-4">

        <h1 className="text-center mb-4">
          Online Resume Builder
        </h1>

        <div className="row">

          <div className="col-md-6">
            <ResumeForm
              formData={formData}
              setFormData={setFormData}
            />
          </div>

          <div className="col-md-6">
            <ResumePreview formData={formData} /> 

            <button
              className="btn btn-primary mt-3"
              onClick={downloadPDF}
      
            >
              Download PDF
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
