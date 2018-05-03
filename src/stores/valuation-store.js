import { observable, action, computed, useStrict } from 'mobx';
import Data from './data-valuation.js';

useStrict(true);

export default class mobxSessionStore {
  constructor(rootStore) {
    this.RootStore = rootStore;
  }
  @observable firstQ = 'injuryType';
  @observable valuationObj = {};
  @observable currentQ = '';
  /*@observable injuryType = {};
  @observable injuryLocation = {};
  @observable injuryDuration = {};
  @observable injuries = [];
  @observable injuryValues = [1, 2, 3, 4, 5];
  @observable financialDetails = {};*/

  @action('setInitialQ')
  setInitialQ = () => {
    if (this.valuationObj.data === undefined) {
      this.setValuationObj();
    } else if (this.valuationObj.lastQs.length === 0) {
      this.currentQ = this.firstQ;
    } else if (this.valuationObj.lastQs.length >= 1) {
      const lastQ = this.valuationObj.lastQs.pop();
      this.currentQ = lastQ.nxtQ;
    }
  };

  @action('setValuationObj')
  setValuationObj = () => {
    const local = localStorage.getItem('valuationObj');
    this.valuationObj =
      local !== null
        ? JSON.parse(local)
        : {
            data: Data,
            lastQs: [],
            injuryType: {},
            injuryLocation: {},
            injuryDuration: {},
            injuries: [],
            injuryValues: [0, 1, 2, 3, 4],
            financialDetails: {}
          };
    this.setInitialQ();
  };

  @action('handleAnswer')
  handleAnswer = (lastQs, lastQsObj, nxtQ) => {
    this.valuationObj.lastQs = lastQs;
    this.normaliseData(lastQsObj);
    this.setCurrentQ(nxtQ);
    this.setLocal();
  };

  @action('normaliseData')
  normaliseData = answer => {
    //console.log(answer);
    if (answer.question === 'injuryType') {
      console.log("answer.question === 'injuryType'");
      this.valuationObj.injuryType = answer.answer[0].label;
      if (answer.answer[0].question === 'tDental') this.valuationObj.injuryLocation = '';
    }
    if (answer.nxtQ === 'duration') {
      console.log("answer.nxtQ === 'duration'");
      this.valuationObj.injuryLocation = answer.answer[0].label;
    }
    if (answer.question === 'duration') {
      console.log("answer.question === 'duration'");
      this.valuationObj.injuryDuration = answer.answer[0].label;
    }
    if (answer.question === 'financial') {
      console.log("answer.question === 'financial'");
      this.valuationObj.financialDetails = answer.answer.reduce(function(total, current) {
        total[current.id] = parseInt(current.value, 10);
        return total;
      }, {});
    }
  };

  @action('addInjury')
  addInjury = () => {
    this.valuationObj.injuries.push({
      injuryType: this.valuationObj.injuryType,
      injuryLocation: this.valuationObj.injuryLocation,
      injuryDuration: this.valuationObj.injuryDuration
    });
  };

  @action('removeLastInjury')
  removeLastInjury = () => {
    this.valuationObj.injuries.pop();
  };

  @action('setCurrentQ')
  setCurrentQ = nxtQ => {
    this.currentQ = nxtQ;
  };

  setLocal = () => {
    localStorage.setItem('valuationObj', JSON.stringify(this.valuationObj));
  };
}
