/* eslint-disable react/button-has-type */
import React, { ButtonHTMLAttributes } from 'react';

import { IconType } from 'react-icons';
import { VscLoading } from 'react-icons/vsc';

import * as S from './styles';

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon?: IconType;
  isLoading: boolean;
}

const ButtonSubmitForm: React.FC<Button> = ({
  Icon,
  isLoading,
  type,
  children,
  ...rest
}) => {
  return (
    <S.Button type={type} disabled={isLoading} {...rest}>
      {isLoading ? <VscLoading size="35" /> : children}
    </S.Button>
  );
};

export default ButtonSubmitForm;
