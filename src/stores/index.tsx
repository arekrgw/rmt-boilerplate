import rootStore from '@stores/rootStore';
import * as React from 'react';

const StoreContext = React.createContext(rootStore);

export const StoreProvider: React.FC = ({ children }) => {
  return (
    <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => React.useContext(StoreContext);
