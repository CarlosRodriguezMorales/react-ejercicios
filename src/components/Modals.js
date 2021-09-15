import React from 'react'
import { useModal } from '../hooks/useModal'
import ContactForm from './ContactForm'
import Modal from './Modal'
import ModalPortal from './ModalPortal'

const Modals = () => {
    const [isOpenModal1, openModalModal1, closeModalModal1] = useModal(false)
    const [isOpenModal2, openModalModal2, closeModalModal2] = useModal(false)
    const [isOpenModalContact, openModalModalConact, closeModalModalContact] = useModal(false)
    const [isOpenModalPortal, openModalPortal, closeModalPortal] = useModal(false)

    return (
        <div>
            <h2>Modales</h2>
            <button onClick={openModalModal1}>Modal 1</button>
            <Modal isOpen={isOpenModal1} closeModal={closeModalModal1}>
                <h3>Modal 1</h3>
                <p>Hola este es el contenido de mi modal 1</p>
                <img src="https://placeimg.com/400/400/animals" alt="Animals"/>
            </Modal>
            <button onClick={openModalModal2}>Modal 2</button>
            <Modal isOpen={isOpenModal2} closeModal={closeModalModal2}>
                <h3>Otro Modal</h3>
                <p>Contenido de otro Modal</p>
                <img src="https://placeimg.com/400/400/nature" alt="Nature"/>
            </Modal>
            <button onClick={openModalModalConact}>Modal Contacto</button>
            <Modal isOpen={isOpenModalContact} closeModal={closeModalModalContact}>
                <ContactForm/>
            </Modal>
            <button onClick={openModalPortal}>Modal en Portal</button>
            <ModalPortal isOpen={isOpenModalPortal} closeModal={closeModalPortal}>
                <h3>Modal en portal</h3>
                <p>Hola este es el contenido de mi modal que carga en otro nodo del DOM diferente al que carga nuesta app gracias a un react portal</p>
                <img src="https://placeimg.com/400/400/tec" alt="Tecnologia"/>
            </ModalPortal>
        </div>
    )
}

export default Modals
