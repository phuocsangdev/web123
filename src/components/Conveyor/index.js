import React from 'react';
import classNames from 'classnames/bind';
import { Carousel } from 'react-bootstrap';





function Conveyor() {
  return <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-asm/banner-062022/860x280-pmce-mask-sheet-062022-2.webp"
        alt="First slide"
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-asm/banner-062022/860x280-covid-kit-mua2tang1-062022-01-2.webp"
        alt="Second slide"
      />

      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-asm/banner-072022/banner-desktop-860x280-1.webp"
        alt="Third slide"
      />

      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>



}


export default Conveyor;