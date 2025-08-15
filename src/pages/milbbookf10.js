import "./milbookf10.css";
// import { Row } from "react-bootstrap";
import Middleline from "../components/middleline";
import nova from '../pictures/azr_nova.png';
import processor from '../pictures/processor.png';
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
        f1: "Processing Core: Zynq 7000 (dual-core ARM + FPGA)",
          f2:"RF Front-End:2 x Transmit Channels",
        f3: "2 x Receive Channels.",
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
         <b>Software Defined Radio</b>
        </h1>
        <p className="milbook-f10-description">
            A project for a telecommunications company. Utilizing company data which predicts customer churn based on company features and pricing.
        </p>

        <div className="row align-items-center flex-md-row-reverse">
          <div className="col-md-6 text-center">
            <img
              style={{ width: "70%", maxWidth: "600px" }}
              className="img-fluid"
              src={processor}
              alt="Rugged Notebook"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/600x400/666666/FFFFFF?text=Image+Not+Found";
              }}
            />
              <ProductDescription description={features[3][0]} />
              <ProductDescription description={features[4][0]} />
          </div>

          <div
            className="col-md-4"
            style={{ margin: "0 auto", maxWidth: "1100px", marginTop: "30px" }}
          >

              <ProductDescription description={features[0][0]} />
              <ProductDescription description={features[1][0]} />
              <ProductDescription description={features[2][0]} />
              <ProductDescription description={features[5][0]} />

            <a href="/contact">
                <button className="button">
                    <span>Contact Us</span>
                </button>
            </a>


          </div>
        </div>

        {/*<Row className="justify-content-center">*/}
        {/*  <div*/}
        {/*    style={{*/}
        {/*      display: "grid",*/}
        {/*      gridTemplateColumns: "repeat(5, 1fr)", // 5 columns*/}
        {/*      gap: "20px",*/}
        {/*      justifyItems: "center", // center items within each column*/}
        {/*      width: "60%",*/}
        {/*      maxWidth: "1200px", // optional, for content width limit*/}
        {/*      margin: "0 auto",*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    {images.map((image, index) => (*/}
        {/*      <div*/}
        {/*        key={index}*/}
        {/*        style={{ textAlign: "center", marginTop: "30px" }}*/}
        {/*      >*/}
        {/*        <img*/}
        {/*          src={image.src}*/}
        {/*          alt={image.name}*/}
        {/*          style={{*/}
        {/*            width: "100%",*/}
        {/*            maxWidth: "70px",*/}
        {/*            height: "70px",*/}
        {/*            objectFit: "cover",*/}
        {/*            borderRadius: "4px",*/}
        {/*          }}*/}
        {/*        />*/}
        {/*        <h5*/}
        {/*          style={{*/}
        {/*            padding: "20px 0 0",*/}
        {/*            color: "white",*/}
        {/*            fontSize: "14px",*/}
        {/*          }}*/}
        {/*        >*/}
        {/*          {image.name}*/}
        {/*        </h5>*/}
        {/*      </div>*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*</Row>*/}

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
            href=""
            style={{
              color: "#0d6efd",
              textDecoration: "none",
              fontSize: "20px",
              fontFamily: "Arial, sans-serif",
            }}
          >
              info@aizynq.com
          </a>
        </div>
      </div>
    </section>
  );
}





export function AZR_Nova() {
    const features = [
        [
            {
                f1: "Processing Core: Zynq 7000 (dual-core ARM + FPGA).",
                f2: "RF Front-End:2 x Transmit Channels",
                f3: "2 x Receive Channels",
                f4: "Frequency Range: 70 MHz – 6 GHz",
                f5: "Interfaces: Gigabit Ethernet",
                f6:"Boot Mode: JTAG, Flash",
                f7:"GPS Module: Integrated for time synchronization",
                f8:"Software Support: Customizable FPGA bitstream with bare metal SDDK code in C",
                f9:"Form Factor: Compact",
                f10:"Power Supply: 12V DC/5V DC",
                title:"Features"
            }
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
                    Custom SDR AZR Nova 2060 with Zynq 7000 FPGA and AD9361 (2Tx, 2Rx)
                </h1>
                {/*<p className="milbook-f10-description">*/}
                {/*    MILBOOK are durable and extremely efficient, portable, rugged*/}
                {/*    computers designed for hard work in outdoor and industrial*/}
                {/*    environment.*/}
                {/*</p>*/}

                <div className="row align-items-center flex-md-row-reverse">
                    <div className="col-md-6 text-center">
                        <img
                            style={{ width: "70%", maxWidth: "600px" }}
                            className="img-fluid"
                            src={nova}
                            alt="Rugged Notebook"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src =
                                    "https://placehold.co/600x400/666666/FFFFFF?text=Image+Not+Found";
                            }}
                        />
                        {/*<ProductDescription description={features[3][0]} />*/}
                        {/*<ProductDescription description={features[4][0]} />*/}
                    </div>

                    <div
                        className="col-md-4"
                        style={{ margin: "0 auto", maxWidth: "1100px", marginTop: "30px" }}
                    >

                        <ProductDescription description={features[0][0]} />
                        {/*<ProductDescription description={features[1][0]} />*/}
                        {/*<ProductDescription description={features[2][0]} />*/}
                        {/*<ProductDescription description={features[5][0]} />*/}


                        <a href="/contact">
                            <button className="button">
                                <span>Contact Us</span>
                            </button>
                        </a>

                    </div>
                </div>

                {/*<Row className="justify-content-center">*/}
                {/*    <div*/}
                {/*        style={{*/}
                {/*            display: "grid",*/}
                {/*            gridTemplateColumns: "repeat(5, 1fr)", // 5 columns*/}
                {/*            gap: "20px",*/}
                {/*            justifyItems: "center", // center items within each column*/}
                {/*            width: "60%",*/}
                {/*            maxWidth: "1200px", // optional, for content width limit*/}
                {/*            margin: "0 auto",*/}
                {/*        }}*/}
                {/*    >*/}
                {/*        {images.map((image, index) => (*/}
                {/*            <div*/}
                {/*                key={index}*/}
                {/*                style={{ textAlign: "center", marginTop: "30px" }}*/}
                {/*            >*/}
                {/*                <img*/}
                {/*                    src={image.src}*/}
                {/*                    alt={image.name}*/}
                {/*                    style={{*/}
                {/*                        width: "100%",*/}
                {/*                        maxWidth: "70px",*/}
                {/*                        height: "70px",*/}
                {/*                        objectFit: "cover",*/}
                {/*                        borderRadius: "4px",*/}
                {/*                    }}*/}
                {/*                />*/}
                {/*                <h5*/}
                {/*                    style={{*/}
                {/*                        padding: "20px 0 0",*/}
                {/*                        color: "white",*/}
                {/*                        fontSize: "14px",*/}
                {/*                    }}*/}
                {/*                >*/}
                {/*                    {image.name}*/}
                {/*                </h5>*/}
                {/*            </div>*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*</Row>*/}

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
                        href=""
                        style={{
                            color: "#0d6efd",
                            textDecoration: "none",
                            fontSize: "20px",
                            fontFamily: "Arial, sans-serif",
                        }}
                    >
                        info@aizynq.com
                    </a>
                </div>
            </div>
        </section>
    );
}



export function System_on_board() {
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
                f1: "Processing Core: Zynq 7000 (dual-core ARM + FPGA)",
                f2:"RF Front-End:2 x Transmit Channels",
                f3: "2 x Receive Channels.",
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
                    <b>System on Board</b>
                </h1>
                <p className="milbook-f10-description">
                    Forecasting Project using machine learning on a Kaggle analysis for an E-commerce platform.
                </p>
                <div className="row align-items-center flex-md-row-reverse">
                    <div className="col-md-6 text-center">
                        <img
                            style={{ width: "70%", maxWidth: "600px" }}
                            className="img-fluid"
                            src={processor}
                            alt="Rugged Notebook"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src =
                                    "https://placehold.co/600x400/666666/FFFFFF?text=Image+Not+Found";
                            }}
                        />
                        <ProductDescription description={features[3][0]} />
                        <ProductDescription description={features[4][0]} />
                    </div>

                    <div
                        className="col-md-4"
                        style={{ margin: "0 auto", maxWidth: "1100px", marginTop: "30px" }}
                    >

                        <ProductDescription description={features[0][0]} />
                        <ProductDescription description={features[1][0]} />
                        <ProductDescription description={features[2][0]} />
                        <ProductDescription description={features[5][0]} />


                        <a href="/contact">
                            <button className="button">
                                <span>Contact Us</span>
                            </button>
                        </a>

                    </div>
                </div>

                {/*<Row className="justify-content-center">*/}
                {/*  <div*/}
                {/*    style={{*/}
                {/*      display: "grid",*/}
                {/*      gridTemplateColumns: "repeat(5, 1fr)", // 5 columns*/}
                {/*      gap: "20px",*/}
                {/*      justifyItems: "center", // center items within each column*/}
                {/*      width: "60%",*/}
                {/*      maxWidth: "1200px", // optional, for content width limit*/}
                {/*      margin: "0 auto",*/}
                {/*    }}*/}
                {/*  >*/}
                {/*    {images.map((image, index) => (*/}
                {/*      <div*/}
                {/*        key={index}*/}
                {/*        style={{ textAlign: "center", marginTop: "30px" }}*/}
                {/*      >*/}
                {/*        <img*/}
                {/*          src={image.src}*/}
                {/*          alt={image.name}*/}
                {/*          style={{*/}
                {/*            width: "100%",*/}
                {/*            maxWidth: "70px",*/}
                {/*            height: "70px",*/}
                {/*            objectFit: "cover",*/}
                {/*            borderRadius: "4px",*/}
                {/*          }}*/}
                {/*        />*/}
                {/*        <h5*/}
                {/*          style={{*/}
                {/*            padding: "20px 0 0",*/}
                {/*            color: "white",*/}
                {/*            fontSize: "14px",*/}
                {/*          }}*/}
                {/*        >*/}
                {/*          {image.name}*/}
                {/*        </h5>*/}
                {/*      </div>*/}
                {/*    ))}*/}
                {/*  </div>*/}
                {/*</Row>*/}

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
                        href=""
                        style={{
                            color: "#0d6efd",
                            textDecoration: "none",
                            fontSize: "20px",
                            fontFamily: "Arial, sans-serif",
                        }}
                    >
                        info@aizynq.com
                    </a>
                </div>
            </div>
        </section>
    );
}


export function Customized_platform() {
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
                f1: "Processing Core: Zynq 7000 (dual-core ARM + FPGA)",
                f2:"RF Front-End:2 x Transmit Channels",
                f3: "2 x Receive Channels.",
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
                    <b>Customized Platform</b>
                </h1>
                <p className="milbook-f10-description">
                    An AI search tool using langchain and the GPT framework. Uses used vehicle inventory data to answer, compare, and describe features of vehicles in stock to customers.                </p>
                <div className="row align-items-center flex-md-row-reverse">
                    <div className="col-md-6 text-center">
                        <img
                            style={{ width: "70%", maxWidth: "600px" }}
                            className="img-fluid"
                            src={processor}
                            alt="Rugged Notebook"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src =
                                    "https://placehold.co/600x400/666666/FFFFFF?text=Image+Not+Found";
                            }}
                        />
                        <ProductDescription description={features[3][0]} />
                        <ProductDescription description={features[4][0]} />
                    </div>

                    <div
                        className="col-md-4"
                        style={{ margin: "0 auto", maxWidth: "1100px", marginTop: "30px" }}
                    >

                        <ProductDescription description={features[0][0]} />
                        <ProductDescription description={features[1][0]} />
                        <ProductDescription description={features[2][0]} />
                        <ProductDescription description={features[5][0]} />

                        <a href="/contact">
                            <button className="button">
                                <span>Contact Us </span>
                            </button>
                        </a>
                    </div>
                </div>

                {/*<Row className="justify-content-center">*/}
                {/*  <div*/}
                {/*    style={{*/}
                {/*      display: "grid",*/}
                {/*      gridTemplateColumns: "repeat(5, 1fr)", // 5 columns*/}
                {/*      gap: "20px",*/}
                {/*      justifyItems: "center", // center items within each column*/}
                {/*      width: "60%",*/}
                {/*      maxWidth: "1200px", // optional, for content width limit*/}
                {/*      margin: "0 auto",*/}
                {/*    }}*/}
                {/*  >*/}
                {/*    {images.map((image, index) => (*/}
                {/*      <div*/}
                {/*        key={index}*/}
                {/*        style={{ textAlign: "center", marginTop: "30px" }}*/}
                {/*      >*/}
                {/*        <img*/}
                {/*          src={image.src}*/}
                {/*          alt={image.name}*/}
                {/*          style={{*/}
                {/*            width: "100%",*/}
                {/*            maxWidth: "70px",*/}
                {/*            height: "70px",*/}
                {/*            objectFit: "cover",*/}
                {/*            borderRadius: "4px",*/}
                {/*          }}*/}
                {/*        />*/}
                {/*        <h5*/}
                {/*          style={{*/}
                {/*            padding: "20px 0 0",*/}
                {/*            color: "white",*/}
                {/*            fontSize: "14px",*/}
                {/*          }}*/}
                {/*        >*/}
                {/*          {image.name}*/}
                {/*        </h5>*/}
                {/*      </div>*/}
                {/*    ))}*/}
                {/*  </div>*/}
                {/*</Row>*/}

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
                        href=""
                        style={{
                            color: "#0d6efd",
                            textDecoration: "none",
                            fontSize: "20px",
                            fontFamily: "Arial, sans-serif",
                        }}
                    >
                        info@aizynq.com
                    </a>
                </div>
            </div>
        </section>
    );
}

