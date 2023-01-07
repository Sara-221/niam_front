import { ErrorResponse } from "@remix-run/router"
import { useState } from "react"

// Función helper para validar el input del usuario
export const validateForm = (tmpInput) => {

    const errors = []

    // El siguiente objeto validará los diferentes campos - sólo los obligatorios (nombre, categoría y link o nombre, categoría e ingredientes + method)
    const objVal = {
        name: false,
        category: false,
        link: false,
        time:true, //opcional
        ingredients:false,
        method:false,
        notes:true //opcional
    }

    // Categorias válidas
    const validCategories = ['aperitivo', 'desayuno', 'ensalada', 'principal', 'sopa', 'postre']

    // Debe tener título
    objVal.name= (tmpInput.name.trim().length>0) ? true:false
    // Debe introducirse la categoría
    objVal.category= validCategories.includes((tmpInput).category)
    // Se comprueba si el usuario ha introducido el enlace a una receta existente
    objVal.link= (tmpInput.link.trim().length>0) ? true:false
    // Lo mismo para las instrucciones e ingredientes:
    objVal.ingredients= (tmpInput.ingredients.trim().length>=0) ? true:false
    objVal.method= (tmpInput.method.trim().length>0) ? true:false

    if(objVal.name === false) {
        errors.push('El nombre de la receta es obligatorio.')
    }else if(objVal.category===false) {
        errors.push('Categoría no válida.')
    }else if(objVal.link===false && (objVal.ingredients && objVal.method === false)){
        errors.push('Debes escribir los ingredientes e instrucciones de la receta, o bien el enlace a la receta original.')
    }
    return errors

  }
  