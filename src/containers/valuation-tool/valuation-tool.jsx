import React from 'react';
import { observer, inject } from 'mobx-react';
import { pageView, handleNavClick } from './../../services/ga-helpers';

import Container from './../../components/styled-components/container';
import Title from './../../components/styled-components/title';
import Header from './../../components/styled-components/header';
import P from './../../components/styled-components/p';
import Loader from './loader';
import FinancialInputs from './financial-inputs.jsx';
import DropdownWrapper from './dropdown-wrapper';
import Valuation from './valuation';
import Navigation from './navigation';
import ContactForm from './contact-form';
import Sidebar from './sidebar';

const components = {
  Loader: Loader,
  Dropdown: DropdownWrapper,
  FinancialInputs: FinancialInputs,
  ContactForm: ContactForm,
  Valuation: Valuation
};

@inject('RootStore')
@observer
class ValuationTool extends React.Component {
  state = {
    open: false,
    component: 'Loader',
    navItems: []
  };

  componentWillMount() {
    this.props.RootStore.UIStore.handleFadeIn();
    this.props.RootStore.ValuationStore.setInitialQ();
  }

  componentDidMount() {
    pageView(window.location.pathname);
    setTimeout(() => {
      this.setState({
        component: this.props.RootStore.ValuationStore.valuationObj.data[this.props.RootStore.ValuationStore.currentQ]
          .type
      });
    }, 2000);
  }

  handleAnswer = answer => {
    let navItems = this.state.navItems;
    if (navItems.indexOf('back') === -1) navItems.push('back');
    if (navItems.indexOf('hist') === -1) navItems.push('hist');

    let lastQs = this.props.RootStore.ValuationStore.valuationObj.lastQs;
    lastQs.push(answer);
    this.props.RootStore.ValuationStore.handleAnswer(lastQs, answer, answer.nxtQ);

    this.setState({
      component: this.props.RootStore.ValuationStore.valuationObj.data[this.props.RootStore.ValuationStore.currentQ]
        .type,
      navItems: navItems
    });

    this.props.RootStore.UIStore.handleFadeIn();
  };

  handleNavigation = navEvent => {
    if (navEvent.item === 'back') {
      if (this.props.RootStore.ValuationStore.valuationObj.lastQs.length > 0) {
        let lastQs = this.props.RootStore.ValuationStore.valuationObj.lastQs;
        const nxtQ = lastQs.pop();
        this.props.RootStore.ValuationStore.handleAnswer(lastQs, nxtQ, nxtQ.question);
        this.setState({
          component: this.props.RootStore.ValuationStore.valuationObj.data[nxtQ.question].type
        });
      } else {
        let navItems = this.state.navItems;
        navItems.splice(navItems.indexOf('back'), 1);
        navItems.splice(navItems.indexOf('hist'), 1);
        this.setState({ navItems: navItems });
      }
    } else if (navEvent.item === 'hist') {
      this.setState({ open: !this.state.open });
    }
    this.props.RootStore.UIStore.handleFadeIn();
  };

  render() {
    const QuestionWrapper = components[this.state.component];
    const q = this.props.RootStore.ValuationStore.valuationObj.data[this.props.RootStore.ValuationStore.currentQ];
    const lastQs = this.props.RootStore.ValuationStore.valuationObj.lastQs;
    const navItems = this.state.navItems;

    return (
      <React.Fragment>
        <Sidebar lastQs={lastQs} open={this.state.open} callback={() => this.setState({ open: !this.state.open })} />
        {q && (
          <Container>
            {q.title && <Header t="40px">{q.title}</Header>}
            {q.body && q.body.map((item, key) => <P key={key}>{item}</P>)}
            <QuestionWrapper q={q} callback={answer => this.handleAnswer(answer)} />
            <Navigation callback={this.handleNavigation} navItems={navItems} />
          </Container>
        )}
      </React.Fragment>
    );
  }
}
export default ValuationTool;
