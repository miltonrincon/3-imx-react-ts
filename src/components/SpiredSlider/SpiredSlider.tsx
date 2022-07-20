import { useState, useEffect, useRef } from "react";
import Slider from 'react-slick';
import "./SpiredSlider.scss"
const SpiredSlider = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const settingsImgSlider= {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // cssEase: "linear",
    draggable: true,
    arrows: true,
    asNavFor: nav2,
    ref: slider1
  };
  const settingsInfoSlider = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // draggable: false,
    arrows: false,
    asNavFor: nav1,
    ref: slider2,
  };
  return (
    <div className="SpiredSlider">
      <h2>Slider Syncing (AsNavFor)</h2>
      <h4>First Slider</h4>
      <Slider
        {...settingsImgSlider}
      >
        <div>
          <div className="slide-el-box">
            <img className="slide-el-img" src="/dummy_slider_image_1.png" alt="slider-el" />
          </div>
        </div>
        <div>
          <div className="slide-el-box">
            <img className="slide-el-img" src="/dummy_slider_image_2.png" alt="slider-el" />
          </div>
        </div>
        <div>
          <div className="slide-el-box">
            <img className="slide-el-img" src="/dummy_slider_image_3.png" alt="slider-el" />
          </div>
        </div>
        <div>
          <div className="slide-el-box">
            <img className="slide-el-img" src="/dummy_slider_image_4.png" alt="slider-el" />
          </div>
        </div>
        <div>
          <div className="slide-el-box">
            <img className="slide-el-img" src="/dummy_slider_image_5.png" alt="slider-el" />
          </div>
        </div>
      </Slider>
      <h4>Second Slider</h4>
      <Slider
        {...settingsInfoSlider}
      >
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
      </Slider>
    </div>
  );
}

export default SpiredSlider
