import React, { Component } from "react";
import { GoogleMap, LoadScript, Data, Marker, MarkerClusterer } from "@react-google-maps/api";


const center = {
  lat: 47.78885012,
  lng: 35.21882057
};

const marker = {
  lat: 47.78885012,
  lng: 35.21882057
};
const labelObject = {
  text: "ЧП Джас",
  fontWeight: "bold",
  color: "black"
};

const onClick = (...args) => {
  console.log(
    "onClick args: ",
    args[0].latLng.lat(),
    " : ",
    args[0].latLng.lng()
  );
};

const onMapLoad = map => {
  console.log("map.data: ", map.data);
  // map.data.loadGeoJson('/geo.json')
};

class ExampleData extends Component {
  render() {
    return (
      <LoadScript
        id="script-loader"
        googleMapsApiKey=""
      >
        <GoogleMap
          id="data-example"
          mapContainerStyle={{
            height: "100%",
            width: "100%",
            objectFit: "cover"
          }}
          zoom={16}
          center={center}
          onClick={onClick}
          onLoad={onMapLoad}
        >
          <Marker
            position={marker}
            // label={labelObject}
          />
        </GoogleMap>
      </LoadScript>
    );
  }
}

export default ExampleData;
