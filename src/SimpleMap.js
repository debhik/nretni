import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import  Select  from 'react-select'
import city from './city'
import mapstyle from './mapstyle';


import Pin from './Pin.jsx';
const searchList = city.map(
(c) => {
  return{
   value: c.name,
   label: c.name,
   city1: c.city1,
   city2: c.city2,
   city3: c.city3,
   less: c.less,
  }
 }
);
const defaultMapOptions = {
  styles: mapstyle
};
class SimpleMap extends Component {
  static defaultProps = {

    center:{
      lat: 37.90,
      lng: -95.7
    },
    zoom: 5


  };
  constructor(props)
    {
        super(props);
        this.state = {
          selectedcity: null,
          selectedcity_lat: null,
          selectedcity_lng: null,
          city1: null,
          city1_lat: null,
          city1_lng: null,
          city2: null,
          city2_lat: null,
          city2_lng: null,
          city3: null,
          city3_lat: null,
          city3_lng: null,
          less: null,
          less_lat: null,
          less_lng: null,
        };
        this.handleChange = this.handleChange.bind(this)
        this.latlng1 = this.latlng1.bind(this)
        this.latlng2 = this.latlng2.bind(this)
        this.latlng3 = this.latlng3.bind(this)
        this.latlng4 = this.latlng4.bind(this)
        this.latlng5 = this.latlng5.bind(this)
    }



  latlng1 = () =>{
    const city = this.state.selectedcity;
    const url = "http://open.mapquestapi.com/geocoding/v1/address?key=TUpxVfVaLCzh7tTpraRRakiHTWQcsTqw&location=" + city;
    console.log(city);
     fetch(url)
        .then((res)=> res.json())
        .then(data => {
          console.log("done");
          this.setState({selectedcity_lat: data.results[0].locations[0].latLng.lat});
          this.setState({selectedcity_lng: data.results[0].locations[0].latLng.lng});
        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
    });
  }
  latlng2 = () =>{
    const city = this.state.less;
    const url = "http://open.mapquestapi.com/geocoding/v1/address?key=TUpxVfVaLCzh7tTpraRRakiHTWQcsTqw&location=" + city;
    console.log(city);
     fetch(url)
        .then((res)=> res.json())
        .then(data => {
          console.log("done");
          this.setState({less_lat: data.results[0].locations[0].latLng.lat});
          this.setState({less_lng: data.results[0].locations[0].latLng.lng});
        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
    });
  }
  latlng3 = () =>{
    const city = this.state.city1;
    const url = "http://open.mapquestapi.com/geocoding/v1/address?key=TUpxVfVaLCzh7tTpraRRakiHTWQcsTqw&location=" + city;
    console.log(city);
     fetch(url)
        .then((res)=> res.json())
        .then(data => {
          console.log("done");
          this.setState({city1_lat: data.results[0].locations[0].latLng.lat});
          this.setState({city1_lng: data.results[0].locations[0].latLng.lng});
        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
    });
  }
  latlng4 = () =>{
    const city = this.state.city2;
    const url = "http://open.mapquestapi.com/geocoding/v1/address?key=TUpxVfVaLCzh7tTpraRRakiHTWQcsTqw&location=" + city;
    console.log(city);
     fetch(url)
        .then((res)=> res.json())
        .then(data => {
          console.log("done");
          this.setState({city2_lat: data.results[0].locations[0].latLng.lat});
          this.setState({city2_lng: data.results[0].locations[0].latLng.lng});
        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
    });
  }
  latlng5 = () =>{
    const city = this.state.city3;
    const url = "http://open.mapquestapi.com/geocoding/v1/address?key=TUpxVfVaLCzh7tTpraRRakiHTWQcsTqw&location=" + city;
    console.log(city);
     fetch(url)
        .then((res)=> res.json())
        .then(data => {
          console.log("done");
          this.setState({city3_lat: data.results[0].locations[0].latLng.lat});
          this.setState({city3_lng: data.results[0].locations[0].latLng.lng});
        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
    });
  }


  handleChange = selected => {
    console.log(selected);
    this.setState({ selectedcity : selected.value } , ()=>{
      this.latlng1();
    });
    this.setState({ less : selected.less } , ()=>{
      this.latlng2();
    });
    this.setState({ city1 : selected.city1 } , ()=>{
      this.latlng3();
    });
    this.setState({ city2 : selected.city2 } , ()=>{
      this.latlng4();
    });
    this.setState({ city3 : selected.city3 } , ()=>{
      this.latlng5();
    });


  }
  marker1 = () =>{
    if(this.state.selectedcity_lat !== null){
        return <Pin
          lat={this.state.selectedcity_lat}
          lng={this.state.selectedcity_lng}
          text={this.state.selectedcity}
          style="1"
          />

    }
  }
  marker2 = () =>{
      if(this.state.less_lat !== null){
          return<Pin
            lat={this.state.less_lat}
            lng={this.state.less_lng}
            text={this.state.less}
            style="2"
            />
      }
  }
  marker3 = () =>{
        if(this.state.city1_lat !== null){
            return <Pin
              lat={this.state.city1_lat}
              lng={this.state.city1_lng}
              text={this.state.city1}
              style="3"
              />
        }
    }
    marker4 = () =>{
          if(this.state.city2_lat !== null){
              return <Pin
                lat={this.state.city2_lat}
                lng={this.state.city2_lng}
                text={this.state.city2}
                style="3"
                />
          }
    }
    marker5 = () =>{
            if(this.state.city3_lat !== null){
                return <Pin
                  lat={this.state.city3_lat}
                  lng={this.state.city3_lng}
                  style="3"
                  text={this.state.city3}
                  />
            }

  }
  render() {
    return (
      <>
      <div style={{ height: '10vh', width: '100%' }}>
      <Select
        value={this.selectedcity}
        options={searchList}
        onChange={this.handleChange}
        placeholder= "Search..."
        openMenuOnClick={false}
      />
      </div>
      <div style={{ height: '90vh', width: '100%' }}>
        <GoogleMap
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          defaultOptions={defaultMapOptions}
        >
          {this.marker1()}
          {this.marker2()}
          {this.marker3()}
          {this.marker4()}
          {this.marker5()}
        </GoogleMap>
      </div>
      </>

    );
  }
}

export default SimpleMap;
