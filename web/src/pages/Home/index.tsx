import React, { useEffect, useState } from 'react';
import { Heatmap } from 'google-map-react';
import { Container } from './styles';
import api from '../../services/api';
import Map from '../../components/Map';

type place = {
  id: string;
  zip_code: string;
  house_number: number;
  lat: number;
  lng: number;
  residents: number;
};

const Home: React.FC = () => {
  const [data, setData] = useState<Heatmap>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    api.get('/residences').then(response => {
      const dataApi: place[] = response.data.map((item: place) => {
        return {
          lat: item.lat,
          lng: item.lng,
          weight: item.residents,
        };
      });
      setData({
        positions: dataApi,
        options: {
          radius: 20,
          opacity: 1,
        },
      });
      setLoading(false);
    });
  }, []);

  return (
    <Container>
      <div className="content-title">
        <h1>Mapa de residências</h1>
        <small>
          Esse é um mapa de calor informando o local da residência e a
          quantidade de membros.
        </small>
      </div>
      {data && !loading && <Map data={data} />}
    </Container>
  );
};

export default Home;
