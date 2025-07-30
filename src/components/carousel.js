import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './carousle.css'; // custom CSS for arrow & indicator styling

function Carousel1({ images }) {
  return (
    <Carousel fade className="custom-carousel">
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 carousel-img"
            src='https://www.milbook.pl/wp-content/uploads/2025/02/top-milbook.webp'
            alt={image.alt}
          />
          <Carousel.Caption  className="custom-caption">
            <h1>{image.cap1}</h1>
            <p>{image.cap2}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carousel1;
