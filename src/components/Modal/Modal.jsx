import { createPortal } from "react-dom";
import { Component } from "react";
import { Overlay, ModalWindow } from "./Modal.styled";

const modalRoot= document.querySelector('#modal-root')

export default class Modal extends Component {

    state = {
        data: this.props.data,
    }
    componentDidMount() {
        window.addEventListener('keydown', this.handleOnClose)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleOnClose)
    }

     handleOnClose = e => {
    if (e.code === 'Escape' || e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

    render() {
        // const { largeImgURL, tags } = this.props.data
        const { data } = this.props;
        const { largeImgURL, tags } = data || {};
        return createPortal(
            <Overlay onClick={this.handleOnClose}>
                <ModalWindow>
                   <img src={largeImgURL} alt={tags} />
                </ModalWindow>
            </Overlay>, modalRoot,
        );
    };
};