import { observable, action, computed, useStrict } from 'mobx';
import Data from './data-valuation.js';
import valuationTable from './valuerData.json';

useStrict(true);

export default class mobxSessionStore {
  constructor(rootStore) {
    this.RootStore = rootStore;
  }
  @observable firstQ = 'injuryType';
  @observable valuationObj = {};
  @observable currentQ = '';

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
    if (answer.question === 'injuryType') {
      this.valuationObj.injuryType = answer.answer[0].label;
      if (answer.answer[0].question === 'tDental') this.valuationObj.injuryLocation = '';
    }
    if (answer.nxtQ === 'duration') {
      this.valuationObj.injuryLocation = answer.answer[0].label;
    }
    if (answer.question === 'duration') {
      this.valuationObj.injuryDuration = answer.answer[0].label;
    }
    if (answer.question === 'financial') {
      this.valuationObj.financialDetails = answer.answer.reduce(function(total, current) {
        total[current.id] = parseInt(current.value, 10);
        return total;
      }, {});
    }
  };

  @computed
  get injuryValue() {
    const injuryType = this.valuationObj.injuryType;
    const injuryLocation =
      this.valuationObj.injuryType === 'Damage to Teeth' ||
      this.valuationObj.injuryType === 'Brain injury' ||
      this.valuationObj.injuryType === 'Spinal chord injury'
        ? ''
        : this.valuationObj.injuryLocation;
    let injuryDuration;
    switch (this.valuationObj.injuryDuration) {
      case 'between a day and a week':
        injuryDuration = '1wk';
        break;
      case 'between a week and 2 weeks':
        injuryDuration = '2wks';
        break;
      case 'between 2 weeks and 3 weeks':
        injuryDuration = '3wks';
        break;
      case 'between 3 weeks and a month':
        injuryDuration = '4wks';
        break;
      case 'between a month and 2 months':
        injuryDuration = '8wks';
        break;
      case 'between 2 months and 3 months':
        injuryDuration = '13wks';
        break;
      case 'between 3 months and 6 months':
        injuryDuration = '26wks';
        break;
      case 'between 6 months and a year':
        injuryDuration = '52wks';
        break;
      case 'between a year and a year and a half':
        injuryDuration = '76wks';
        break;
      case 'between a year and a half and 2 years':
        injuryDuration = '104wks';
        break;
      case 'more than 2 years':
        injuryDuration = 'popover';
        break;
      default:
        break;
    }
    if (valuationTable[injuryType][injuryLocation][injuryDuration] === undefined) {
      injuryDuration = 'popover';
    }
    const val = valuationTable[injuryType][injuryLocation][injuryDuration];
    return val;
  }

  @action('addInjury')
  addInjury = () => {
    console.log(this.injuryValue);
    this.valuationObj.injuries.push({
      injuryType: this.valuationObj.injuryType,
      injuryLocation: this.valuationObj.injuryLocation,
      injuryDuration: this.valuationObj.injuryDuration,
      injuryValue: this.injuryValue
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
