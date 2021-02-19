import rootStore, { RootStore } from '@stores/rootStore';
import * as React from 'react';

interface StoreType {
  rootStore: RootStore;
}

const stores: StoreType = {
  rootStore,
};

const StoreContext = React.createContext<StoreType>(stores);

export const StoreProvider: React.FC = ({ children }) => {
  return (
    <StoreContext.Provider value={stores}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => React.useContext(StoreContext);
