import React from 'react';
import Modal from './Modal';
import Button from '../FormElements/Button';

const ErrorMode = props => {
  return (
    <Modal
      onCancel={props.onClear}
      header={<Button onClick={props.onClear}>Click Here to Continue</Button>} 
      show={!!props.error}
      footer={<Button onClick={props.onClear}>Okay</Button>}
    >
      <p>{props.error}</p>
    </Modal>
  );
};

export default ErrorMode;
