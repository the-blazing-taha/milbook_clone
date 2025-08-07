import "./about.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="text-white">
        {/* Title */}
        <h2 className="text-center mb-5 fw-bold about-title">
          About AizynQ
        </h2>

        <div className="row align-items-center mb-5">
          {/* Image */}
          <div className="col-md-6 text-center">
            <img
              className="img-fluid about-image"
              src="https://placehold.co/600x400/666666/FFFFFF?text=Image+Not+Found"
              alt="Visual representation of embedded systems"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://via.placeholder.com/600x400?text=Image+Unavailable";
              }}
            />
          </div>

          {/* Text */}
          <div className="col-md-6 about-text">
            <p>
              Welcome to Aizynq System, where innovation meets excellence in
              electronic embedded solutions. As a dynamic and future-focused
              company, we specialize in designing, developing, and delivering
              cutting-edge embedded solutions that power the technology of
              tomorrow.
            </p>
            <p>
              Founded with a vision to revolutionize industries through
              intelligent automation and smart electronics, we are committed to
              providing customized embedded solutions tailored to meet the
              evolving needs of businesses across diverse sectors, including
              industrial automation, IoT, automotive, healthcare, and consumer
              electronics.
            </p>
            <p>
              At Aizynq, we believe in pushing technological boundaries to
              enhance efficiency, reliability, and connectivity. Our team of
              skilled engineers and developers work relentlessly to transform
              ideas into reality, ensuring seamless integration of hardware and
              software for optimized performance.
            </p>

            <h4>Core Values:</h4>
            <ul className="custom-list">
              <li>
                <strong>Innovation:</strong> Redefining possibilities with breakthrough technologies.
              </li>
              <li>
                <strong>Sustainability:</strong> Building a better future through affordable & efficient solutions.
              </li>
              <li>
                <strong>Customer-Centricity:</strong> Fostering enduring relationships with our clients & partners.
              </li>
            </ul>

            <p>
              As an innovative company, we prioritize independence, stability,
              and long-term partnerships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
