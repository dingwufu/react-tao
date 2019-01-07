import * as React from 'react';
import * as ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root') || '';

interface P {
  children ?: React.ReactNode,
}
class Modal extends React.Component<P> {
  private el: HTMLDivElement;
  constructor(props: P) {
    super(props);
    this.el = document.createElement('div');
  }
  componentDidMount() {
    modalRoot && modalRoot.appendChild(this.el);
  }
  componentWillUnmount() {
    modalRoot && modalRoot.removeChild(this.el);
  }
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
  }
}

export default Modal;
