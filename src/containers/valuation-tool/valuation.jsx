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
    //const answers = this.props.RootStore.ValuationStore.valuationObj.lastQs;
    const {
      fTravel,
      fTreatment,
      fEarnings,
      fPropertyDamage,
      fRepairs,
      fOther
    } = this.props.RootStore.ValuationStore.valuationObj.financialDetails;
    const injuries = this.props.RootStore.ValuationStore.valuationObj.injuries;
    /*const injuryValues = injuries.map(a => a.injuryValue);
    const totalInjuryValue = injuryValues.reduce((accumulator, currentValue) => accumulator + currentValue);

    console.log(this.props.RootStore.ValuationStore.valuationObj.financialDetails);
    const totalFinancialLosses = this.props.RootStore.ValuationStore.valuationObj.financialDetails.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    console.log(totalFinancialLosses);*/

    const totalFinancialLosses = fTravel + fTreatment + fEarnings + fPropertyDamage + fRepairs + fOther;

    return (
      <React.Fragment>
        <Header>Here is your valuation</Header>
        <P>
          <strong>SUMMARY</strong>
          <br />
          The overall value of your claim is determined by the value of your injury plus your financial losses. The
          figures shown are to give you a guide as to what your case might be worth from the information given. In
          particular, please note that this list of financial losses is not complete and you may have other losses not
          mentioned.
        </P>
        <P>
          <strong>VALUE OF INJURY</strong>
          <br />
          {injuries.length > 1 ? 'You suffered the following injuries:' : 'You suffered the following injury:'}
        </P>

        <List.UnorderedList>
          {injuries.map((item, i) => {
            return (
              <React.Fragment>
                {item.injuryType === 'Damage to Teeth' && (
                  <List.Item key={i}>
                    Dental damage which lasted {item.injuryDuration.toLowerCase()}. Depending on a number of factors the
                    value of this injury can vary a great deal. Please click{' '}
                    <Popover title={item.injuryValue.title} body={item.injuryValue.body} /> for more information.
                  </List.Item>
                )}

                {item.injuryType === 'Psychiatric' &&
                  item.injuryLocation === 'Travel Anxiety' && (
                    <List.Item key={i}>
                      Travel Anxiety which lasted {item.injuryDuration.toLowerCase()}. Depending on a number of factors
                      the value of this injury can vary a great deal. Please click{' '}
                      <Popover title={item.injuryValue.title} body={item.injuryValue.body} /> for more information.
                    </List.Item>
                  )}

                {item.injuryType === 'Psychiatric' &&
                  item.injuryLocation === 'Other' && (
                    <List.Item key={i}>
                      Psychiatric harm which lasted {item.injuryDuration.toLowerCase()}. Depending on a number of
                      factors the value of this injury can vary a great deal. Please click{' '}
                      <Popover title={item.injuryValue.title} body={item.injuryValue.body} /> for more information.
                    </List.Item>
                  )}

                {item.injuryType === 'Burn / laceration / scarring' &&
                  item.injuryLocation === 'Facial' && (
                    <List.Item key={i}>
                      Burn / laceration / scarring to your face which lasted {item.injuryDuration.toLowerCase()}.
                      Depending on a number of factors the value of this injury can vary a great deal. Please click{' '}
                      <Popover title={item.injuryValue.title} body={item.injuryValue.body} /> for more information.
                    </List.Item>
                  )}

                {item.injuryType === 'Burn / laceration / scarring' &&
                  item.injuryLocation === 'Non-facial' && (
                    <List.Item key={i}>
                      Non-facial burn / laceration / scarring which lasted {item.injuryDuration.toLowerCase()}.
                      Depending on a number of factors the value of this injury can vary a great deal. Please click{' '}
                      <Popover title={item.injuryValue.title} body={item.injuryValue.body} /> for more information.
                    </List.Item>
                  )}

                {item.injuryType === 'Brain injury' && (
                  <List.Item key={i}>
                    Brain injury which lasted {item.injuryDuration.toLowerCase()}. Depending on a number of factors the
                    value of this injury can vary a great deal. Please click{' '}
                    <Popover title={item.injuryValue.title} body={item.injuryValue.body} /> for more information.
                  </List.Item>
                )}

                {item.injuryType === 'Spinal chord injury' && (
                  <List.Item key={i}>
                    Spinal chord injury which lasted {item.injuryDuration.toLowerCase()}. Depending on a number of
                    factors the value of this injury can vary a great deal. Please click{' '}
                    <Popover title={item.injuryValue.title} body={item.injuryValue.body} /> for more information.
                  </List.Item>
                )}

                {item.injuryType !== 'Brain injury' &&
                  item.injuryType !== 'Burn / laceration / scarring' &&
                  item.injuryType !== 'Spinal chord injury' &&
                  item.injuryType !== 'Damage to Teeth' &&
                  item.injuryType !== 'Psychiatric' && (
                    <List.Item key={i}>
                      {item.injuryType} to your {item.injuryLocation.toLowerCase()} which lasted{' '}
                      {item.injuryDuration.toLowerCase()}.{' '}
                      {typeof item.injuryValue !== 'object' ? (
                        item.injuryDuration === 'more than 2 years' ? (
                          `This should be worth more than £${item.injuryValue}.`
                        ) : (
                          `This should be worth around £${item.injuryValue}.`
                        )
                      ) : (
                        <span>
                          Depending on a number of factors the value of this injury can vary a great deal. Please click{' '}
                          <Popover title={item.injuryValue.title} body={item.injuryValue.body} /> for more information.
                        </span>
                      )}
                    </List.Item>
                  )}
              </React.Fragment>
            );
          })}
        </List.UnorderedList>
        {injuries.length > 1 && (
          <P>
            You had several injuries. It is normal to reduce the total value by 15% - 25% to reflect any overlap between
            the different injuries.
          </P>
        )}

        {totalFinancialLosses === 0 ? (
          <React.Fragment>
            <P>
              <strong>FINANCIAL LOSSES</strong>
              <br />You indicated that you had no financial losses.
            </P>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <P>
              <strong>FINANCIAL LOSSES</strong>
              <br />You indicated that you've suffered the following financial losses:
            </P>
            <List.UnorderedList>
              {fTravel > 0 && <List.Item>Travel - £{fTravel}</List.Item>}
              {fTreatment > 0 && <List.Item>Treatment - £{fTreatment}</List.Item>}
              {fEarnings > 0 && <List.Item>Lost earnings - £{fEarnings}</List.Item>}
              {fPropertyDamage > 0 && <List.Item>Property damage - £{fPropertyDamage}</List.Item>}
              {fRepairs > 0 && <List.Item>Damage to property - £{fRepairs}</List.Item>}
              {fOther > 0 && <List.Item>Other - £{fOther}</List.Item>}
            </List.UnorderedList>
            <P>Your total financial losses are £{totalFinancialLosses}</P>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
export default Valuation;
