import React from 'react';
import GoogleMapReact, { Heatmap } from 'google-map-react';

const center = {
  lat: -3.745,
  lng: -38.523,
};

interface dataProps {
  data: Heatmap;
}

const Map: React.FC<dataProps> = ({ data }) => {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      {data.positions.length >= 1 && (
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_KEY,
            language: 'pt-br',
            region: 'BR',
            libraries: ['visualization'],
          }}
          defaultCenter={center}
          heatmap={data}
          defaultZoom={5}
        />
      )}
    </div>
  );
};

export default React.memo(Map);
