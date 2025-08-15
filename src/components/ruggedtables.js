import nova from '../pictures/azr_nova.png';

const RuggedTabletsSection = () => {
  return (
    <section
      style={{
  
padding: "30px 70px 0",
        backgroundImage:
          "linear-gradient(to bottom, #114491ff 0%, #212529 90%)",
      }}
    >
      <div className="text-white">
        {/* Rugged Tablets */}
        <h2
          className="text-center mb-5 fw-bold"
          style={{marginTop:"1px", fontFamily: "Arial, sans-serif" }}
        >
          AZR Nova
        </h2>

        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-center">
            <img
              style={{height:"440px"}}
              className="img-fluid"
              src={nova}
              alt="Rugged Tablet"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/600x400/666666/FFFFFF?text=Image+Not+Found";
              }}
            />
          </div>
          <div
            className="col-md-6"
            style={{ fontSize: "18px", fontFamily: "Arial, sans-serif" }}
          >
           <ul>
               <li>Processing Core: Zynq 7000 (dual-core ARM + FPGA)</li>
               <li>RF Front-End:2 x Transmit Channels</li>
               <li>2 x Receive Channels</li>
               <li>Bandwidth: up to 30 MHz per channel</li>
               <li>Frequency Range: 70 MHz – 6 GHz</li>
               <li>Interfaces: Gigabit Ethernet</li>
               <li>Boot Mode: JTAG, Flash</li>
               <li>GPS Module: Integrated for time synchronization</li>
               <li>Software Support: Customizable FPGA bitstream with bare metal SDDK code in C</li>
               <li>Form Factor: Compact</li>
               <li>Power Supply: 12V DC/5V DC</li>
           </ul>

          </div>
        </div>

        {/* Rugged Notebooks */}
        {/*<h2*/}
        {/*  className="text-center mb-3 fw-bold"*/}
        {/*  style={{ fontFamily: "Arial, sans-serif" }}*/}
        {/*>*/}
        {/*  Rugged Notebooks*/}
        {/*</h2>*/}

        <div className="row align-items-center flex-md-row-reverse">
          {/*<div className="col-md-6 text-center">*/}
          {/*  <img*/}
          {/*    style={{height:"440px"}}*/}
          {/*    className="img-fluid"*/}
          {/*    src="https://www.milbook.pl/wp-content/uploads/2025/02/rugged-notebook.webp"*/}
          {/*    alt="Rugged Notebook"*/}
          {/*    onError={(e) => {*/}
          {/*      e.target.onerror = null;*/}
          {/*      e.target.src =*/}
          {/*        "https://placehold.co/600x400/666666/FFFFFF?text=Image+Not+Found";*/}
          {/*    }}*/}
          {/*  />*/}
          {/*</div>*/}
          {/*<div*/}
          {/*  className="col-md-5"*/}
          {/*  style={{ fontSize: "18px", fontFamily: "Arial, sans-serif" }}*/}
          {/*>*/}
          {/*  <p>*/}
          {/*    MILBOOK Rugged Notebooks deliver high performance with Intel i5/i7*/}
          {/*    processors and Windows 10/11, ensuring compatibility with industry*/}
          {/*    software. They feature rich interfaces, including network ports,*/}
          {/*    with the option to modify industrial interfaces to aviation-grade*/}
          {/*    upon request.*/}
          {/*  </p>*/}
          {/*  <p>*/}
          {/*    Equipped with features like extended battery life and a*/}
          {/*    dual-battery design, they ensure continuous, efficient field*/}
          {/*    operations. MILBOOK laptops withstand extreme conditions,*/}
          {/*    demonstrating resilience, adaptability, and longevity.*/}
          {/*  </p>*/}
          {/*  <p>*/}
          {/*    Ideal for surveying, police, military, mapping, shipbuilding, and*/}
          {/*    the electric, petroleum, and chemical industries. They meet*/}
          {/*    durability standards set by the European Commission and US*/}
          {/*    Military specifications.*/}
          {/*  </p>*/}
          {/*</div>*/}
        </div>
      </div>
    </section>
  );
};

export default RuggedTabletsSection;
