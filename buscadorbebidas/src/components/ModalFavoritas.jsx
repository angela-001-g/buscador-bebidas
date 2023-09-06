import { Modal } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"

function ModalFavoritas() {

    const { handleModalFavClick, fullScreenModal } = useBebidas()

  return (
    <Modal show={fullScreenModal} fullscreen={true} onHide={handleModalFavClick}>
                <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
    </Modal>
  )
}

export default ModalFavoritas
