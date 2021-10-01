import React from 'react';
import Title from '../../ComponentLayout/Title';

export default function OurTeam() {
  const teamData = [
    {
      name: 'Andika Lukmana',
      position: 'Commisioner',
      photo: '/assets/photos/andika-lukmana.png',
    },
    {
      name: 'Rachmat Wahyudi.SE,MBA,AK.CA',
      position: 'CEO',
      photo: '/assets/photos/rachmad-wahyudi.png',
    },
    {
      name: 'Reza Pahlawan.SE',
      position: 'VP Corfin & IB',
      photo: '/assets/photos/reza-pahlawan.png',
    },
  ];

  return (
    <div className="our-team">
      <Title title="Team" />
      <div className="container">
        <div className="team-profile">
          {teamData.map((val, idx) => (
            <div key={idx} className="card-wrapper">
              <div className="profile-card">
                <div className="image-container">
                  <img
                    src={val.photo}
                    className="profile-photo"
                    alt={`${val.name}`}
                  />
                  <span className="position">{val.position}</span>
                </div>
                <div className="name-container">
                  <span>{val.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
