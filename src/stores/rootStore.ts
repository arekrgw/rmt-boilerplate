import { HomeStore } from '@stores/homeStore';
import { RouterStore } from 'mobx-react-router';

export class RootStore {
  homeStore: HomeStore;
  routerStore: RouterStore;

  constructor() {
    this.homeStore = new HomeStore(this);
    this.routerStore = new RouterStore();
  }
}

export default new RootStore();
