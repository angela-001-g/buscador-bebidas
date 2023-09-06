import { Modal, Image, Button } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'

function ModalBebida() {

  const { modal, handleModalClick, receta, setReceta } = useBebidas()  

  const mostrarIngredientes = () => {
        let ingredientes = []

        for(let i = 1; i < 16; i++ ){
            if(receta[`strIngredient${i}`]){
                ingredientes.push(
                    <li>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>
                )
            }
        }

        return ingredientes
  }  

  return (
    <Modal show={modal} onHide={() => {
        handleModalClick()
        setReceta({})
    }}>
        <Image 
            src={receta.strDrinkThumb}
            alt={`Imagen receta ${receta.strDrink}`}
        />

        <Modal.Header>
            <Modal.Title>
                {receta.strDrink}
            </Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <div className='p-3'>
                <h2>Instrucciones</h2>
                {receta.strInstructions}
                <h2>Ingredientes y cantidades</h2>
                {mostrarIngredientes()}
            </div>
            <Button
                size='sm'
                className='w-100 text-uppercase'
                variant='outline-warning'
            >
                Añadir Favorita
            </Button>
        </Modal.Body>
    </Modal>
  )
}

export default ModalBebida
