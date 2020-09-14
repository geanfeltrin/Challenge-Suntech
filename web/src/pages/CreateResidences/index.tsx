import React, { useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import * as Yup from 'yup';
import cepPromise from 'cep-promise';
import axios from 'axios';
import shortid from 'shortid';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import FillFormImg from '../../assets/fill_forms.svg';
import { Container } from './styles';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

interface dataProps {
  id: string;
  zip_code: string;
  residents: number;
  lat: number;
  lng: number;
  house_number: number;
}

const CreateResidences: React.FC = () => {
  const history = useHistory();
  const [cep, setCep] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ message: '', status: false });
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: dataProps) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          zip_code: Yup.string().required('O CEP é obrigatório'),
          house_number: Yup.number()
            .typeError('O número da residência é obrigatório')
            .required('O número da residência é obrigatório'),
          residents: Yup.number()
            .typeError('A quantidade de pessoas deve ser um número')
            .required('A quantidade de pessoas na residência é obrigatório'),
          lat: Yup.number()
            .typeError('A latitude é obrigatório e deve ser um número')
            .required('A latitude é obrigatório'),
          lng: Yup.number()
            .typeError('A longitude é obrigatório e deve ser um número')
            .required('A longitude é obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('residences', {
          id: shortid.generate(),
          zip_code: data.zip_code,
          residents: data.residents,
          lat: data.lat,
          lng: data.lng,
          house_number: data.house_number,
        });

        toast.success('Residência cadastrada com sucesso!!');
        history.push('/');
      } catch (error) {
        const errors = getValidationErrors(error);
        formRef.current?.setErrors(errors);
      }
    },
    [history],
  );

  const handleSearchLocation = async (): Promise<void> => {
    try {
      setLoading(true);
      setMessage({
        message:
          'Estamos verificando o cep e buscando a latitude e longitude, isso pode levar alguns minutos',
        status: false,
      });
      const checkCep = await cepPromise(cep);
      const key = process.env.REACT_APP_KEY;
      const getLocation = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?key=${key}&address=${checkCep.cep},BR`,
      );
      const { data } = getLocation;

      setLat(data.results[0].geometry.location.lat);
      setLng(data.results[0].geometry.location.lng);
      setMessage({ message: 'ok', status: true });
      setLoading(false);
    } catch (error) {
      setMessage({
        message: 'Houve um erro o CEP pode estar incorreto',
        status: false,
      });
      setLoading(false);
    }
  };

  return (
    <Container>
      <div className="content-title">
        <h1>Adicionar residência</h1>
        <small>
          Para adicionar uma residência preencha os campos corretamente, caso
          não conheça sua latitude e longitude clique no botão buscar
          localização, ele aparecerá ao inserir seu CEP.
        </small>
      </div>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <div className="content-cep">
          <Input
            id="zip_code"
            label="Insira seu CEP"
            placeholder="Digite apenas os números ex. 00000000"
            maxLength={8}
            type="number"
            name="zip_code"
            value={cep}
            onChange={e => setCep(e.target.value)}
            loading={loading}
            message={message.status === false ? message.message : ''}
          />
          {cep && message.status === false && (
            <Button
              type="button"
              onClick={handleSearchLocation}
              disabled={cep.length < 8}
            >
              Buscar localização
            </Button>
          )}
        </div>

        <Input
          id="house_number"
          label="Número da sua residência"
          type="number"
          name="house_number"
          placeholder="Exemplo: 100"
        />
        <Input
          id="residents"
          label="Quantidade de pessoas na sua residência"
          type="number"
          name="residents"
          placeholder="Exemplo: 1"
        />
        <Input
          id="lat"
          label="Latitude"
          type="number"
          name="lat"
          value={lat}
          onChange={e => setLat(e.target.value)}
          placeholder="Exemplo: 0.00"
        />
        <Input
          id="lng"
          label="Longitude"
          type="number"
          name="lng"
          value={lng}
          onChange={e => setLng(e.target.value)}
          placeholder="Exemplo: 0.00"
        />

        <Button type="submit">Adicionar residência</Button>
      </Form>
    </Container>
  );
};

export default CreateResidences;
