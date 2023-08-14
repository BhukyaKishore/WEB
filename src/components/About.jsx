import React from "react";

export default function About(props) {
  return (
    <div id="aboutus">
      <div
        className="accordion container py-5 "
        id="accordionPanelsStayOpenExample"
      >
        <h1 className="text-center">About Us</h1>
        <div className="accordion-item border border-2 border-primary">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              <h4>Welcome To {props.title}</h4>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
              <strong>Welcome to {props.title}</strong> Discover the convenience
              of renting top-notch equipment and essential services for all your
              printing, photography, and document needs. At {props.title}, we're
              dedicated to making your tasks easier by offering a range of
              services that include printer Services, camera rentals,
              professional photo editing, and high-quality photocopies.
            </div>
          </div>
        </div>
        <div className="accordion-item border border-2 border-primary">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              <h4>Our Services</h4>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <strong>Printing Works:</strong> Need a reliable printing
              relatedwork ? Our printer service provides you with access to
              high-quality printers that cater to your specific requirements and
              provide you a greate Services.For
              <strong>Affordable Prices</strong>.
              <hr />
              <strong>Camera Rentals:</strong> Capture life's moments in
              stunning detail with our camera rental service. Whether you're an
              enthusiast, a hobbyist, or a professional photographer, our
              selection of cameras for rent ensures you have the perfect tool
              for any occasion.
              <hr />
              <strong>Professional Photo Editing:</strong> Transform your images
              into masterpieces with our professional photo editing service. Our
              experienced editors work closely with you to enhance your photos,
              ensuring they meet your creative vision and professional
              standards.
              <hr />
              <strong>Premium Photocopies:</strong> Need copies that stand out?
              Our premium photocopy service delivers exceptional quality and
              precision. From important documents to marketing materials, we're
              here to meet your copying needs with finesse.
            </div>
          </div>
        </div>
        <div className="accordion-item border border-2 border-primary">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              <h4>Why Chose Us ?</h4>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <strong>Quality Assurance:</strong> Our equipment and services are
              of the highest quality, ensuring that you receive outstanding
              results every time.
              <hr />
              <strong>Flexible Rentals:</strong> Whether it's a day, a week, or
              a month, our flexible rental durations cater to your specific
              project timelines.
              <hr />
              <strong>Convenient Process:</strong> Renting equipment and
              utilizing our services is quick and hassle-free, allowing you to
              focus on what matters most.
              <hr />
              <strong>Competitive Pricing:</strong> Enjoy competitive rental
              rates that provide excellent value for your investment.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
