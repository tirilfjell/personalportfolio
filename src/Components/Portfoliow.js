import React, { Component } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <h1>Check Out Some of My Works.</h1>

        <React.Fragment>
          <div className="rootstyles">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true
              }}
              navigation={true}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={require("../images/annaoren.png")} alt="test img" />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={require("../images/piratpartiet.png")}
                  alt="Piratpartet bilde"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img src={require("../images/mapbox.png")} alt="mapbox kart" />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={require("../images/weatherApp.JPG")}
                  alt="react native app bilde"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img src={require("../images/website.png")} alt="my website" />
              </SwiperSlide>
            </Swiper>
          </div>
        </React.Fragment>
      </section>
    );
  }
}

export default Portfolio;
