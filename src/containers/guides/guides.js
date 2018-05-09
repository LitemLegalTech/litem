import React from 'react';
import { observer, inject } from 'mobx-react';
import { pageView, handleNavClick } from './../../services/ga-helpers';

import Container from './../../components/styled-components/container';
import Header from './../../components/styled-components/header';
import Title from './../../components/styled-components/title';
import Accordion from './../../components/accordion/accordion';
import P from './../../components/styled-components/p';
import List from './../../components/styled-components/list';
import Link from './../../components/styled-components/link';

const guide0 = {
  title: 'How does Litem work - a practical example',
  body: (
    <React.Fragment>
      <P>
        I was knocked off my bike riding down Upper Street in London when a car turned out from a side road. I was badly
        bruised but my bike was written off.
      </P>
      <P>
        I researched my options and found Litem. After reading their Legal Guides I used Litem's 'Do I have a Case' tool
        which told me I had a good case against the driver's insurer. I only had the driver's registration so Litem
        pointed me to Ask Mid - a government service to find the driver's insurance details:
      </P>
      <a href="https://www.askmid.com/askmidenquiry.aspx" target="_blank" rel="noopener noreferrer">
        https://www.askmid.com/askmidenquiry.aspx
      </a>
      <P>
        Litem asked me some more questions and then prepared a letter for me to send. I copied the letter into an email
        and sent it to the insurers using the email address I got from Ask Mid.
      </P>
      <P>
        The insurers wrote to me a week later and said that the driver admitted the incident was their fault and they
        offered me £500 to settle my case.
      </P>
      <P>
        I used Litem's valuation tool to get an idea of what my case was worth and I got a report from a bike shop which
        confirmed that a replacement bike would cost £1,000. I got in touch with the driver's insurers and negotiated
        £1,000 for my bike and £700 for my injuries. I got a cheque for £1,700 week later. A solicitor would have
        charged me £425 but Litem was quick and easy and helped me for free.
      </P>
    </React.Fragment>
  )
};

const guide1 = {
  title: 'How long do most cases last?',
  body: (
    <React.Fragment>
      <P>
        Sometimes you can just pick up the phone to an insurance company and they will make an offer you are happy with
        and you can settle straight away. Other times they will fight the case and you will need to go to trial,
        sometimes several years down the line. Most cases are somewhere between the two.
      </P>
      <P>In general, the time will be determined by two things:</P>
      <List.OrderedList>
        <List.Item>How obvious it is that the defendant is at fault.</List.Item>
        <List.Item>How straightforward your injuries and financial losses are.</List.Item>
      </List.OrderedList>
    </React.Fragment>
  )
};
const guide2 = {
  title: 'What are the usual steps in a case?',
  body: (
    <React.Fragment>
      <P>Below is an overview of the usual steps in a straightforward case:</P>
      <List.UnorderedList>
        <List.Item>
          Send a letter to the defendant or their insurers notifying them of the claim. They should respond and admit or
          deny liability. For denials of liability see 'What if the other person (or their insurer) says it wasn't their
          fault?'.
        </List.Item>
        <List.Item>
          If they admit liability you have won and you can consider if you want to settle (see "Settling your case"). To
          value the case accurately you may want to first ask the insurer to instruct a medical expert to draft a
          report. For more details see the section called 'Obtaining medical evidence'.
        </List.Item>
        <List.Item>
          If you are not ready to settle you can still request a payment for a 'reasonable portion' of the likely value
          of your injuries and financial losses whilst the rest of the case goes ahead. This is called an interim
          payment.
        </List.Item>
        <List.Item>
          If you are unable to negotiate settlement you should consider issuing court proceedings. There are risks
          involved, so if it gets to this stage you may want to involve a solicitor to get a view as to how good the
          case is and whether they will act for you.
        </List.Item>
      </List.UnorderedList>
    </React.Fragment>
  )
};
const guide3 = {
  title: "What if the other person (or their insurer) says it wasn't their fault?",
  body: (
    <React.Fragment>
      <P>
        If the defendant denies liability then you need to gather any evidence that helps your case. See 'What evidence
        do I need' below for more details.
      </P>
      <P>
        You should also ask the defendant to send you any documents they think help their case so you can see if you
        still think you have a good case.
      </P>
      <P>
        If they keep denying liability after you've given them any further evidence, and you still think you have a
        strong case after you have seen their evidence, then it may be a good time to instruct a solicitor.
        Alternatively, you could put pressure on them by making an offer (see 'Settlng my case' below).
      </P>
    </React.Fragment>
  )
};
const guide4 = {
  title: 'What evidence do I need?',
  body: (
    <React.Fragment>
      <P>This will depend on the circumstances of the incident. In general, the following might be helpful:-</P>
      <List.UnorderedList>
        <List.Item>
          Get the collision investigation report from the police or copies of any statements they took. The way to do
          this is different for every police force so you'll need to check the procedure with them.
        </List.Item>
        <List.Item>
          Contact any witnesses and ask them to write down what they saw in as much detail as possible.
        </List.Item>
        <List.Item>
          If the defendant damaged their vehicle you can ask them for photographs and a damage report to show where the
          point of impact was.
        </List.Item>
        <List.Item>
          Check if the council have CCTV footage. They may not send this to you due to data protection issues, in which
          case you should ask them to preserve the footage and give you a reference so it can be accessed later. The
          council often delete CCTV footage so you should request this as quickly as possible.
        </List.Item>
        <List.Item>
          You will also need evidence for your injuries and financial losses. Evidence for your injuries might be
          photographs of injuries, medical records or a medical report (see 'obtaining medical evidence' below).
        </List.Item>
        <List.Item>
          For your financial losses you will need receipts or invoices to show the costs you incurred. If you have lost
          earnings and you are employed it is normal to provide payslips for 12 weeks before the incident and then for
          the period you were off work to show your average earnings.
        </List.Item>
        <List.Item>
          If your employer has paid you sick pay or your insurer has paid for your vehicle damage, or a medical insurer
          has paid for treatment, you may have a duty to recover their losses from the defendants as well as your own.
          This is called a 'subrogated claim' and you should write to your employer / insurer to check if you have to
          recover the money they've spent.
        </List.Item>
      </List.UnorderedList>
    </React.Fragment>
  )
};
const guide5 = {
  title: 'Obtaining medical evidence',
  body: (
    <React.Fragment>
      <P>
        In straightforward cases you may prefer to settle without medical evidence as this can delay the process.
        However, getting a medical report gives you peace of mind. The medical expert will examine you to assess your
        injuries and any ongoing symptoms.
      </P>
      <P>
        The medical report needs to be from an independent expert (i.e. someone who hasn't previously treated you).
        Sometimes the defendants will not settle the case without a medical report. The cost of the expert is normally
        paid by the defendant if they have admitted liability.
      </P>
      <List.UnorderedList>
        <List.Item>GP - if you have suffered a minor injury.</List.Item>
        <List.Item>Orthopaedic surgeon – if you have suffered a fracture or more severe soft tissue injury.</List.Item>
        <List.Item>Plastic surgeon – if you have a scar.</List.Item>
        <List.Item>Dental surgeon – if you have damaged your teeth.</List.Item>
      </List.UnorderedList>
      <P>
        You may not always like what is in the report. However, the expert is completely independent and must state
        their professional medical opinion as they see it.
      </P>
    </React.Fragment>
  )
};
const guide6 = {
  title: 'Settling the case',
  body: (
    <React.Fragment>
      <P>
        Once you know how long your injuries will last you can value your injury and financial losses. You can use our
        valuation tool to give you an idea of what your case is worth or you could instruct a solicitor. If you are
        doing it yourelf you need to send the details to the defendants to invite their offers, along with any documents
        to prove your losses. If they do not make an offer, or they make an offer that is too low, you may want to make
        an offer yourself.
      </P>
      <P>
        If the defendant makes a 'formal' offer then there are risks attached. In general, if you accept the offer later
        than 21 days after it was made (or if you get a lower amount at trial) then you may have to pay the defendant's
        legal costs from 21 days after the offer was made until the date you accept. Also, they are not obliged to pay
        your legal expenses during this period.
      </P>
      <P>
        Once you have agreed a settlement amount with the defendants you cannot go back and get more money. Settling the
        case if you are still suffering from your injury brings the risk of undersetting as you do not know how long
        your injury will last for. This risk is increased if you do not have an expert opinion on how long the injuries
        will last.
      </P>
      <P>
        Compensation payments are not taxable for UK residents. However, the damages can affect your entitlement to
        receive certain means tested benefits. There are ways to protect your benefits and you can get guidance on this
        from the Citizen's Advice Bureau.
      </P>
    </React.Fragment>
  )
};
const guide7 = {
  title: 'How much for my damaged bike?',
  body: (
    <React.Fragment>
      <P>
        If the case wins the defendant will be liable to pay for the damage to your bike. You should get a damage report
        from a bike shop you trust.
      </P>
      <P>
        You will be entitled to the replacement cost of any damaged parts (or the whole bike if it is a write off) not
        the new cost. In other words, this is the value of the bike if you were buying it in the age and condition it
        was in at the time of the incident.
      </P>
    </React.Fragment>
  )
};
const guide8 = {
  title: 'What happens if it was partially my fault?',
  body: (
    <React.Fragment>
      <P>
        The defendant may say that your actions contributed to the incident. For instance, if you were filtering to the
        left of a row of traffic and an oncoming car turns right, going across your path, you would normally be around
        50% to blame for the incident because filtering is seen as a hazardous activity, so you need to take care, but
        the driver holds a share of blame as well. If so, your damages will be reduced by the proportion you are at
        fault (i.e. if you are 50% to blame and the value of your case is £1,000 you would receive £500 less). You are
        also liable for 50% of any injury or financial loss caused to the defendant.
      </P>
    </React.Fragment>
  )
};
const guide9 = {
  title: 'What if the case involves a child?',
  body: (
    <React.Fragment>
      <P>If a child is injured their parents or guardians can pursue a claim on their behalf.</P>
      <P>
        In all cases where the injured person is under 18 a court has to approve any award. This is to check that the
        case settles for the right amount. For this reason, it is normal to instruct a lawyer in these cases.
      </P>
      <P>Any compensation awarded to the child will be placed into the court fund and invested until they turn 18.</P>
      <P>
        The general rule is that you have three years from the date of the incident to issue a claim in the court.
        However, children usually have until their 21st birthday to issue a claim.
      </P>
    </React.Fragment>
  )
};
const guide10 = {
  title: 'The importance of being honest',
  body: (
    <React.Fragment>
      <P>
        It is important to be honest in your case and not lie or exaggerate. If an element of your claim is found to be
        “fundamentally dishonest” you might not be able to continue with your case. You may also have to pay the other
        side's legal costs.
      </P>
      <P>
        If you issue court proceedings then further potential risks arise and you may want to take legal advice from a
        solicitor.
      </P>
    </React.Fragment>
  )
};

const guide11 = {
  title: "Top 5 Tips if you've come off your bike",
  body: (
    <React.Fragment>
      <P>
        Here are some tips if you have come off your bike in an incident with another road user. This is on the
        assumption that you are able to get to a safe position.
      </P>
      <List.OrderedList>
        <List.Item>
          If the defendant is a motorist or motorcyclist take their registration. If they are a cyclist or pedestrian
          then take their name and address and ask if they have insurance.
        </List.Item>
        <List.Item>
          Take the contact details of any witnesses. Follow up soon to ask them to send you a short account of what
          happened.
        </List.Item>
        <List.Item>
          Get photographs of the position of your bike in the road and (if applicable) the other vehicle.
        </List.Item>
        <List.Item>
          Contact the council to check if there is any CCTV footage and, if so, to get them to preserve the footage. If
          not this can be deleted within days.
        </List.Item>
        <List.Item>Beware of accepting money from the defendant as it may be seen as settling the case.</List.Item>
      </List.OrderedList>
    </React.Fragment>
  )
};

@inject('RootStore')
@observer
class Guides extends React.Component {
  componentWillMount() {
    this.props.RootStore.UIStore.handleFadeIn();
    pageView(window.location.pathname);
  }
  render() {
    return (
      <Container>
        <Title center t="30px">
          Guides
        </Title>
        <Header center>Here are our guides to help you settle your case.</Header>
        <Header center t="5px" b="30px">
          Please click{' '}
          <Link id="tool-hub guides" name="tool-hub" onClick={e => handleNavClick(e, this.props.history)}>
            here
          </Link>{' '}
          when you are ready to use our tools to assess and resolve your case.
        </Header>

        <Accordion id="guide11" content={guide11} />
        <Accordion id="guide0" content={guide0} />
        <Accordion id="guide1" content={guide1} />
        <Accordion id="guide2" content={guide2} />
        <Accordion id="guide3" content={guide3} />
        <Accordion id="guide4" content={guide4} />
        <Accordion id="guide5" content={guide5} />
        <Accordion id="guide6" content={guide6} />
        <Accordion id="guide7" content={guide7} />
        <Accordion id="guide8" content={guide8} />
        <Accordion id="guide9" content={guide9} />
        <Accordion id="guide10" content={guide10} />
      </Container>
    );
  }
}

export default Guides;
