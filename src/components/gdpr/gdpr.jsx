import React from 'react';
import { observer, inject } from 'mobx-react';

import Link from './../../components/styled-components/link';

@inject('RootStore')
@observer
export default class GDPR extends React.Component {
  componentWillMount() {
    this.props.RootStore.UIStore.checkGDPR();
  }

  handleAllow = () => {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 30);
    document.cookie = `cookieconsent_status=allow; expires=${expiry.toUTCString()}`;
    this.props.RootStore.UIStore.setGDPR(true);
    window.location.reload();
  };

  handleDeny = () => {
    document.cookie = `cookieconsent_status=deny`;
    this.props.RootStore.UIStore.setGDPR(false);
    window.location.reload();
  };

  render() {
    const isMobile = window.innerWidth < 640;
    return (
      <div
        className="noat-cookie__consent"
        style={{
          position: 'fixed',
          zIndex: 2147483647,
          bottom: 0,
          left: 0,
          right: 0,
          transition: 'transform .3s ease-out',
          transform: `translateY(${!this.props.RootStore.UIStore.showGDPR ? '100%' : '0'})`
        }}
      >
        <div
          className="noat-cookie-consent__banner"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '1em',
            fontFamily: 'Sans-Serif',
            background: 'rgba(0,0,0,.8)',
            color: ' #fafafa',
            flexFlow: `${isMobile ? 'column' : ''}`
          }}
        >
          <span className="noat-cookie-consent-banner__text" style={{ alignSelf: 'center' }}>
            {this.props.text
              ? this.props.text
              : "We love transparency and we only use depersonalised data for behavioural statistics to improve our service. If you don't trust us you can disable cookies at any time and Litem's functionality will not be effected."}
          </span>
          <span
            className="noat-cookie-consent-banner__other-actions"
            style={{
              flexGrow: 1,
              padding: `${isMobile ? '1em 0' : '0 2em'}`,
              display: 'flex',
              flexFlow: 'column',
              justifyContent: 'center',
              whiteSpace: 'nowrap',
              opacity: 0.8,
              fontSize: '75%'
            }}
          >
            <Link
              className="noat-cookie-consent-banner-other-actions__privacy-policy"
              style={{ color: 'inherit' }}
              onClick={() => this.props.RootStore.UIStore.history.push(this.props.privacyPolicyUrl)}
            >
              {this.props.privacyPolicyText ? this.props.privacyPolicyText : 'Cookie Policy'}
            </Link>
            <Link
              className="noat-cookie-consent-banner-other-actions__deny"
              style={{ color: 'inherit' }}
              onClick={this.handleDeny}
            >
              {this.props.denyText ? this.props.denyText : 'Disable Cookies'}
            </Link>
          </span>
          <span
            className="noat-cookie-consent-banner__allow"
            style={{
              display: 'flex',
              alignItems: 'center',
              alignSelf: `${isMobile ? 'auto' : 'center'}`,
              maxHeight: '5em',
              minHeight: '5em',
              padding: '0 2em',
              background: '#38e',
              borderRadius: '4px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              justifyContent: `${isMobile ? 'center' : ''}`
            }}
            onClick={this.handleAllow}
          >
            {this.props.allowText ? this.props.allowText : 'Accept'}
          </span>
        </div>
      </div>
    );
  }
}
