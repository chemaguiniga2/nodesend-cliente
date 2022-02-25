import React, { useReducer } from 'react';
import authContext from "./authContext";
import authReducer from './authReducer';
import { USUARIO_AUTENTICADO } from '../../types/index';


const AuthState = ({children}) => {

    //definir un state inicial
    const initialState = {
        token: '',
        autenticado: null,
        usuario: null,
        mensaje: null
    }

    //definir el reducer
    const [ state, dispatch ] = useReducer(authReducer, initialState);
    //usuario autenticado
    const usuarioAutenticado = nombre => {
        dispatch({
            type: USUARIO_AUTENTICADO,
            payload: nombre
        })
    }

    return (
        <authContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                usuarioAutenticado
            }}
        >
            {children}
        </authContext.Provider>
    )
}

export default AuthState;