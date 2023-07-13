import "../Style/About.css";

const About = () => {
  return (
    <div id="about">
      <div className="about-intro">
        <h1 style={{ fontFamily: "var(--title-font-family)" }}>
          Revolutionizing the Gaming Industry: Innovating Interactive and
          Educational Experiences with AI Technology
        </h1>
        <p>
          Our vision is to create an application that revolutionizes the gaming
          industry in Algeria and globally. With our innovative approach, we aim
          to transform interactive and educational gaming experiences by
          incorporating AI technology.
        </p>
      </div>
      <div className="about-items">
        <div className="about-item">
          <h2>Expertise in Industrial Engineering and Operations Management</h2>
          <p>
            Comprised of a team of four specialized industrial engineering
            students, we have gained a solid understanding of industrial
            processes and operations management through our comprehensive
            five-year academic program
          </p>
        </div>
        <div className="about-item">
          <h2>
            Serving Diverse Industries with Operations Management and AI
            Solutions
          </h2>
          <p>
            Our company aims to serve diverse industries since the principles of
            operations management and AI are applicable across a wide range of
            businesses
          </p>
        </div>
        <div className="about-item">
          <h2>
            Global Expansion and Collaborative Solutions for Enhanced Operations
          </h2>
          <p>
            We intend to expand geographically and collaborate with companies
            worldwide to enhance their operations through our application
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
