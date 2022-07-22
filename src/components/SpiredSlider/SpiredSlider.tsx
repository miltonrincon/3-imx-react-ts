import { useState, useEffect, useRef, Key } from "react";
import Slider from 'react-slick';
import { ReactComponent as PrevIcon } from "assets/icons/slick_prev.svg";
import { ReactComponent as NextIcon } from "assets/icons/slick_next.svg";
import "./SpiredSlider.scss"
const SpiredSlider = ({sliderData, mainSlideHeight=340}:{sliderData: any,mainSlideHeight?: number}) => {

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  interface SpiredSliderArrowProps  {
    className?: string;
    style?: any;
    onClick?: any;
  }
  const SpiredSliderNextArrow = (props: SpiredSliderArrowProps) => {
    const { className, style, onClick } = props;
    return (
      <button
        className={`${className} spired-slider-next`}
        style={{ ...style}}
        onClick={onClick}
      >
        <NextIcon/>
      </button>
    );
  }
  
  const SpiredSliderPrevArrow = (props: SpiredSliderArrowProps) => {
    const { className, style, onClick } = props;
    return (
      <button
        className={`${className} spired-slider-prev`}
        style={{ ...style}}
        onClick={onClick}
      >
        <PrevIcon/>
      </button>
    );
  }
  const settingsImgSlider= {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    draggable: true,
    asNavFor: nav2,
    ref: slider1,
    class: 'imageslider',
    nextArrow: <SpiredSliderNextArrow />,
    prevArrow: <SpiredSliderPrevArrow />
  };
  const settingsInfoSlider = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 0,
    draggable: false,
    arrows: false,
    asNavFor: nav1,
    ref: slider2,
  };
  interface SpiredImageSlideProps {
    imageUrl: string
  }
  const SpiredImageSlide = ({imageUrl}: SpiredImageSlideProps) => {
    return (
      <div className="slide-el-box" style={{height: `${mainSlideHeight}px`}}>
        <img className="slide-el-img" src={imageUrl} alt="slider-el" />
      </div>
    );
  }
  interface SpiredInfoElementInfo {
    val: string,
    label: string
  }
  interface SpiredInfoSlideProps {
    name: string,
    info?: Array <SpiredInfoElementInfo>
  }
  const SpiredInfoSlide = ({name, info }: SpiredInfoSlideProps) => {
    return (
      <div className="info-slide-container">
        <div className="info-slide-title">
          {name}
        </div>
        <div className="info-slide-data-container">
          {info&&info.length ? (
            info.map(elinfo=>(
              <div className="info-slide-data-element" key={elinfo.label}>
                <div className="el-val">
                  {elinfo.val}
                </div>
                <div className="el-label">
                  {elinfo.label}
                </div>
              </div>
            ))
          ):(
            null
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="SpiredSlider">
      <div className="image-slider-box">
        <div className="smog-1"></div>
        <div className="smog-2"></div>
        <Slider
          {...settingsImgSlider}
        >
          {sliderData.map((el: any)=>(
            <SpiredImageSlide key={el.id} imageUrl={el.imageUrl}/>
          ))}
        </Slider>
      </div>
      <div className="info-slider-box">
        <Slider
          {...settingsInfoSlider}
        >
          {sliderData.map((el: any)=>(
            <SpiredInfoSlide key={el.id} name={el.name} info={el.info}/>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SpiredSlider
