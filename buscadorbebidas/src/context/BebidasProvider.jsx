/* eslint-disable react/prop-types */

import { useState, useEffect, createContext } from "react";
import axios from 'axios'

const BebidasContext = createContext();

const BebidasProvider = ({children}) => {

    const [bebidas, setBebidas] = useState([])

    const obtenerBebidas = async() => {


    return(
        <BebidasContext.Provider
            value={{
 
            }}
        >
            {children}
        </BebidasContext.Provider>
    )
}

export {
    BebidasProvider
}

export default BebidasContext