import React from 'react';
import { observer, inject } from 'mobx-react';
//import Container from './../../components/styled-components/container';
//import Title from './../../components/styled-components/title';
import Header from './../../components/styled-components/header';
import P from './../../components/styled-components/p';
import List from './../../components/styled-components/list';
import Popover from './popover';

@inject('RootStore')
@observer
class Valuation extends React.Component {
  render() {
    const answers = this.props.RootStore.ValuationStore.valuationObj.lastQs;
    const {
      fTravel,
      fTreatment,
      fEarnings,
      fMedication,
      fRepairs,
      fOther
    } = this.props.RootStore.ValuationStore.valuationObj.financialDetails;
    const injuries = this.props.RootStore.ValuationStore.valuationObj.injuries;
    const injuryValues = injuries.map(a => a.injuryValue);
    const totalInjuryValue = injuryValues.reduce((accumulator, currentValue) => accumulator + currentValue);
    /*
    console.log(this.props.RootStore.ValuationStore.valuationObj.financialDetails);
    const totalFinancialLosses = this.props.RootStore.ValuationStore.valuationObj.financialDetails.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    console.log(totalFinancialLosses);*/

    const totalClaimValue = fTravel + fTreatment + fEarnings + fMedication + fRepairs + fOther + totalInjuryValue;

    return (
      <React.Fragment>
        <Header>Here is your valuation</Header>
        <P>
          <strong>SUMMARY</strong>
          <br />
          The overall value of your claim is made from the value of your injury and your financial losses. Valuing a
          case is not an exact science and (were the case to go to trial) a different judge might award a different
          amount.
        </P>
        <P>
          This figure is to give you a guide for what your case might be worth, from the information given and settling
          on the basis of this information is at your own risk.
        </P>
        {answers === 'valAnsFractureForearm' && (
          <React.Fragment>
            <P>
              <strong>FOREARM</strong>
            </P>
            <P>
              Serious fractures of one or both forearms where there is significant permanent residual disability whether
              functional or cosmetic.<br />£34,340 to £52,490
            </P>
            <P>
              Fractures of the Forearm<br />£5,810 to £16,830
            </P>
          </React.Fragment>
        )}

        <P>
          <strong>VALUE OF INJURY</strong>
          <br />You suffered from the following injuries:
        </P>
        <List.UnorderedList>
          {injuries.map((item, i) => {
            return (
              <List.Item key={i}>
                {item.injuryType} to your {item.injuryLocation.toLowerCase()} which lasted{' '}
                {item.injuryDuration.toLowerCase()}.{' '}
                {typeof item.injuryValue !== 'object' ? (
                  `This should be worth around £${item.injuryValue}.`
                ) : (
                  <span>
                    Depending on a number of factors the value of this injury can vary a great deal. Please click{' '}
                    <Popover title={item.injuryValue.title} body={item.injuryValue.body} /> for more information.
                  </span>
                )}
              </List.Item>
            );
          })}
        </List.UnorderedList>
        {/*<P>Your injury is worth around £{totalInjuryValue}.</P>*/}

        {fTreatment + fEarnings + fMedication + fRepairs + fOther === 0 ? (
          <React.Fragment>
            <P>
              <strong>FINANCIAL LOSSES</strong>
              <br />You indicated that you had no financial losses:
            </P>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <P>
              <strong>Financial Losses</strong>
              <br />You indicated that you have the following financial losses:
            </P>
            <List.UnorderedList>
              {fTravel > 0 && <List.Item>Travel - £{fTravel}</List.Item>}
              {fTreatment > 0 && <List.Item>Treatment - £{fTreatment}</List.Item>}
              {fEarnings > 0 && <List.Item>Lost earnings - £{fEarnings}</List.Item>}
              {fMedication > 0 && <List.Item>Medical expenses - £{fMedication}</List.Item>}
              {fRepairs > 0 && <List.Item>Damage to property - £{fRepairs}</List.Item>}
              {fOther > 0 && <List.Item>Other - £{fOther}</List.Item>}
            </List.UnorderedList>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
export default Valuation;
