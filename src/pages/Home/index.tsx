import React, { useRef, useCallback, useState } from 'react';

import * as Yup from 'yup';
import { SubmitHandler, FormHandles } from '@unform/core';
import { MdSend, MdLocationCity } from 'react-icons/md';
import axios from 'axios';
import Input from '../../components/Input';
import ButtonSubmitForm from '../../components/ButtonSubmitForm';

import convertKelvinToCelcius from '../../util/convertKelvinToCelsius';
import typePokemon from '../../util/typePokemon';
import random from '../../util/random';

import OpenWeatherAPI from '../../api/OpenWeatherAPI';
import PokemonAPI from '../../api/PokemonAPI';
import { apiKey } from '../../configuration/openweather';

import { useToast } from '../../hooks/ToastContext';

import * as S from './styles';
import Logo from '../../assets/logo.png';

interface SignUpFormData {
  city: string;
}

interface Pokemon {
  id: number;
  name: string;
  url: string;
}

interface InfoData {
  weather: number;
  main: string;
  pokeType: string;
  pokemon: Pokemon;
  pokeImg: string;
}

const Home: React.FC = () => {
  const [infoData, setInfoData] = useState<InfoData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const handleSubmit: SubmitHandler<SignUpFormData> = useCallback(
    async (formData, { reset }) => {
      setIsLoading(true);
      try {
        //Valida a entrada do input
        const schema = Yup.object().shape({
          city: Yup.string().required('Informe o nome da cidade'),
        });

        await schema.validate(formData, {
          abortEarly: false,
        });

        //Realiza uma consulta na api do tempo
        const { data } = await OpenWeatherAPI.get(
          `weather?q=${formData.city}&appid=${apiKey}`
        ).catch(err => {
          throw new Error('Erro ao consultar a cidade');
        });

        //define a temperatura e o clima
        const { main } = data.weather[0];
        const weather = convertKelvinToCelcius(data.main.temp);

        //Define o tipo do pokemon
        const pokeType = typePokemon(weather, main);

        //faz uma requisição pra api, buscando o tipo do pokemon
        const RequestDataPokemon = await PokemonAPI.get(
          `type/${pokeType}`
        ).catch(err => {
          throw new Error('Erro ao consultar o pokemon');
        });
        const { pokemon } = RequestDataPokemon.data;

        //Equanto o numero randomico, for igual ao pokemon ja mostrado anteriormente, gera um novo numero
        let randomPokemon = 0;
        do {
          randomPokemon = random(pokemon.length);
        } while (randomPokemon === infoData?.pokemon.id);

        //consulta uma imagem do pokemon
        const pokeimage = await axios
          .get(`${pokemon[randomPokemon].pokemon.url}`)
          .catch(err => {
            throw new Error('Erro ao consultar a imagem do pokemon');
          });

        //Guarda os valores em um state
        setInfoData({
          main,
          pokeType,
          weather,
          pokemon: {
            id: randomPokemon,
            name: pokemon[randomPokemon].pokemon.name,
            url: pokemon[randomPokemon].pokemon.url,
          },
          pokeImg:
            pokeimage.data.sprites.other.dream_world.front_default || null,
        });

        setIsLoading(false);
        formRef.current?.setErrors({});
        reset();
      } catch (err) {
        const validationErrors = {};
        //Exibe erro no campo do formulario
        if (err instanceof Yup.ValidationError) {
          err.inner.forEach(error => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore: Unreachable code error
            validationErrors[error.path] = error.message;
          });
          formRef.current?.setErrors(validationErrors);
        } else {
          //Se nao for erro na validação do formulario, exibe outros error via toast
          formRef.current?.setErrors({});
          addToast({
            title: 'Surgiu um problema !',
            description: err.message,
            type: 'error',
          });
        }

        setIsLoading(false);
      }
    },
    [infoData, addToast]
  );

  return (
    <S.Container>
      <S.Welcome>
        <S.Logo>
          <img src={Logo} alt="Bear Trading" />
          <p>Enter the name of a american city to mach a pokemon! !</p>
        </S.Logo>
        {infoData ? (
          <S.Card>
            <img
              src={
                infoData.pokeImg
                  ? infoData.pokeImg
                  : 'https://static.thenounproject.com/png/340719-200.png'
              }
              alt={infoData.pokemon.name}
            />
            <div>
              <h3>{infoData.pokemon.name}</h3>
              <span>{`${infoData.weather} º C`}</span>
              <span>{infoData.main === 'Rain' ? 'Rain' : 'Not Rain'}</span>
            </div>
          </S.Card>
        ) : (
          ''
        )}

        <S.Form onSubmit={handleSubmit} ref={formRef} noValidate>
          <Input name="city" label="City" Icon={MdLocationCity} autoFocus />
          <ButtonSubmitForm isLoading={isLoading} Icon={MdSend} type="submit">
            Go !
          </ButtonSubmitForm>
        </S.Form>
      </S.Welcome>
      <S.Image />
    </S.Container>
  );
};

export default Home;
