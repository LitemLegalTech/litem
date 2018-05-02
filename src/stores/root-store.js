import { useStrict } from 'mobx';
import UIStore from './ui-store';
import SessionStore from './session-store';
import ValuationStore from './valuation-store';

useStrict(true);
class RootStore {
  constructor() {
    this.UIStore = new UIStore(this);
    this.SessionStore = new SessionStore(this);
    this.ValuationStore = new ValuationStore(this);
  }
}
export default RootStore;
