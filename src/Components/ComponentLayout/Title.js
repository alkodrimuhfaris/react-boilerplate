import React from 'react';

export default function Title({title = 'Service'}) {
  return (
    <div className="title">
      <div className="title-container">
        <h1>
          <span>Our</span> {title}
        </h1>
      </div>
    </div>
  );
}
