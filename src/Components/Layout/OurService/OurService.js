import React from 'react';
import Title from '../../ComponentLayout/Title';
import ServiceSlider from './ServiceSlider';

export default function OurService() {
  return (
    <div className="our-service">
      <Title title="Service" />
      <ServiceSlider />
    </div>
  );
}
