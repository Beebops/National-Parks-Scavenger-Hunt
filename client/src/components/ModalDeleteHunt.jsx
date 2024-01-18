import '../styles/modal-logout.css'

export default function ModalDeleteHunt ({isOpen, onClose, onConfirm}) {
  if(!isOpen) {
    return null
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Confirm Logout</h2>
        <p>Are you sure you want to delete this hunt?</p>
        <button className='modal-logout-btn' onClick={onConfirm}>Yes, delete</button>
        <button className='modal-cancel-btn' onClick={onClose}>Cancel</button>
      </div>
    </div>
  )
}