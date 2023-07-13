import "../Style/Services.css";

const Services = () => {
  return (
    <div id="services">
      <h1 style={{ fontFamily: "var(--title-font-family)" }}>SERVICES</h1>
      <p>
        Our company, "AgrI: IGRA with AI" stands out by offering an AI-based
        serious game system that brings several significant services
      </p>
      <div className="services-items">
        <div className="services-items-row">
          <div className="services-item">
            <h2>Informed decision-making</h2>
            <p>
              By utilizing advanced data analytics techniques, our serious game
              collects, processes, and analyzes real-time information, providing
              businesses with accurate and reliable data for informed
              decision-making.
            </p>
          </div>
          <div className="services-item">
            <h2>Continuous improvement</h2>
            <p>
              Our company is committed to providing regular updates and
              continuous enhancements to our serious game system. We listen to
              our clients' needs and strive to incorporate the latest
              technological advancements to deliver an innovative serious game
              solution.
            </p>
          </div>
          <div className="services-item">
            <h2>Customization</h2>
            <p>
              We offer flexibility in modifying and adapting our services to
              meet the specific needs of our clients. For instance, users will
              have the ability to customize and filter game options based on
              their preferences and requirements, aided by advanced search
              capabilities
            </p>
          </div>
        </div>
        <div className="services-items-row">
          <div className="services-item">
            <h2>None personalized</h2>
            <p>
              With our already developed games, users can browse through our
              diverse collection and select the ones that align with their
              specific needs and interests. These games cover a wide range of
              topics and industries, ensuring that there is something for
              everyone.
            </p>
          </div>
          <div className="services-item">
            <h2>Cost reduction</h2>
            <p>
              By providing a platform that offers cost comparisons and efficient
              access to serious gaming resources, we assist clients in reducing
              their overall expenses
            </p>
          </div>
          <div className="services-item">
            <h2>Convenience and user-friendliness</h2>
            <p>
              We focus on simplifying the serious gaming experience. Our
              application will be accessible from anywhere, at any time, with a
              straight-forward and expedient game selection and engagement
              process
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
