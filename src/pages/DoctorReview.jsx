import React, { useRef } from 'react';
import { doctors } from '../data/doctors';
import html2pdf from 'html2pdf.js';
import './DoctorReview.css';

const DoctorReview = () => {
    const contentRef = useRef(null);

    const handleDownloadPDF = () => {
        const element = contentRef.current;
        const opt = {
            margin: [10, 10], // top, left, bottom, right margins in mm
            filename: 'chauhan-hospital-doctors-profile.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        html2pdf().set(opt).from(element).save();
    };

    return (
        <div className="doctor-review-page">
            <div className="review-controls container">
                 <h1>Doctor Profiles Review</h1>
                 <button onClick={handleDownloadPDF} className="btn btn-primary download-btn">
                    Download PDF
                 </button>
            </div>

            <div className="review-content-wrapper container">
                <div ref={contentRef} className="pdf-content">
                    <div className="pdf-header text-center mb-5">
                         <h1 style={{ color: '#0066cc' }}>Chauhan Hospital</h1>
                         <p>Medical Team Profiles</p>
                         <hr />
                    </div>
                    {doctors.map((doctor, index) => (
                        <div key={doctor.id} className="review-doctor-card html2pdf__page-break">
                            <div className="review-header">
                                <div className="review-image">
                                    {doctor.image ? (
                                        <img src={doctor.image} alt={doctor.name} crossOrigin="anonymous" />
                                    ) : (
                                        <div className="review-placeholder">
                                            {doctor.name.split(' ')[1][0]}
                                        </div>
                                    )}
                                </div>
                                <div className="review-info">
                                    <h2>{doctor.name}</h2>
                                    <h4 className="text-secondary">{doctor.specialization}</h4>
                                    <p className="qualification-text">{doctor.qualification}</p>
                                    <span className="exp-badge">{doctor.experience} Experience</span>
                                </div>
                            </div>
                            
                            <div className="review-body">
                                <div className="review-section">
                                    <h5>About</h5>
                                    <p>{doctor.description}</p>
                                </div>
                                
                                <div className="review-section">
                                    <h5>Expertise</h5>
                                    <ul className="review-skills">
                                        {doctor.expertise.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            {index !== doctors.length - 1 && <hr className="doctor-divider" />}
                        </div>
                    ))}
                     <div className="pdf-footer text-center mt-5">
                        <p>Generated for Verification | Chauhan Hospitals</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorReview;
