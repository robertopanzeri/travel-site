import $ from 'jquery';

class Modal {
    constructor() {
        this.modal = $('.modal');
        this.openModalButtons = $('.modal-opener');
        this.closeModalButton = $('.modal__close');

        this.events();
    }

    events() {
        this.openModalButtons.click(this.openModal.bind(this));
        this.closeModalButton.click(this.closeModal.bind(this));
        $(document).keyup(this.keyPressHandler.bind(this));
    }

    keyPressHandler(e) {
        if (e.keyCode == 27 ) {
            this.closeModal();
        }
    }

    openModal() {
        this.modal.addClass('modal--is-visible');
        return false;
    }

    closeModal() {
        this.modal.removeClass('modal--is-visible');
    }
}

export default Modal;