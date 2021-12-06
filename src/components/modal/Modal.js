import "./Modal.scss"

function Modal({ children, isOpen, changeIsOpen }) {
  return (
    <div
      onClick={() => changeIsOpen(false)}
      className="modal"
      style={isOpen ? { display: "block" } : { display: "none" }}
    >
      <div onClick={(e) => e.stopPropagation()} className="modal-content">
        <span onClick={() => changeIsOpen(false)} className="close">
          &times;
        </span>
        {children}
      </div>
    </div>
  )
}

export default Modal
