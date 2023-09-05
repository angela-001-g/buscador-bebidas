import { Modal, Image } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'

function ModalBebida() {

  const { modal, handleModalClick } = useBebidas()  

  return (
    <Modal show={modal} onHide={handleModalClick}>
        <Modal.Body>
            Cuerpo de modal
        </Modal.Body>
    </Modal>
  )
}

export default ModalBebida
