import React from 'react';
import { Modal } from 'react-bootstrap';

interface PROPS {
  id: string;
  show: boolean;
  width?: string;
  title: string;
  children: JSX.Element | JSX.Element[];
  onClose: () => void;
  outer?: boolean;
}

function Index(props: PROPS) {
  const hideModal = () => {
    if (props?.onClose) props.onClose();
  };
  return (
    <div>
      <Modal id={props.id} style={{ width: props.width }} show={props?.show} onHide={hideModal} centered size="xl">
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        {/* <Modal.Footer>
          <Button className="OutlineBtn" onClick={hideModal}>
            Cancel
          </Button>
          <Button className="customBtn" onClick={props?.onSave}>
            {loading?.saveColumns_LOADING ? ButtonLoader() : 'Save'}
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
}

export default Index;
