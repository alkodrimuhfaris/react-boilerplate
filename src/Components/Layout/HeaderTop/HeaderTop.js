import React from 'react';

export default function HeaderTop() {
  const highligt = [
    {number: '10', topText: 'Years', bottom: 'Experience'},
    {number: '01', topText: 'Current', bottom: 'Investment'},
    {number: '3', topText: 'Specialist', bottom: 'Industries'},
    {number: '7', topText: 'Valuable', bottom: 'Client'},
  ];

  return (
    <div className="header-top">
      <img
        className="header-top-img"
        src="/assets/photos/header-thumbnail.png"
        alt="header-thumbnail"
      />
      <div className="highligts">
        <div className="container">
          {highligt.map((val, idx) => (
            <div key={idx} className="highligt">
              <div className="number">
                <span>{val.number}</span>
              </div>
              <div className="words">
                <span>{val.topText}</span>
                <span>{val.bottom}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
