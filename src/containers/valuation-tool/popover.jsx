/*import React from 'react';
import { Popover, PopoverArrow, PopoverBody, PopoverHeader } from 'styled-popover-component';
import { BtnPop } from './customized-components';

export default class PopoverToggle extends React.Component {
  state = {
    top: 0,
    left: -100,
    hidden: true
  };

  handleModal(e) {
    this.setState({
      top: e.target.offsetTop - e.target.offsetHeight,
      left: e.target.offsetLeft + e.target.offsetWidth,
      hidden: !this.state.hidden
    });
  }

  render() {
    const { top, left, hidden } = this.state;
    const title = this.props.title === undefined ? 'no title' : this.props.title;
    const body = this.props.body === undefined ? 'no body' : this.props.body;
    return (
      <React.Fragment>
        <BtnPop onClick={e => this.handleModal(e)} />
        <Popover
          hidden={hidden}
          style={{
            top: `${top}px`,
            left: `${left}px`
          }}
          left
        >
          <PopoverArrow left />
          <PopoverHeader left>{title}</PopoverHeader>
          <PopoverBody left>{body}</PopoverBody>
        </Popover>
      </React.Fragment>
    );
  }
}*/

import React from 'react';
import { Modal, ModalBody, ModalContent, ModalDialog, ModalHeader, ModalTitle } from 'styled-modal-component';
import { Button } from 'styled-button-component';
import { BtnPop } from './customized-components';

export default class MyModal extends React.Component {
  state = {
    hidden: true
  };

  handleModal() {
    this.setState({
      hidden: !this.state.hidden
    });
  }

  render() {
    const { hidden } = this.state;
    const title = this.props.title === undefined ? 'no title' : this.props.title;
    const body = this.props.body === undefined ? 'no body' : this.props.body;
    return (
      <React.Fragment>
        <Modal hidden={hidden}>
          <ModalDialog>
            <ModalContent>
              <ModalHeader>
                <ModalTitle>{title}</ModalTitle>
                <Button outline onClick={() => this.handleModal()}>
                  <span aria-hidden="true">&times;</span>
                </Button>
              </ModalHeader>
              <ModalBody>{body}</ModalBody>
            </ModalContent>
          </ModalDialog>
        </Modal>
        <BtnPop onClick={() => this.handleModal()} />
      </React.Fragment>
    );
  }
}
