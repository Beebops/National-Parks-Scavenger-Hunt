import '../styles/modal-logout.css'

export default function ModalLogout ({isOpen, onClose, onConfirm}) {
  if(!isOpen) {
    return null
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Confirm Logout</h2>
        <p>Are you sure you want to logout?</p>
        <button className='modal-logout-btn' onClick={onConfirm}>Yes, logout</button>
        <button className='modal-cancel-btn' onClick={onClose}>Cancel</button>
      </div>
    </div>
  )
}