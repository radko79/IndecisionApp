import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const OptionModal = (props) => (
    <Modal
        isOpen={true}
        contentLabel="Selected Option"
    >
        <h3>Selected Option</h3>
    </Modal>

);

export default OptionModal;