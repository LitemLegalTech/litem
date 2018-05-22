import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import ReactGA from 'react-ga';
import GDPR from '../components/gdpr/gdpr';

import Navbar from './../components/styled-components/navbar';
import Home from './../containers/home/home';
import FAQs from './../containers/faqs/faqs';
import Contact from './../containers/contact/contact';
import ToolHub from './../containers/tool-hub/tool-hub';
import TriageTool from './../containers/triage-tool/triage-tool';
import PreTriageTool from './../containers/pre-triage-tool/pre-triage-tool';
import PreValuerTool from './../containers/pre-valuer-tool/pre-valuer-tool';
import PreLetterTool from './../containers/pre-letter-tool/pre-letter-tool';
import Guides from './../containers/guides/guides';
import TsAndCs from './../containers/tsandcs/tsandcs';
import PrivacyPolicy from './../containers/privacy-policy/privacy-policy';
import NotFound from './../containers/not-found/not-found';

import ValuationTool from './../containers/valuation-tool/valuation-tool';

@inject('RootStore')
@observer
class Routes extends Component {
  componentWillMount() {
    this.props.RootStore.UIStore.checkGDPR();
  }

  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    this.props.RootStore.UIStore.checkGDPR();
    console.log('this.props.RootStore.UIStore.checkGDPR();');
    return (
      <BrowserRouter>
        <div className="app">
          {this.props.RootStore.UIStore.showGDPR && (
            <GDPR
              privacyPolicyText="Cookie Policy"
              privacyPolicyUrl="privacy-policy"
              allowText="Accept"
              denyText="Disable Cookies"
              text="We love transparency and we only use depersonalised data for behavioural statistics to improve our service. If you don't trust us you can disable cookies at any time and Litem's functionalitry will not be effected."
            />
          )}
          <Route component={Navbar} />
          <div
            className={`noNavBarContainer ${this.props.RootStore.UIStore.navBarIsOpen ? 'show' : 'hide'}`}
            onClick={this.props.RootStore.UIStore.closeNavBar}
          />
          <div className={`${this.props.RootStore.UIStore.fadeIn}`}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/faqs" component={FAQs} />
              <Route exact path="/tool-hub" component={ToolHub} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/triage-tool" component={TriageTool} />
              <Route exact path="/valuer" component={ValuationTool} />
              <Route exact path="/pre-triage-tool" component={PreTriageTool} />
              <Route exact path="/pre-valuer-tool" component={PreValuerTool} />
              <Route exact path="/pre-letter-tool" component={PreLetterTool} />
              <Route exact path="/guides" component={Guides} />
              <Route exact path="/tsandcs" component={TsAndCs} />
              <Route exact path="/privacy-policy" component={PrivacyPolicy} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
