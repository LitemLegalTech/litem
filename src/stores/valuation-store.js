import { observable, action, computed, useStrict } from 'mobx';
import Data from './data-valuation.js';

useStrict(true);

//config for the tool
const firstQ = 'injuryType';

//lastQs array item
/*
{
  question: this.props.q.id,
  answer: [{ id: item.id, value: item.id, label: item.label }],
  nxtQ: item.nxtQ
}
*/
export default class mobxSessionStore {
  constructor(rootStore) {
    this.RootStore = rootStore;
  }
  @observable valuationObj = {};
  @observable currentQ = '';
  @observable injuryType = {};
  @observable injuryLocation = {};
  @observable injuryDuration = {};
  @observable injuries = [];
  @observable injuryValues = [1, 2, 3, 4, 5];
  @observable financialDetails = {};

  @action('setInitialQ')
  setInitialQ = () => {
    if (this.valuationObj.lastQs === undefined) {
      this.setValuationObj();
    } else if (this.valuationObj.lastQs.length === 0) {
      this.currentQ = firstQ;
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
            lastQs: []
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
    console.log(answer);
    if (answer.question === 'injuryType') {
      console.log("answer.question === 'injuryType'");
      this.injuryType = answer.answer[0].label;
      if (answer.answer[0].question === 'tDental') this.injuryLocation = '';
    }
    if (answer.nxtQ === 'duration') {
      console.log("answer.nxtQ === 'duration'");
      this.injuryLocation = answer.answer[0].label;
    }
    if (answer.question === 'duration') {
      console.log("answer.question === 'duration'");
      this.injuryDuration = answer.answer[0].label;
      this.injuries.push({
        injuryType: this.injuryType,
        injuryLocation: this.injuryLocation,
        injuryDuration: this.injuryDuration
      });
    }
    if (answer.question === 'financial') {
      console.log("answer.question === 'financial'");
      this.financialDetails = answer.answer.reduce(function(total, current) {
        total[current.id] = parseInt(current.value, 10);
        return total;
      }, {});
    }
  };

  @action('setCurrentQ')
  setCurrentQ = nxtQ => {
    this.currentQ = nxtQ;
  };

  setLocal = () => {
    localStorage.setItem('valuationObj', JSON.stringify(this.valuationObj));
  };
}
