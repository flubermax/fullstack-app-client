import React from 'react';
import PropTypes from 'prop-types'

import './Modal.scss'

const Modal = ({active, setActive, children}) => {

  return (
    <div className={active ? 'modal active' : 'modal'}>
      <div className="modal__overlay" onClick={() => setActive(false)}>
        <div className="modal__body" onClick={(e) => e.stopPropagation()}>
          <div className="modal__close" onClick={() => setActive(false)}></div>
          {children}
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
  children: PropTypes.any
}

export default Modal;