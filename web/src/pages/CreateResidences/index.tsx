import React, { useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import * as Yup from 'yup';
import cepPromise from 'cep-promise';
import axios from 'axios';
import Input from '../../components/Input';
import Button from '../../components/Button';
import FillFormImg from '../../assets/fill_forms.svg';
import { Container } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

const CreateResidences: React.FC = () => {
  const [cep, setCep] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        'zip-code': Yup.string().required('O CEP é obrigatório'),
        numberHouse: Yup.number()
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
    } catch (error) {
      const errors = getValidationErrors(error);
      formRef.current?.setErrors(errors);
    }
  }, []);

  const handleCheckCep = async (): Promise<void> => {
    setLoading(true);
    setMessage(
      'Estamos verificando o cep e buscando a latitude e longitude, isso pode levar alguns minutos',
    );
    const cepP = await cepPromise(cep);
    const k = 'AIzaSyC3jEhWeNBELtlanSia-L68vsisLYAYVWY';
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?key=${k}&address=${cepP.cep},BR`,
    );
    const { data } = response;

    setLat(data.results[0].geometry.location.lat);
    setLng(data.results[0].geometry.location.lng);
    setMessage('ok');
    setLoading(false);
  };

  return (
    <Container>
      <div className="content-title">
        <h1>Adicionar residências</h1>
        <small>
          Para adicionar uma residência preencha os campos corretamente, caso
          não conheça sua latitude e longitude clique no botão buscar
          localização, ele aparecerá ao inserir seu CEP.
        </small>
      </div>
      <div className="content-form">
        <Form ref={formRef} onSubmit={handleSubmit}>
          <div className="content-cep">
            <Input
              label="Insira seu CEP"
              placeholder="Digite apenas os números ex. 00000000"
              maxLength={8}
              type="number"
              name="zip-code"
              value={cep}
              onChange={e => setCep(e.target.value)}
              loading={loading}
              message={message}
            />
            {cep && message !== 'ok' && (
              <Button
                type="button"
                onClick={handleCheckCep}
                disabled={cep.length < 8}
              >
                Buscar localização
              </Button>
            )}
          </div>

          <Input
            label="Número da sua residência"
            type="number"
            name="numberHouse"
            placeholder="100"
          />
          <Input
            label="Quantidade de pessoas na sua residência"
            type="number"
            name="residents"
            placeholder="1"
          />
          <Input
            label="Latitude"
            type="number"
            name="lat"
            value={lat}
            onChange={e => setLat(e.target.value)}
            placeholder="0.00"
          />
          <Input
            label="Longitude"
            type="number"
            name="lng"
            value={lng}
            onChange={e => setLng(e.target.value)}
            placeholder="0.00"
          />

          <Button type="submit">Adicionar residência</Button>
        </Form>
        <img src={FillFormImg} alt="preencha o formulário" />
      </div>
    </Container>
  );
};

export default CreateResidences;
