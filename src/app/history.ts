import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'mobx-react-router';
import rootStore from '@stores/rootStore';

export const history = syncHistoryWithStore(
  createBrowserHistory(),
  rootStore.routerStore,
);
