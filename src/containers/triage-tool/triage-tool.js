import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ClipboardJS from 'clipboard';
//import DOMPurify from 'dompurify';
import moment from 'moment';

import { pageView, clicked } from './../../services/ga-helpers';

import Container from './../../components/styled-components/container';
import Title from './../../components/styled-components/title';
import Header from './../../components/styled-components/header';
import BtnBottom from './../../components/styled-components/btn-bottom';
import BtnBottomFinalised from './../../components/styled-components/btn-bottom-finalised';
//import List from './../../../components/styled-components/list';

import Weak from './weak';
import Advice from './advice';
import Letter from './letter';
//import Valuation from './valuation';
import Financial from './financial-inputs';
import Duration from './duration-inputs';
import Buttons from './buttons';
import Dropdowns from './dropdowns';
import Texts from './texts';
import Dates from './dates';
import PostTriageTool from './../post-triage-tool/post-triage-tool';
import PreLetter from './../pre-letter-tool/pre-letter-tool';
import PostLetter from './../post-letter-tool/post-letter-tool';

//import Test from './test';

@inject('RootStore')
@observer
class Section1 extends Component {
  state = {
    value: '',
    nxtQId: '',
    value1: '',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
    value6: '',
    editedLetter: false,
    test: false
  };
  qs = null;
  qId = null;
  resetDropdown = false;
  componentWillMount() {
    this.props.RootStore.UIStore.handleFadeIn();
    if (this.props.history.location.pathname === '/valuer') this.props.RootStore.UIStore.setCurrentSection('valuer');
    if (this.props.history.location.pathname === '/triage-tool')
      this.props.RootStore.UIStore.setCurrentSection('triageTool');
  }
  componentDidMount() {
    pageView(window.location.pathname);
    new ClipboardJS('.copy');
  }

  handleBack = () => {
    if (this.state.editedLetter) {
      this.setState({ editedLetter: false });
      return;
    }
    this.resetState();
    this.props.RootStore.SessionStore.handleBack();
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.RootStore.UIStore.handleFadeIn();
    //if the type is 'weak' then the next button does nothing
    if (this.qs[this.qId].type === 'weak') return;
    //reset the dropdown
    this.resetDropdown = !this.resetDropdown;

    /*if (this.qId === 'valInjuryDuration') {
      //if the question is 'valInjuryDuration' then do the calculation
      const injuryStart = moment(this.state.value1, 'DD/MM/YYYY');
      const injuryEnd = moment(this.state.value2, 'DD/MM/YYYY');
      const injuryDuration = injuryEnd.diff(injuryStart, 'days');
      this.props.RootStore.SessionStore.setInjuryDuration(this.state.value1, this.state.value2, injuryDuration);
      this.postSubmit();
    } else */ /*else if (this.state.nxtQId === 'injuryLocation') {
      //if the next question is 'injuryLocation' then add the value to the injury array and go to postSubmit
      this.props.RootStore.SessionStore.setInjuryLocation(this.state.value);
      this.postSubmit();
    }*/ if (
      this.qId === 'cDOBiDate'
    ) {
      //if the question is 'iDate' then do the calculation
      const dob = moment(this.state.value1);
      const accidentDate = moment(this.state.value2);
      const nowMinus3 = moment().subtract(3, 'years');
      const turned21On = moment(dob).add(21, 'years');
      //console.log('this.state.value1:', this.state.value1, 'this.state.value2:', this.state.value2);
      //console.log('dob:', dob, 'accidentDate:', accidentDate);
      console.log(
        'accident date is before 3 years ago:',
        moment(accidentDate).isBefore(nowMinus3),
        '18 plus 3 is before today:',
        moment(turned21On).isBefore(moment())
      );
      if (moment(accidentDate).isBefore(nowMinus3) && moment(turned21On).isBefore(moment())) {
        console.log('timebarred');
        this.setState({ nxtQId: 'timeBarred' }, () => this.postSubmit());
      } else {
        console.log('not timebarred');
        this.postSubmit();
      }
    } else if (this.qs[this.qId].type === 'letter') {
      //if the question type is 'letter' then show the edited letter and setState accordingly
      if (!this.state.editedLetter) {
        this.props.RootStore.SessionStore.setEditedLetter(this.state.value, this.state.nxtQId);
        this.setState({ editedLetter: true });
      } else {
        this.setState({ nxtQId: 'postLetter' }, () => {
          this.postSubmit();
          //console.log(this.qs[this.qId].type);
        });
      }
    } else {
      //if none of the above go to postSubmit
      this.postSubmit();
    }
  };

  postSubmit = () => {
    let value =
      this.state.value === 'multiValue'
        ? [
            this.state.value1,
            this.state.value2,
            this.state.value3,
            this.state.value4,
            this.state.value5,
            this.state.value6
          ]
        : /*this.state.value === '' ? this.qs[this.qId].answered :*/ this.state.value;
    let nxtQId = this.state.nxtQId === '' ? this.qs[this.qId].nxtQId : this.state.nxtQId;
    if (this.qs[this.qId].type === 'advice') value = 'advice';
    if (this.qs[this.qId].type === 'preletter') value = 'preletter';
    if (this.qs[this.qId].type === 'PostTriageTool') value = 'PostTriageTool';
    if (this.qs[this.qId].type === 'preCaseTool') value = 'preCaseTool';
    if (!value || !nxtQId) return alert('please enter an answer');
    this.props.RootStore.SessionStore.handleNext(value, nxtQId);
    //console.log(nxtQId);
    this.resetState();
  };

  resetState = () =>
    this.setState({
      value: '',
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      nxtQId: ''
    });

  render() {
    this.qs = this.props.RootStore.SessionStore.userObj.allQs;
    this.qId = this.props.RootStore.SessionStore.currentQId;
    const qType = this.qs[this.qId].type;
    switch (qType) {
      case 'text':
        this.input = (
          <Texts
            q={this.qs[this.qId]}
            value={this.state.value}
            callback={(v, n) => this.setState({ value: v, nxtQId: n })}
          />
        );
        break;
      case 'date':
        this.input = (
          <Dates
            q={this.qs[this.qId]}
            value={this.state.value}
            callback={(v, n) => this.setState({ value: v, nxtQId: n })}
          />
        );
        break;
      case 'button':
        this.input = (
          <Buttons
            q={this.qs[this.qId]}
            value={this.state.value}
            callback={(v, n) => this.setState({ value: v, nxtQId: n })}
          />
        );
        break;
      case 'dropdown':
        this.input = (
          <Dropdowns
            q={this.qs[this.qId]}
            value={this.state.value}
            callback={(v, n) => this.setState({ value: v, nxtQId: n })}
            resetDropdown={this.resetDropdown}
          />
        );
        break;
      case 'weak':
        this.input = (
          <Weak
            userObj={this.props.RootStore.SessionStore.userObj}
            q={this.qs[this.qId]}
            history={this.props.history}
          />
        );
        break;
      case 'advice':
        this.input = (
          <Advice
            allQs={this.props.RootStore.SessionStore.userObj.allQs}
            q={this.qs[this.qId]}
            history={this.props.history}
            setSection={x => this.props.RootStore.UIStore.setCurrentSection(x)}
          />
        );
        break;
      case 'letter':
        this.input = (
          <Letter
            q={this.qs[this.qId]}
            allQs={this.props.RootStore.SessionStore.userObj.allQs}
            injuries={this.props.RootStore.SessionStore.userObj.injuries}
            history={this.props.history}
            editedLetter={this.state.editedLetter}
            callback={v =>
              this.setState({
                value: v,
                nxtQId: this.qId
              })
            }
          />
        );
        break;
      case 'financialInputs':
        this.input = (
          <Financial
            allQs={this.qs}
            q={this.qs[this.qId]}
            callback={(p, v, n) => this.setState({ value: 'multiValue', [p]: v, nxtQId: n })}
          />
        );
        break;
      case 'durationInputs':
        this.input = (
          <Duration
            allQs={this.qs}
            q={this.qs[this.qId]}
            callback={(p, v, n) => this.setState({ value: 'multiValue', [p]: v, nxtQId: n })}
          />
        );
        break;
      case 'PostTriageTool':
        this.input = (
          <PostTriageTool
            history={this.props.history}
            allQs={this.qs}
            q={this.qs[this.qId]}
            callback={(p, v, n) => this.setState({ value: 'multiValue', [p]: v, nxtQId: n })}
          />
        );
        break;
      case 'preletter':
        this.input = (
          <PreLetter
            history={this.props.history}
            allQs={this.qs}
            q={this.qs[this.qId]}
            callback={(p, v, n) => this.setState({ value: 'multiValue', [p]: v, nxtQId: n })}
          />
        );
        break;
      case 'postLetter':
        this.input = (
          <PostLetter
            history={this.props.history}
            allQs={this.qs}
            q={this.qs[this.qId]}
            callback={(p, v, n) => this.setState({ value: 'multiValue', [p]: v, nxtQId: n })}
          />
        );
        break;
      default:
        break;
    }
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          {this.input}
          <BtnBottom
            left
            type="button"
            onClick={() => {
              this.handleBack();
              clicked(`triage-tool back on ${this.qId}`);
            }}
            disabled={this.qs[this.qId].qId === 'moreThan3Years'}
          >
            Back
          </BtnBottom>
          {this.qs[this.qId].type === 'weak' ? (
            <BtnBottom
              right
              onClick={() => {
                this.props.history.push('/');
                clicked('triage-tool home letter');
              }}
            >
              home
            </BtnBottom>
          ) : !this.state.editedLetter ? (
            <BtnBottom
              right
              type="submit"
              className={this.qs[this.qId].type === 'weak' && 'disabled'}
              onClick={() => clicked(`triage-tool next on ${this.qId}`)}
              disabled={this.qs[this.qId].type === 'weak'}
            >
              {this.qs[this.qId].type === 'letter' ? 'finalise letter' : 'Next'}
            </BtnBottom>
          ) : this.qs[this.qId].qId !== 'postLetter' ? (
            <React.Fragment>
              <BtnBottomFinalised
                center
                data-clipboard-target="#completedLetter"
                className="copy"
                type="button"
                onClick={() => {
                  setTimeout(() => {
                    this.props.RootStore.SessionStore.handleNext('PostTriageTool', 'postLetter');
                  }, 2000);
                  clicked('triage-tool copy letter');
                }}
              >
                copy
              </BtnBottomFinalised>
              <BtnBottomFinalised
                right
                type="button"
                onClick={() => {
                  window.print();
                  setTimeout(() => {
                    this.props.RootStore.SessionStore.handleNext('PostTriageTool', 'postLetter');
                  }, 2000);
                  clicked('triage-tool print letter');
                }}
              >
                print
              </BtnBottomFinalised>
            </React.Fragment>
          ) : (
            <BtnBottom
              right
              onClick={() => {
                this.props.history.push('/');
                clicked('triage-tool home letter');
              }}
            >
              home
            </BtnBottom>
          )}
        </form>
      </React.Fragment>
    );
  }
}

export default Section1;
