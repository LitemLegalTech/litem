import React from 'react';
import DOMPurify from 'dompurify';
import moment from 'moment';
import Header from './../../components/styled-components/header';
//import Date from './../../../components/styled-components/date';
//import BtnGroup from './../../../components/styled-components/btn-group';
import Autotab from './../../components/auto-tab/auto-tab';

class Dates extends React.Component {
  state = {
    day: '',
    month: '',
    year: ''
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () =>
      this.props.callback(
        moment(`${this.state.day}${this.state.month}${this.state.year}`, 'DDMMYYYY'),
        this.props.q.nxtQId
      )
    );
  };
  render() {
    const title = { __html: DOMPurify.sanitize(this.props.q.title) };
    console.log(this.state);
    return (
      <React.Fragment>
        <Header center t="30px" dangerouslySetInnerHTML={title} />
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '30px',
            width: '95%',
            maxWidth: '350px',
            textAlign: 'center',
            padding: '1rem',
            border: 'inset 1px #CCC',
            background: '#FFF',
            borderRadius: '4px',
            color: '#666'
          }}
        >
          <Autotab
            type="tel"
            name="day"
            maxLength={2}
            hint="DD"
            value={this.state.day}
            onChange={this.handleChange}
            autoFocus
          />
          <Autotab
            type="tel"
            name="month"
            maxLength={2}
            hint="MM"
            value={this.state.month}
            onChange={e => this.handleChange(e)}
          />
          <Autotab
            type="tel"
            name="year"
            maxLength={4}
            hint="YYYY"
            value={this.state.year}
            onChange={e => this.handleChange(e)}
          />
        </div>
        {/*<BtnGroup>
          <Date value={this.state.date} onChange={e => this.handleChange(e)} />
        </BtnGroup>*/}
      </React.Fragment>
    );
  }
}
export default Dates;
