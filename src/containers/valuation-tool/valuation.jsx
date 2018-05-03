import React from 'react';
import { observer, inject } from 'mobx-react';
//import Container from './../../components/styled-components/container';
//import Title from './../../components/styled-components/title';
import Header from './../../components/styled-components/header';
import P from './../../components/styled-components/p';
import List from './../../components/styled-components/list';

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

    const totalInjuryValue = this.props.RootStore.ValuationStore.valuationObj.injuryValues.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    const totalClaimValue = fTravel + fTreatment + fEarnings + fMedication + fRepairs + fOther + totalInjuryValue;
    const injuries = this.props.RootStore.ValuationStore.valuationObj.injuries;
    return (
      <React.Fragment>
        <Header>Here is your valuation</Header>
        <P>
          <strong>SUMMARY</strong>
        </P>
        <P>
          The overall value of your claim is in the region of <strong>£{totalClaimValue}</strong>. This is made from the
          value of your injury and your financial losses. Valuing a case is not an exact science and (were the case to
          go to trial) a different judge might award a different amount.
        </P>
        <P>
          This figure is to give you a guide for what your case might be worth, from the information given and settling
          on the basis of this information is at your own risk.
        </P>
        <P>
          <strong>VALUE OF INJURY</strong>
        </P>
        {answers === 'valAnsFractureForearm' && (
          <div>
            <h6>FOREARM</h6>
            <P>
              Serious fractures of one or both forearms where there is significant permanent residual disability whether
              functional or cosmetic.<br />£34,340 to £52,490
            </P>
            <P>
              Fractures of the Forearm<br />£5,810 to £16,830
            </P>
          </div>
        )}

        <P>You suffered from the following injuries:</P>
        <List.UnorderedList>
          {injuries.map((item, i) => {
            return (
              <List.Item key={i}>
                {item.injuryType} to your {item.injuryLocation.toLowerCase()} which lasted{' '}
                {item.injuryDuration.toLowerCase()}.
              </List.Item>
            );
          })}
        </List.UnorderedList>
        <P>Your injury is worth around £{totalInjuryValue}.</P>
        <P>
          <ins>Financial Losses</ins>
        </P>
        {fTreatment + fEarnings + fMedication + fRepairs + fOther === 0 ? (
          <React.Fragment>
            <P>You indicated that you had no financial losses:</P>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <P>You indicated that you have the following financial losses:</P>
            <List.OrderedList>
              {fTravel && <List.Item>Travel - £{fTravel}</List.Item>}
              {fTreatment && <List.Item>Treatment - £{fTreatment}</List.Item>}
              {fEarnings && <List.Item>Lost earnings - £{fEarnings}</List.Item>}
              {fMedication && <List.Item>Medical expenses - £{fMedication}</List.Item>}
              {fRepairs && <List.Item>Damage to property - £{fRepairs}</List.Item>}
              {fOther && <List.Item>Other - £{fOther}</List.Item>}
            </List.OrderedList>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
export default Valuation;
