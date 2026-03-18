import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./join.css";

export default function Join() {
  return (
    <section className="join-section py-5">
      <div className="container">
        <div className="row align-items-center text-center text-lg-start">

          {/* TEXT CONTENT */}
          <div className="col-lg-8 mb-4 mb-lg-0">
            <h1 className="fw-bold">Join Our Community</h1>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Voluptas, voluptate. Be part of something amazing today.
            </p>

            {/* BUTTONS */}
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
              <button className="btn btn-primary px-4">Join Now</button>
              <button className="btn btn-outline-secondary px-4">Learn More</button>
            </div>
          </div>

          {/* OPTIONAL IMAGE / ICON */}
          <div className="col-lg-4 text-center">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png" 
              alt="community"
              className="img-fluid join-img"
            />
          </div>

        </div>
      </div>
    </section>
  )
}