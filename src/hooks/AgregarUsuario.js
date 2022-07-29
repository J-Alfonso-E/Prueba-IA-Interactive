import React, {useEffect, useState} from "react";
import { Link, Navigate } from "react-router-dom";
import { ArregloUsuarios } from "./ArregloUsuarios";

export const FormUsuario = () => {
    const [ValorUsuario, SetValor] = useState({
        id: '',
        Nombre: '',
        Apellidos: '',
        email: '',
        celular: ''
    });

    const {Usuarios, AgregarUsuario} = ArregloUsuarios();

    const handleInputChange = (e) => {
        SetValor({
            ...ValorUsuario, [e.target.name] : e.target.value, id: Date.now()
        })
    }

    const EnviarUsuario =(e) => {
        e.preventDefault();
        SetValor({...ValorUsuario, id: Date.now()});
        AgregarUsuario(ValorUsuario);
        
    }

    useEffect(() => {
        localStorage.clear();
        localStorage.setItem('Usuarios', JSON.stringify(Usuarios));
    }, [Usuarios]
        )

    

    return (
        <form onSubmit={EnviarUsuario}>
            <label>Nombre</label>
            <input type="text" name="Nombre" placeholder='Nombre' onChange={handleInputChange} />
            <label>Apellidos</label>
            <input type="text" name="Apellidos" placeholder="Apellidos" onChange={handleInputChange}/>
            
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" onChange={handleInputChange}/>
            <label>Celular</label>
            <input type="tel" name="celular" placeholder="Num Celular" pattern="[0-9]{9}" onChange={handleInputChange} />

            <button type="submit" name="Guardar" value="Guardar">Guardar</button>

            
        </form>
    )
}