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
import data from './../../stores/data-valuer';

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
    nxtQ: 'injuryType',
    lastQs: [],
    component: 'Loader',
    navItems: ['back']
  };

  componentWillMount() {
    this.props.RootStore.UIStore.handleFadeIn();
  }

  componentDidMount() {
    pageView(window.location.pathname);
    //delays the assigning of the QuestionWrapper component to simulate loading
    setTimeout(() => {
      this.setState({ component: data[this.state.nxtQ].type });
    }, 1000);
  }

  handleAnswer = answer => {
    //takes the 'answer' object from the QuestionWrapper callback and puts it in state
    console.log('question:', answer.question, 'answer:', answer.answer, 'nxtQ', answer.nxtQ);
    let lastQs = this.state.lastQs;
    lastQs.push(answer);
    this.setState({
      nxtQ: answer.nxtQ,
      lastQs: lastQs,
      component: data[answer.nxtQ].type
    });
    this.props.RootStore.UIStore.handleFadeIn();
  };

  handleNavigation = navEvent => {
    if (navEvent.item === 'back' && this.state.lastQs.length > 0) {
      let lastQs = this.state.lastQs;
      const nxtQ = lastQs.pop();
      this.setState({
        nxtQ: nxtQ.question,
        lastQs: lastQs,
        component: data[nxtQ.question].type
      });
    }
    this.props.RootStore.UIStore.handleFadeIn();
  };

  render() {
    const QuestionWrapper = components[this.state.component];
    const q = data[this.state.nxtQ];
    const navItems = this.state.navItems;

    return (
      <Container>
        <Title>Valuation Tool</Title>
        {q.title && <Header>{q.title}</Header>}
        {q.body && q.body.map((item, key) => <P key={key}>{item}</P>)}
        <QuestionWrapper q={q} callback={answer => this.handleAnswer(answer)} />
        <Navigation callback={this.handleNavigation} navItems={navItems} />
      </Container>
    );
  }
}
export default ValuationTool;
