import React from "react";
import featureImg from "./photos/img4.jpg"; // ✅ Update with your image path

const HomeWhyChooseUs = () => {
  return (
    <div
      className="container-fluid bg-image"
      style={{ margin: "90px 0"}}
    >
      <div className="container">
        <div className="row">
          {/* Left Text Section */}
          <div className="col-lg-7 my-5 pt-5 pb-lg-5">
            <div className="section-title position-relative mb-4">
              <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
                Why Choose Us?
              </h6>
              <h1 className="display-4">
               What Makes Our School Unique?
              </h1>
            </div>
            <p className="mb-4 pb-2">
              At KK Blossoms School, we believe education goes beyond textbooks. 
  Our focus is on nurturing creativity, critical thinking, and character 
  development in every child. With a team of dedicated instructors, 
  modern teaching methods, and a supportive learning environment, 
  we ensure that each student not only excels academically but also 
  grows into a confident and responsible individual. 
            </p>

            {/* Feature 1 */}
            <div className="d-flex mb-3">
              <div className="btn-icon bg-primary mr-4 "style={{borderRadius:"50%"}}>
                <i className="fa fa-2x fa-graduation-cap text-white"></i>
              </div>
              <div className="mt-n1">
                <h4>Skilled Teachers</h4>
                <p>
                  Our teachers are highly qualified and dedicated professionals who focus on nurturing every child’s potential. 
                  
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="d-flex mb-3">
              <div className="btn-icon bg-secondary mr-4"style={{borderRadius:"50%"}}>
                <i className="fa fa-2x fa-certificate text-white"></i>
              </div>
              <div className="mt-n1">
                 <h4>Future Ready</h4>
  <p>
    We prepare students with the right skills and confidence to succeed in higher studies and careers ahead.
  </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="d-flex">
              <div className="btn-icon bg-warning mr-4"style={{borderRadius:"50%"}}>
                <i className="fa fa-2x fa-book-reader text-white"></i>
              </div>
              <div className="mt-n1">
                <h4>Holistic Development</h4>
    <p>We nurture students beyond academics by focusing on sports, arts, values, and life skills, ensuring balanced growth.</p>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="col-lg-5" style={{ minHeight: "400px" }}>
            <div className="position-relative h-100">
              <img
                className="position-absolute w-100 h-100"
                src={featureImg}
                alt="Feature"
                style={{ objectFit: "cover",borderRadius:"15px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWhyChooseUs;
