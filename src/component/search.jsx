import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./search.css";

export default function Search() {
  return (
    <section className="search-section py-4">

      <div className="container">

        {/* HEADER + SEARCH */}
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center gap-3">

          <h3 className="fw-bold text-center text-lg-start">
            All <span className="badge bg-primary">Courses</span> Of{" "}
            <span className="badge bg-dark">kh_Learn_Code</span>
          </h3>

          <form className="d-flex search-box">
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="Search courses..." 
            />
            <button className="btn btn-success">Search</button>
          </form>

        </div>

        {/* CATEGORY BUTTONS */}
        <div className="category-scroll mt-4">
          <button className="btn btn-outline-success">Front-End</button>
          <button className="btn btn-outline-success">Back-End</button>
          <button className="btn btn-outline-success">Mobile</button>
          <button className="btn btn-outline-success">Data Science</button>
          <button className="btn btn-outline-success">UI/UX Design</button>
          <button className="btn btn-outline-success">DevOps</button>
        </div>

      </div>

    </section>
  )
}