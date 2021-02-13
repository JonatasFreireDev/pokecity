import React from 'react';

import { FaSpinner } from 'react-icons/fa';

import Loader from './styles';

const LoadingCircle: React.FC = () => {
  return (
    <Loader>
      <FaSpinner />
    </Loader>
  );
};

export default LoadingCircle;
