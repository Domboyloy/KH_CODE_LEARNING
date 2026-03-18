import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./card.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Card() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // ✅ Data (no repeating code)
  const courses = [
    {
      img: "https://i.pinimg.com/736x/6b/c5/98/6bc5985439df332a6857b552a3d72135.jpg",
      title: "Front-End Development",
      desc: "Learn HTML, CSS, JavaScript and modern frameworks."
    },
    {
      img: "https://i.pinimg.com/736x/c8/84/25/c884251f301717b469ee2859be179dbe.jpg",
      title: "Back-End Development",
      desc: "Build powerful servers with Node.js and databases."
    },
    {
      img: "https://i.pinimg.com/1200x/5f/28/85/5f28854058cbc74fbf99d475dedece9c.jpg",
      title: "Mobile Development",
      desc: "Create mobile apps using Flutter or React Native."
    },
    {
      img: "https://i.pinimg.com/736x/60/be/20/60be206c04d21a95a9afdbba2c9fc7bb.jpg",
      title: "UI/UX Design",
      desc: "Design beautiful and user-friendly interfaces."
    },
    {
      img: "https://i.pinimg.com/736x/06/e5/9a/06e59a9c936f06a00e59949b644cf9d6.jpg",
      title: "Data Science",
      desc: "Analyze data using Python and machine learning."
    },
    {
      img: "https://i.pinimg.com/1200x/e2/45/f8/e245f889fd6b92d0245d35af1aaa2725.jpg",
      title: "DevOps",
      desc: "Learn CI/CD, Docker, and cloud deployment."
    }
  ];

  return (
    <div className='container py-5'>
      <h2 className="text-center fw-bold mb-4">Our Courses</h2>

      <div className="row g-4">
        {courses.map((course, index) => (
          <div 
            className="col-12 col-sm-6 col-lg-4" 
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="card custom-card h-100">

              <img 
                src={course.img} 
                className="card-img-top" 
                alt={course.title}
              />

              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.desc}</p>
              </div>

              <div className="card-footer d-flex justify-content-between align-items-center">
                <small className="text-muted">Updated recently</small>
                <button className="btn btn-sm btn-primary">View</button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}