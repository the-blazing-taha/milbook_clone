import "./milbookf10.css";
import { Row } from "react-bootstrap";
import Middleline from "../components/middleline";
import Leftline from "../components/leftline";
import Features from "../components/features";
import ProductDescription from "../components/productDescription";

export default function Milbook() {
  const features = [
    [
      {
        f1: "The Destiny 2 Build Recommendation System stands as an AI-powered solution designed to elevate the gameplay experience for Destiny 2 enthusiasts. It serves as a guiding beacon, offering personalized build suggestions meticulously tailored to optimize player performance across diverse in-game activities.",
        listtype: "none",
        title:"Tailored Build Recommendations for Destiny 2 Players"
      }
    ],
    [
      {
        f1: "At its core, the system meticulously dissects the myriad permutations of exotic armor, along with exotic and legendary weapons—scrutinizing their diverse array of perks and attributes. This granular analysis forms the foundation for crafting optimized combinations, ensuring players harness the full potential of their gear arsenal.",
        listtype: "none",
        title:"Analyzing Gear and Perks for Precision:"
      }
    ],
    [
      {
        f1: "The system's prowess extends beyond mere recommendations; it endeavors to align with players' preferences and gameplay styles. By deciphering preferred playstyles and in-game activities, it tailors its suggestions, resonating with individual gaming inclinations.",
        listtype: "none",
        title:"Player-Centric Customization"
      },
    ],
    [
      {
        f1: "Efficiency and Effectiveness: By curating optimized builds, the system empowers players with loadouts finely tuned for maximum efficiency and effectiveness in various in-game scenarios.",
        f2: "Enhanced Player Agency: Offering tailored suggestions based on individual preferences amplifies player agency, fostering a sense of ownership over their gameplay experience.",
        f3: "Streamlined Decision-Making: Simplifying the complex process of selecting gear combinations streamlines decision-making, enabling players to focus more on gameplay strategies.",
        title:"Elevating the Gameplay Experience"
      },
    ],
    [
      {
        f1: "Augmenting Player Engagement: It serves as a catalyst, invigorating player engagement by optimizing gear choices and amplifying the joy of experimentation.",
        f2: "Community Empowerment: Beyond individual gameplay, it fosters a communal ecosystem, encouraging knowledge-sharing and camaraderie among Destiny 2 enthusiasts.",
        title:"Enriching the Destiny 2 Universe:"
      },
    ],
    [
      {
        f1: "In essence, this system stands as a beacon of precision and personalization within the Destiny 2 cosmos, offering players not just recommendations but a gateway to a more immersive and empowered gaming experience.",
        listtype: "none",
        title:"Conclusion"
      },
    ],
  ];
  const images = [
    {
      name: "Windows",
      src: "https://www.milbook.pl/wp-content/uploads/2025/01/Windows.png",
    },
    {
      name: "IP65",
      src: "https://www.milbook.pl/wp-content/uploads/2025/01/IP65.png",
    },
    {
      name: "GNSS",
      src: "https://www.milbook.pl/wp-content/uploads/2025/01/GNSS.png",
    },
    {
      name: "Dual-battery",
      src: "https://www.milbook.pl/wp-content/uploads/2025/01/Dual-battery.png",
    },
    {
      name: "Fingerprint",
      src: "https://www.milbook.pl/wp-content/uploads/2025/01/Camera.png",
    },
    {
      name: "Field Service",
      src: "https://www.milbook.pl/wp-content/uploads/2025/01/NFC.png",
    },
    {
      name: "Logistics",
      src: "https://www.milbook.pl/wp-content/uploads/2025/01/5G.png",
    },
    {
      name: "Healthcare",
      src: "https://www.milbook.pl/wp-content/uploads/2025/01/5G.png",
    },
    {
      name: "Bluetooth",
      src: "https://www.milbook.pl/wp-content/uploads/2025/01/icon-Bluetooth.png",
    },
    {
      name: "Wifi",
      src: "https://www.milbook.pl/wp-content/uploads/2025/01/Wi-Fi.png",
    },
  ];

  return (
    <section className="milbook-f10-section">
      <div
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #114491ff 0%, #212529 90%)",
          padding: "20px",
          textAlign: "start",
        }}
      >
        <h1 className="milbook-f10-title" style={{ fontSize: "26px" }}>
          Tablet <b>Milbook F10</b>, 10.1 inch Rugged Tablet
        </h1>
        <p className="milbook-f10-description">
          MILBOOK are durable and extremely efficient, portable, rugged
          computers designed for hard work in outdoor and industrial
          environment.
        </p>

        <div className="row align-items-center flex-md-row-reverse">
          <div className="col-md-6 text-center">
            <img
              style={{ width: "70%", maxWidth: "600px" }}
              className="img-fluid"
              src="https://www.milbook.pl/wp-content/uploads/2025/01/notebook-milbook-R14.webp"
              alt="Rugged Notebook"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/600x400/666666/FFFFFF?text=Image+Not+Found";
              }}
            />

            {/* <h2
              style={{
                color: "white",
                textAlign: "left",
                marginBottom: "10px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Elevating the Gameplay Experience
            </h2>
            <Leftline />

            <Features feature={features[3]} /> */}

              <ProductDescription description={features[3][0]} />
              <ProductDescription description={features[4][0]} />
          </div>

          <div
            className="col-md-4"
            style={{ margin: "0 auto", maxWidth: "1100px", marginTop: "30px" }}
          >
            <h2
              style={{
                color: "white",
                textAlign: "left",
                marginBottom: "10px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Tailored Build Recommendations for Destiny 2 Players
            </h2>
            <Leftline />

            <Features feature={features[0]} />

            <ProductDescription description={features[1][0]} />

            {/* <h2
            style={{
              color: "white",
              textAlign: "left",
              marginBottom: "10px",
              fontSize: "20px",
              fontWeight: "bold",
              marginTop: "40px",
            }}
          >
            Analyzing Gear and Perks for Precision:
          </h2>
         <Leftline />
         
          <Features feature={features[1]} /> */}

            <h2
              style={{
                color: "white",
                textAlign: "left",
                marginBottom: "10px",
                fontSize: "20px",
                fontWeight: "bold",
                marginTop: "40px",
              }}
            >
              Player-Centric Customization
            </h2>
            <Leftline />

            <Features feature={features[2]} />

            <h2
              style={{
                color: "white",
                textAlign: "left",
                marginBottom: "10px",
                fontSize: "20px",
                fontWeight: "bold",
                marginTop: "40px",
              }}
            >
              Conclusion
            </h2>
            <Leftline />

            <Features feature={features[5]} />

            <button className="button">
              <span>Specification PDF </span>
            </button>
            <button className="button">
              <span>Get a Quote </span>
            </button>
          </div>
        </div>

        <Row className="justify-content-center">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)", // 5 columns
              gap: "20px",
              justifyItems: "center", // center items within each column
              width: "60%",
              maxWidth: "1200px", // optional, for content width limit
              margin: "0 auto",
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                style={{ textAlign: "center", marginTop: "30px" }}
              >
                <img
                  src={image.src}
                  alt={image.name}
                  style={{
                    width: "100%",
                    maxWidth: "70px",
                    height: "70px",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
                <h5
                  style={{
                    padding: "20px 0 0",
                    color: "white",
                    fontSize: "14px",
                  }}
                >
                  {image.name}
                </h5>
              </div>
            ))}
          </div>
        </Row>

        <Middleline />

        <div
          style={{
            fontSize: "20px",
            color: "white",
            textAlign: "center",
            padding: "20px 10px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <span>Should you have further questions, please contact us at:</span>
          {/* <MDBIcon
                icon="envelope"
                style={{
                  color: "#0d6efd",
                  fontSize: "20px",
                }}
              /> */}
          <a
            href="mailto:info@milbook.pl"
            style={{
              color: "#0d6efd",
              textDecoration: "none",
              fontSize: "20px",
              fontFamily: "Arial, sans-serif",
            }}
          >
            info@milbook.pl
          </a>
        </div>
      </div>
    </section>
  );
}
