import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import ReactGA from 'react-ga';

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
  componentDidMount() {
    //ReactGA.initialize('UA-77504696-3');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
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
              <Route exact path="/valuer" component={TriageTool} />
              <Route exact path="/valuerTEST" component={ValuationTool} />
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
