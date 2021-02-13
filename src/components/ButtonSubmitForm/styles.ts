import styled, { keyframes } from 'styled-components';

import { darken } from 'polished';
import { IColors } from '../../styles/theme';

const move = keyframes`
  0%{
    right: 20px;
  }
  50%{
    right: 10px;
  }
  100%{
    right: 20px;
  }
`;

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }to{
    transform: rotate(360deg);
  }
`;

const IconColor = (props: IColors) => props.theme.icon.white;
const TextColor = (props: IColors) => props.theme.text.white;
const ButtonColor = (props: IColors) => props.theme.button.primaryColor;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  background-color: ${ButtonColor};
  color: ${TextColor};
  border: none;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:disabled {
    opacity: 0.4;
  }

  &:hover {
    background-color: ${darken(0.1, '#C48942')};
  }

  &:hover ~ svg {
    opacity: 1;
    animation: ${move} 1s infinite;
  }

  svg {
    margin: auto;
    color: ${IconColor};
    animation: ${rotate} 0.7s infinite;
  }
`;
