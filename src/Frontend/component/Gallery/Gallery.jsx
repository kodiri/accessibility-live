import './Gallery.css';
import Card from './Cards/Cards';
import data from './Cards/Data/Data'
import React, { Component } from 'react';

class Gallery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      services: data.services,
      service: data.services[0]
    }
  }

  nextCard = () => {
    const newIndex = this.state.service.index + 1;
    this.setState({
      service: data.services[newIndex]
    })
  }

  prevCard = () => {
    const newIndex = this.state.service.index - 1;
    this.setState({
      service: data.services[newIndex]
    })
  }

  render() {
    const { services, service } = this.state;
    return (
      <div className="layout">

        <div className="row">
          <div className={`cards-slider active-slide-${service.index}`}>
          <div className="buttons">
            <button
              className="previousButton"
              onClick={() => this.prevCard()}
              disabled={service.index === 0}><i class="fas fa-chevron-circle-left"></i></button>
            <button
              className="nextButton"
              onClick={() => this.nextCard()}
              disabled={service.index === data.services.length - 1}><i class="fas fa-chevron-circle-right"></i></button>
          </div>
            <div className="cards-slider-wrapper" style={{
              'transform': `translateX(-${service.index * (100 / services.length)}%)`
            }}>
              {
                services.map(service =>
                  <div className="column">
                    <Card key={service._id} service={service}></Card>
                  </div>
                )
              }

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
