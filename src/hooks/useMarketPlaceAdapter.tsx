import { IMarketPlaceContext } from 'contexts/marketPlaceContext/types';
import React from 'react';
import marketPlaceContext from 'contexts/marketPlaceContext';

const useMarketPlaceAdapter = (): IMarketPlaceContext => {
  const context = React.useContext(marketPlaceContext);

  return context;
};

export default useMarketPlaceAdapter;
