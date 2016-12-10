import React from 'react';
import CityIndexItem from './city_index_item';

class Cities extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let cityItems = this.props.cities.map( (city, idx) => {
      return (<CityIndexItem
                key={idx}
                city={city}/>);
    });

    return (
      <div className="container">
        <section className="above-cities">
          <div className="where-div">
            <h1 className="where-header">Where you at?</h1>
            <p className="where-sentence">Choose yo hood</p>
          </div>
        </section>
        <div className="cities-container">
          <section className="cities-index">
            {cityItems}
          </section>
        </div>
      </div>
    );
  }
}

export default Cities;
