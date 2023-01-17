import React from 'react'
import { useUiStore } from "../hooks"

export const Footer = () => {

    // Nos traemos el estado de la modal de detalles para decidir si el footer mantiene una posición fija o relativa (clase CSS "fixed-bottom")
    const {formModalIsOpen, recipeModalIsOpen} = useUiStore()

  return (
    <footer 
    className={
        `text-center py-3 colorFondo ${formModalIsOpen | recipeModalIsOpen ? '' : 'fixed-bottom'}` 
    }
    >
        <i className="fa-regular fa-copyright"></i>
        <span>&nbsp; 2023 | Ñam Ñam</span>
    </footer>
  )
}
