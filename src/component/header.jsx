import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./header.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Header() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="header-section">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div 
            className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0" 
            data-aos="fade-right"
          >
            <h1 className="fw-bold display-5">
              Welcome to <span className="text-primary">My Website</span>
            </h1>

            <p className="text-muted mt-3">
              Start learning modern skills like Frontend, Backend, and Mobile Development.
            </p>

            <div className="mt-4 d-flex gap-3 justify-content-center justify-content-lg-start">
              <button className="btn btn-primary px-4">Get Started</button>
              <button className="btn btn-outline-dark px-4">Learn More</button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div 
            className="col-lg-6 text-center" 
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <img 
              src="https://th.bing.com/th/id/OIP.mKgROqlrY5oaMFoNHymr2AHaHa?w=181&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" 
              alt="Header"
              className="img-fluid header-img"
            />
          </div>

        </div>
      </div>
    </section>
  )
}