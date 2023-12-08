import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

function CarouselContainer() {
  return (
    <div style={{display: 'block', width: '98%', padding: 30, height:'60%', marginLeft:'20px' }}>
    <Carousel>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100"
            src="https://movies.sterkinekor.co.za/CDN/media/entity/get/FilmTitleGraphic/HO00002597?referenceScheme=HeadOffice&allowPlaceHolder=true"
            alt="Image One"
            />
            <Carousel.Caption>
                <h2>Ant Man 3 Quantumania</h2>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000} >
            <img className="d-block w-100" src="https://www.carscoops.com/wp-content/uploads/2023/01/Fast-X-a.jpg" alt="Image One" style={{height: '40%'}}/>
            <Carousel.Caption>
                <h2>Fast X</h2>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000} >
            <img className="d-block w-100" src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/05/jackie-chan-john-cena-in-hidden-strike.jpg" 
              alt="Image One" style={{height: '40%'}}/>
            <Carousel.Caption>
                <h2>Hidden Strike </h2>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000} >
            <img className="d-block w-100" src="https://www.bollywoodhungama.com/wp-content/uploads/2020/08/WhatsApp-Image-2023-06-15-at-1.28.59-PM.jpeg
" 
              alt="Image One" style={{height: '40%'}}/>
            <Carousel.Caption>
                <h2>adipurush</h2>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000} >
            <img className="d-block w-100" src="https://images.hindustantimes.com/img/2022/02/21/1600x900/samantha_ruth_prabhu_1645417513887_1645417522208.png" 
              alt="Image One" style={{height: '40%'}}/>
            <Carousel.Caption>
                <h2>Shaakuntalam </h2>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
</div>
  )
}
export default CarouselContainer