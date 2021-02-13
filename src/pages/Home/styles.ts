import styled, { keyframes } from 'styled-components';

import { Form as UnformForm } from '@unform/web';
import WelcomeImage from '../../assets/Welcome.jpg';

import { IColors } from '../../styles/theme';

const BackgroundColor = (props: IColors) => props.theme.theme.mainTheme;
const BorderColor = (props: IColors) => props.theme.input.active;
const TextColor = (props: IColors) => props.theme.text.white;

const appearFromRight = keyframes`
from{
  opacity: 0;
  transform: translateX(-50px);
}to{
  opacity: 1;
  transform: translateX(0px);
}`;

const appearFromNothing = keyframes`
from{
  opacity: 0;
  transform: scale(-50px);
}to{
  opacity: 1;
  transform: scale(0px);
}`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 3fr;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media (max-width: 1100px) {
    & {
      grid-template-columns: 1.5fr 2fr;
    }
  }

  @media (max-width: 700px) {
    & {
      grid-template-columns: 2.5fr 1fr;
    }
  }

  @media (max-width: 500px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;

export const Image = styled.div`
  background-image: url(${WelcomeImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;

  @media (max-width: 500px) {
    & {
      display: none;
    }
  }
`;

export const Welcome = styled.div`
  display: grid;
  grid-template-rows: 1fr 300px 0.6fr;
  grid-template-columns: 100%;
  height: 100%;
  row-gap: 10px;
  justify-items: center;
  align-items: center;
  transition: all 0.5s;
  background-color: ${BackgroundColor};
  color: ${TextColor};
  animation: ${appearFromRight} 1s;

  @media (max-width: 1000px) {
    & {
      width: 100%;
    }
  }
`;

export const Logo = styled.div`
  display: grid;
  text-align: center;

  img {
    padding: 20px;
    width: 100%;
  }

  p {
    margin: 10px;
  }
`;

export const Card = styled.div`
  display: grid;
  animation: ${appearFromNothing} 1s;
  border: 5px solid ${BorderColor};
  border-radius: 0px 20px 0px 20px;
  padding: 5px;
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-template-rows: 10fr 1fr;
  grid-template-columns: auto;
  row-gap: 5px;
  width: 300px;
  height: 300px;

  img {
    max-width: 300px;
    max-height: 215px;
    padding: 10px;
  }

  h3 {
    font-weight: bold;
    margin: 10px;
  }

  span {
    margin: 10px;
  }
`;

export const Form = styled(UnformForm)`
  display: grid;
  grid-template-rows: 1.2fr 1fr;
  max-width: 100%;
`;
