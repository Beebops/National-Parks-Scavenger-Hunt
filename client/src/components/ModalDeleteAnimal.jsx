import '../styles/modal-logout.css'

export default function ModalDeleteAnimal ({isOpen, onClose, onConfirm, animal}) {
  if(!isOpen) {
    return null
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Confirm Delete</h2>
        <p>{`Are you sure you want to delete the ${animal.common_name.split(',')[0]} from your scavenger hunt?`}</p>
        <button className='modal-logout-btn' onClick={onConfirm}>Yes, delete</button>
        <button className='modal-cancel-btn' onClick={onClose}>Cancel</button>
      </div>
    </div>
  )
}