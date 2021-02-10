import React from "react";
import Swiper, { Autoplay } from "swiper";

import "swiper/swiper-bundle.min.css";
import "./ChampSlider.css";

class ChampSlider extends React.Component {
  componentDidMount() {
    Swiper.use([Autoplay]);

    this.thumbGallery = new Swiper(".gallery-thumbs", {
      direction: "horizontal",
      mousewheel: true,
      centeredSlides: true,
      keyboard: {
        enabled: true,
      },
      spaceBetween: 15,
      slidesPerView: 3,
      autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
      breakpoints: {
        780: {
          direction: "vertical",
          slidesPerView: 4,
          spaceBetween: 20,
          centeredSlides: true,
        },
      },
    });

    this.topGallery = new Swiper(".gallery-top", {
      effect: "fade",
      spaceBetween: 0,
      autoplay: {
        delay: 2600,
        disableOnInteraction: true,
      },
      thumbs: {
        swiper: this.thumbGallery,
      },
    });
  }

  render() {
    return (
      <div className='mega-container'>
        <h2>Available Skins</h2>
        <div className='big-container'>
          <div className='swiper-container gallery-top'>
            <div className='swiper-wrapper'>
              {this.props.skins.map(skin => {
                return (
                  <div className='swiper-slide swiper-slide-next' key={skin.id}>
                    <img
                      className='img-size'
                      src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.props.id}_${skin.num}.jpg`}
                      alt=''
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className='swiper-container gallery-thumbs'>
            <div
              className='swiper-wrapper'
              onClick={() => {
                this.thumbGallery.autoplay.stop();
              }}>
              {this.props.skins.map(skin => {
                return (
                  <div className='swiper-slide' key={skin.num}>
                    <img
                      className='img-size'
                      src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.props.id}_${skin.num}.jpg`}
                      alt=''
                    />
                    <p>{skin.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChampSlider;
