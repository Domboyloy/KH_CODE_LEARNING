import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./about.css";

export default function About() {
  return (
    <section className="about-section py-5">
      <div className="container">

        {/* TITLE */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">About Us</h1>
          <p className="text-muted">
            Learn more about our mission, vision, and what we offer.
          </p>
        </div>

        <div className="row align-items-center">

          {/* IMAGE */}
          <div className="col-lg-6 mb-4 mb-lg-0 text-center">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="about"
              className="img-fluid about-img"
            />
          </div>

          {/* TEXT */}
          <div className="col-lg-6">
            <h3 className="fw-bold mb-3">Who We Are</h3>
            <p className="text-muted">
              We are a learning platform dedicated to helping students and developers 
              improve their skills in modern technologies like Frontend, Backend, 
              Mobile Development, and more.
            </p>

            <h3 className="fw-bold mt-4 mb-3">Our Mission</h3>
            <p className="text-muted">
              Our mission is to provide high-quality, accessible, and practical 
              education for everyone — no matter where you are.
            </p>

            <h3 className="fw-bold mt-4 mb-3">Why Choose Us?</h3>
            <ul className="text-muted">
              <li>✔ Easy to understand courses</li>
              <li>✔ Real-world projects</li>
              <li>✔ Modern technologies</li>
              <li>✔ Beginner to advanced level</li>
            </ul>

            <button className="btn btn-primary mt-3 px-4">
              Get Started
            </button>
          </div>

        </div>

      </div>
    </section>
  )
}