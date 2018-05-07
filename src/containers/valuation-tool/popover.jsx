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
