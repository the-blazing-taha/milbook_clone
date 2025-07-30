


const RuggedTabletsSection = () => {
  return (
   <section
  style={{
    backgroundImage: 'linear-gradient(to bottom, #114491ff 0%, #212529 90%)',
    padding: '50px 0',
  }}
>
  <div className="container text-white">
    {/* Rugged Tablets */}
    <h2 className="text-center mb-5 fw-bold" style={{ fontFamily: 'Arial, sans-serif' }}>
      Rugged Tablets
    </h2>

    <div className="row align-items-center mb-5">
      <div className="col-md-6 text-center">
        <img
          className="img-fluid"
          src="https://www.milbook.pl/wp-content/uploads/2025/02/rugged-tablet.webp"
          alt="Rugged Tablet"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/600x400/666666/FFFFFF?text=Image+Not+Found";
          }}
        />
      </div>
      <div className="col-md-6" style={{fontSize: '18px',fontFamily: 'Arial, sans-serif'}}>
        <p>
          MILBOOK Rugged Tablets are available in a wide range of sizes from 8 to 14-inches and support
          different systems to meet customers' diverse needs.
        </p>
        <p>
          Their outstanding features: large screen, carrier equipment, replaceable long-life battery,
          complete communication network support, adaptability to wireless situations make them an
          indispensable solution for people working in harsh conditions.
        </p>
        <p>
          Mainly used in automobile inspection, emergency, rescue and combat vehicles, chemical,
          petroleum, electric and other industries.
        </p>
      </div>
    </div>

    {/* Rugged Notebooks */}
    <h2 className="text-center mb-5 fw-bold" style={{ fontFamily: 'Arial, sans-serif' }}>
      Rugged Notebooks
    </h2>

    <div className="row align-items-center flex-md-row-reverse">
      <div className="col-md-6 text-center">
        <img
          className="img-fluid"
          src="https://www.milbook.pl/wp-content/uploads/2025/02/rugged-notebook.webp"
          alt="Rugged Notebook"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/600x400/666666/FFFFFF?text=Image+Not+Found";
          }}
        />
      </div>
      <div className="col-md-5" style={{fontSize: '18px',fontFamily: 'Arial, sans-serif'}}>
        <p>
          MILBOOK Rugged Notebooks deliver high performance with Intel i5/i7 processors and Windows
          10/11, ensuring compatibility with industry software. They feature rich interfaces, including
          network ports, with the option to modify industrial interfaces to aviation-grade upon request.
        </p>
        <p>
          Equipped with features like extended battery life and a dual-battery design, they ensure
          continuous, efficient field operations. MILBOOK laptops withstand extreme conditions,
          demonstrating resilience, adaptability, and longevity.
        </p>
        <p>
          Ideal for surveying, police, military, mapping, shipbuilding, and the electric, petroleum, and
          chemical industries. They meet durability standards set by the European Commission and US
          Military specifications.
        </p>
      </div>
    </div>
  </div>
</section>

  );
};

export default RuggedTabletsSection;