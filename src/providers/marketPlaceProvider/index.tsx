import marketPlaceContext from 'contexts/marketPlaceContext';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logger from 'utils/Logger';
import { IMarketPlaceProvider } from './types';

const MarketplaceProvider = ({ children, mode }: IMarketPlaceProvider): JSX.Element => {
  React.useEffect(() => {
    Logger.mode = mode || 'develop';
    if (Logger.mode === 'production') {
      Logger.setLogging();
    } else {
      Logger.setDefaultFunction();
    }
  }, [mode]);

  const contextValue = React.useMemo(() => {
    return {};
  }, []);

  return (
    <marketPlaceContext.Provider value={contextValue}>
      {children}
      <ToastContainer />
    </marketPlaceContext.Provider>
  );
};

export default MarketplaceProvider;
