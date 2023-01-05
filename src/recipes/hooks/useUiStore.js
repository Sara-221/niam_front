import { useDispatch, useSelector } from "react-redux"
import { onCloseModal, onOpenModal } from "../../store/ui"

export const useUiStore = () => {

    // Nos traemos los estados del Redux que luego necesitaremos utilizar en los componentes de interfaz de react
    const {modalIsOpen} = useSelector((state)=>state.ui)
    const dispatch = useDispatch()

    // Declaramos las funciones que utilizaremos en los componentes
    const openModal = () => {
        dispatch(onOpenModal())
    }

    const closeModal = () => {
        dispatch(onCloseModal())
    }

  return {
    modalIsOpen,
    openModal,
    closeModal
  }
}
