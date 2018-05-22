import { observable, action, useStrict } from 'mobx';
import ReactGA from 'react-ga';

useStrict(true);
export default class MobxUIStore {
  constructor(rootStore) {
    this.RootStore = rootStore;
  }
  @observable fadeIn = '';
  @observable navBarIsOpen = false;
  @observable currentSection = 'valuer';
  @observable printing = false;
  @observable history = {};

  @action('toggleNavBar') toggleNavBar = () => (this.navBarIsOpen = !this.navBarIsOpen);
  @action('closeNavBar') closeNavBar = () => (this.navBarIsOpen = false);
  @action('setCurrentSection')
  setCurrentSection = x => {
    this.currentSection = x;
    this.RootStore.SessionStore.setInitialQ();
  };

  @action('handleFadeIn')
  handleFadeIn = () => {
    this.fadeIn = '';
    this.fadeIn = 'fadeIn';
    setTimeout(
      action(() => {
        this.fadeIn = '';
      }),
      1000
    );
  };

  @observable showGDPR = !!!getCookie('cookieconsent_status');
  @observable allowCookies = false;

  @action('setHistory') setHistory = history => (this.history = history);
  @action('setShowGDPR') setShowGDPR = show => (this.showGDPR = show);

  @action('setGDPR')
  setGDPR = consent => {
    this.allowCookies = consent;
    this.setShowGDPR(false);
    this.checkGDPR();
  };

  @action('checkGDPR')
  checkGDPR = () => {
    if (getCookie('cookieconsent_status') === 'deny') {
      console.log('Denied');
      this.allowCookies = false;
      window['ga-disable-UA-77504696-3'] = true;
    } else if (getCookie('cookieconsent_status') === 'allow' && this.allowCookies === false) {
      window['ga-disable-UA-77504696-3'] = false;
      ReactGA.initialize('UA-77504696-3');
      this.allowCookies = true;
    }
  };
}

function getCookie(name) {
  const val = `; ${document.cookie}`;
  const pts = val.split(`; ${name}=`);
  if (pts.length === 2)
    return pts
      .pop()
      .split(';')
      .shift();
}
