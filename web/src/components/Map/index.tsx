import React, { useEffect, useState } from 'react';
import GoogleMapReact, {
  Heatmap,
  Position as PositionProps,
} from 'google-map-react';
import api from '../../services/api';

const center = {
  lat: -3.745,
  lng: -38.523,
};

interface place {
  lat: number;
  lng: number;
  residents: number;
}

const Map: React.FC = () => {
  const [data, setData] = useState<PositionProps[]>([]);
  const [heatmapData, setHeatmapData] = useState<Heatmap>({
    positions: data,
    options: {
      radius: 20,
      opacity: 1,
    },
  });

  useEffect(() => {
    api.get('/residences').then(response => {
      const places: place[] = response.data;
      const residences: PositionProps[] = places.map(position => {
        return {
          lat: position.lat,
          lng: position.lng,
          weight: position.residents,
        };
      });

      setData(residences);
      setHeatmapData({ ...heatmapData, positions: residences });
    });
  }, [heatmapData]);

  return (
    <div style={{ height: '700px', width: '100%' }}>
      {data.length >= 1 && (
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyC3jEhWeNBELtlanSia-L68vsisLYAYVWY',
            language: 'pt-br',
            region: 'BRAZIL',
            libraries: ['visualization'],
          }}
          defaultCenter={center}
          heatmap={heatmapData}
          defaultZoom={5}
        />
      )}
    </div>
  );
};

export default React.memo(Map);
