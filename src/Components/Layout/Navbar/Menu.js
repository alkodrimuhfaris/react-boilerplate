import React from 'react';
import {useLocation, Link} from 'react-router-dom';

export default function Menu() {
  const {hash} = useLocation();

  const menuList = [
    {name: 'Home', hash: 'home'},
    {name: 'Service', hash: 'service'},
    {name: 'About Us', hash: 'about-us'},
    {name: 'Client', hash: 'client'},
    {name: 'Contact', hash: 'contact'},
  ];

  React.useEffect(() => {
    console.log(hash);
  }, [hash]);

  return (
    <ul className="menus">
      {menuList.map((val, idx) => (
        <li
          className={`menu ${hash === `#${val.hash}` ? 'selected' : ''}`}
          key={idx}
        >
          <Link
            className="item-menu"
            to={{
              hash: val.hash,
            }}
          >
            {val.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
