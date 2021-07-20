import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 37.90,
      lng: -95.7
    },
    zoom: 5
  };

  render() {
    return (
      <>
      <div style={{ height: '10vh', width: '100%' }}>
        SEARCH BAR
      </div>
      <div style={{ height: '90vh', width: '100%' }}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
      </>

    );
  }
}

export default SimpleMap;
