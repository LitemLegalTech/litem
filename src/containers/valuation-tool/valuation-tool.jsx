import React from 'react';
import { observer, inject } from 'mobx-react';
import { pageView, handleNavClick } from './../../services/ga-helpers';

import Container from './../../components/styled-components/container';
import Header from './../../components/styled-components/header';
import P from './../../components/styled-components/p';
import Loader from './loader';
import FinancialInputs from './financial-inputs.jsx';
import DropdownWrapper from './dropdown-wrapper';
import Valuation from './valuation';
import Navigation from './navigation';
import ContactForm from './contact-form';
import Sidebar from './sidebar';
import Popover from './popover';

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
    this.handleNavItems();
    setTimeout(() => {
      this.setState({
        component: this.props.RootStore.ValuationStore.valuationObj.data[this.props.RootStore.ValuationStore.currentQ]
          .type
      });
    }, 2000);
  }

  handleAnswer = answer => {
    let lastQs = this.props.RootStore.ValuationStore.valuationObj.lastQs;
    lastQs.push(answer);
    this.props.RootStore.ValuationStore.handleAnswer(lastQs, answer, answer.nxtQ);

    this.setState({
      component: this.props.RootStore.ValuationStore.valuationObj.data[this.props.RootStore.ValuationStore.currentQ]
        .type
    });
    if (this.props.RootStore.ValuationStore.currentQ === 'addInjury') this.props.RootStore.ValuationStore.addInjury();
    this.handleNavItems();
    this.props.RootStore.UIStore.handleFadeIn();
  };

  handleNavItems = () => {
    if (
      this.props.RootStore.ValuationStore.valuationObj.injuries.length === 0 &&
      this.props.RootStore.ValuationStore.currentQ === this.props.RootStore.ValuationStore.firstQ
    ) {
      this.setState({ navItems: [] });
    } else {
      this.setState({ navItems: ['back', 'hist', 'clear'] });
    }
  };
  //move this to UI store
  handleNavigation = navEvent => {
    switch (navEvent.item) {
      case 'back':
        if (this.props.RootStore.ValuationStore.currentQ === 'addInjury')
          this.props.RootStore.ValuationStore.removeLastInjury();
        if (this.props.RootStore.ValuationStore.valuationObj.lastQs.length > 0) {
          let lastQs = this.props.RootStore.ValuationStore.valuationObj.lastQs;
          const nxtQ = lastQs.pop();
          this.props.RootStore.ValuationStore.setCurrentQ(nxtQ.question);
          this.props.RootStore.ValuationStore.setLocal();
          this.setState({
            component: this.props.RootStore.ValuationStore.valuationObj.data[nxtQ.question].type
          });
          this.handleNavItems();
        }
        break;
      case 'hist':
        this.setState({ open: !this.state.open });
        break;
      case 'clear':
        this.props.RootStore.ValuationStore.handleAnswer([], '', '');
        localStorage.removeItem('valuationObj');
        this.props.RootStore.ValuationStore.setValuationObj();
        break;
      default:
        break;
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
        <Container>
          {q.title && (
            <Header t="40px">
              {q.title}
              <Popover title={q.popover.title} body={q.popover.body} />
            </Header>
          )}
          {q.body && q.body.map((item, key) => <P key={key}>{item}</P>)}

          <QuestionWrapper q={q} callback={answer => this.handleAnswer(answer)} />
          <Navigation callback={this.handleNavigation} navItems={navItems} />
        </Container>
      </React.Fragment>
    );
  }
}
export default ValuationTool;
