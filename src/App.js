import './App.css';
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <div className="container mt-4">

        <h1 className="text-center mb-4">
          Online Resume Builder
        </h1>

        <div className="row">

          <div className="col-md-6">
            ResumeForm
              
            
          </div>

          <div className="col-md-6">
            ResumePreview  

            <button
              className="btn btn-primary mt-3"
      
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
