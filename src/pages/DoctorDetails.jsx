import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { doctors } from '../data/doctors';

const DoctorDetails = () => {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === id);

  if (!doctor) {
    return (
      <div className="section container text-center">
        <h2>Doctor not found</h2>
        <Link to="/doctors" className="btn btn-primary">Back to Doctors</Link>
      </div>
    );
  }

  return (
    <div className="doctor-details-page">
      <div className="container section">
        <Link to="/doctors" className="btn btn-outline mb-4">← Back to Doctors</Link>
        <div className="doctor-profile-card">
          <div className="doctor-profile-header">
            <div className="doctor-profile-image">
               {doctor.image ? (
                <img src={doctor.image} alt={doctor.name} />
              ) : (
                <div className="doctor-placeholder-large">
                  {doctor.name.split(' ')[1][0]}
                </div>
              )}
            </div>
            <div className="doctor-profile-info">
              <h1>{doctor.name}</h1>
              <h3 className="text-primary">{doctor.specialization}</h3>
              <p className="qualification">{doctor.qualification}</p>
              <div className="experience-badge">
                {doctor.experience} Experience
              </div>
            </div>
          </div>
          
          <div className="doctor-profile-body">
            <section className="profile-section">
              <h3>About</h3>
              <p>{doctor.description}</p>
            </section>

            <section className="profile-section">
              <h3>Expertise</h3>
              <div className="skills-grid">
                {doctor.expertise.map((item, index) => (
                  <span key={index} className="skill-tag">{item}</span>
                ))}
              </div>
            </section>

             <div className="profile-actions">
              <Link to="/appointments" className="btn btn-primary btn-large">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
