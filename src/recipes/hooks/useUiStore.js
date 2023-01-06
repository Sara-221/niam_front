import { useDispatch, useSelector } from "react-redux"
import { onCloseFormModal, onOpenFormModal, onOpenRecipeModal, onCloseRecipeModal } from "../../store/ui"

export const useUiStore = () => {

    // Nos traemos los estados del Redux que luego necesitaremos utilizar en los componentes de interfaz de react
    const {formModalIsOpen, recipeModalIsOpen} = useSelector((state)=>state.ui)
    const dispatch = useDispatch()

    // Declaramos las funciones que utilizaremos en los componentes
    const openFormModal = () => {
        dispatch(onOpenFormModal())
    }

    const closeFormModal = () => {
        dispatch(onCloseFormModal())
    }

    const openRecipeModal = () => {
        dispatch(onOpenRecipeModal())
    }

    const closeRecipeModal = () => {
        dispatch(onCloseRecipeModal())
    }

  return {
    formModalIsOpen,
    recipeModalIsOpen,
    openFormModal,
    closeFormModal,
    openRecipeModal,
    closeRecipeModal
  }
}
