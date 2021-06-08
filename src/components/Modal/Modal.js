import React from 'react'; 
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../Modal-overlay/ModalOverlay';

const modalRoot = document.getElementById("react-modals");

const Modal = ({ children, title, onClose }) => {
  const escClose = (e) => {
    if(e.key === 'Escape') {
      onClose();
    }
  }

  React.useEffect(() => { 
    document.addEventListener("keydown", escClose);

    return () => {
      document.removeEventListener("keydown", escClose);
    }
  }, [])


  return ReactDOM.createPortal(
    (
      <>
        <ModalOverlay onClose={onClose} />
        <div className={ styles.modal }  >
          <div className={ styles.close } onClick={onClose}>
            <CloseIcon type="primary" />
          </div>
          <p className={`${ styles.title } text text_type_main-large`} >{title}</p>
          {children}
        </div>
      </>
    ), modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.element.isRequired
}

export default Modal;