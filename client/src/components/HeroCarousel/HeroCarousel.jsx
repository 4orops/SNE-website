import Carousel from 'react-bootstrap/Carousel';
import '../HeroCarousel/HeroCarousel.css';
import image1 from '../Assets/image1.jpg'
import image2 from '../Assets/image2.jpg'
import image3 from '../Assets/image3.jpg'

function HeroCarousel() {
  return (
    <Carousel data-bs-theme="dark">

    <Carousel.Item>
      <img 
          className="d-block w-100 opacity-75"
          src={image3}
          alt="Second slide"
        />
        <Carousel.Caption  style={{fontSize: '40px',
                      fontWeight: '500',
                      color: 'whitesmoke',
                      marginBottom: '250px',
                      paddingLeft: '650px'
          }}>
          <p>Studio Session</p>
          <p>
            Working On The Next Single.
          </p>
      </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100 opacity-75"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption style={{fontSize: '40px',
                      fontWeight: '500',
                      color: 'whitesmoke',
                      marginBottom: '350px',
                      paddingLeft: '650px'
          }}>
          <h5>S.N.E</h5>
          <p> Tshwala Bam, Hit Maker.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 opacity-50"
          src={image2}
          alt="Second slide"
        />
        <Carousel.Caption style={{paddingRight: '800px',
                                  marginBottom: '70px'
        }}>
        <a className="btn btn-primary display-2" href="https://open.spotify.com/search/tshwa?flow_ctx=73895685-4f6b-40e0-a720-9c96aed6af60%3A1717532240&creation_point=https%3A%2F%2Fopen.spotify.com%2Fsearch" target="_blank"> Listen Now </a>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default HeroCarousel;