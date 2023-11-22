import React from 'react'
import GoogleMapReact from 'google-map-react'
import { IconContext } from "react-icons";
import { FaLocationDot } from 'react-icons/fa6';
//import './map.css'


function Map({ location, zoomLevel }) {

    const LocationPin = ({ text }) => (
        <div className="pin">
          <IconContext.Provider value={{ color: '#e81a13', size: '50px', padding:'5px 2px' }}>
                    <div class="  sm:items-center sm:justify-center   mt-5 mb-5">
                       <FaLocationDot class="sm:items-center sm:justify-center  my-6"/>
                    </div>
          </IconContext.Provider>
          <p className="pin-text">{text}</p>
        </div>
      );

      const handleApiLoaded = (map,maps)=>{

      }
    
  return (
    <div>
        <div className="map">
    <h2 className="map-h2">Come Visit Us At Our Offices</h2>

    <div className="google-map"style={{height: '100vh',width:'100%'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
        yesIWantToUseGoogleMapApiInternals={true}
        onGoogleApiLoaded={({map,maps}) => handleApiLoaded(map,maps)}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
    </div>
    </div>
  )
}

export default Map