import React from 'react';
import SvgIcon from '../../ComponentLayout/SvgIcon';
import useComponentWidth from '../../../Helpers/useComponentWidth';

export default function SliderTrack({
  transition,
  carouselNum = 0,
  services = [],
  handleTouchStart = () => {},
  handleTouchMove = () => {},
  handleTouchEnd = () => {},
  onTransitionEnd = () => {},
}) {
  const [ref1, wRef1, _hRef1] = useComponentWidth();
  return (
    <div
      style={{
        transition,
        transform: `translate(-${carouselNum * wRef1}px, 0px)`,
      }}
      onTransitionEnd={onTransitionEnd}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="slider-track"
    >
      {services.map((val, idx) => (
        <div
          style={{
            left: `${wRef1 * idx}px`,
          }}
          key={idx}
          ref={idx === 0 ? ref1 : null}
          className="slider"
        >
          <div className="title-slide">
            <div className="icon-wrapper">
              <SvgIcon src={val.icon} className={['icon']} />
            </div>
            <div className="title-wrapper">
              <span>{val.title}</span>
            </div>
          </div>
          <div className="description">
            <p>{val.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
