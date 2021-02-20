const Modal = {
  open() {
    /* Open modal */
    document
      .querySelector('.modal-overlay')
      .classList
      .add('active');
  },
  close() {
    /* Close modal */
    document
      .querySelector('.modal-overlay')
      .classList
      .remove('active');
  },
}