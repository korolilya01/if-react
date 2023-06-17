import React from 'react';

export const DestItem = ({ data }) =>
  data.map((item) => (
    <div key={item.id} className="dest__item">
      <div className="item-link">
        <a href="#">
          <img className="dest__img" src={item.src} alt={item.alt} />
          <button type="submit" className="but__dest">
            Book now
          </button>
        </a>
      </div>
      <a href="#">
        {item?.dest} {item?.city} {item.country}
      </a>
    </div>
  ));
