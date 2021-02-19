import { makeAutoObservable } from 'mobx';
import { RootStore } from '@stores/rootStore';

export class HomeStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }
}
