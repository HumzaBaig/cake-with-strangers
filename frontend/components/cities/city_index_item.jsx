import React from 'react';
import { Link } from 'react-router';


const CityIndexItem = ({ city }) => {

  const divStyle = {backgroundImage: `url(${city.pic_url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: '50%'
  };


  return (
    <div className="city-index-item">
      <Link to={`/cities/${city.id}`}>
        <div className="city-pic"
              style={divStyle}><span className="city-name">{city.name}</span></div>
      </Link>
    </div>
  );
};

export default CityIndexItem;
