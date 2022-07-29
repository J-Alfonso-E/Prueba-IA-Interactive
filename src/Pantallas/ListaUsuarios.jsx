import { Usuario } from "../component/Usuario";
import React, {useEffect} from "react";
import { ArregloUsuarios } from "../hooks/ArregloUsuarios"

export const ListaUsuarios = () =>{

    const data = localStorage.getItem('Usuarios');
    const Valores = JSON.parse(data);
    const {Usuarios, QuitarUsuarios} = ArregloUsuarios(Valores);

    
    useEffect(() => {
        localStorage.clear();
        localStorage.setItem('Usuarios', JSON.stringify(Usuarios));
    }, [Usuarios]
        )
    

    console.log("Lista de Usuarios");


        return(
            <div>
                Lista de Usuarios
                <br />
                <ol>
                    {Usuarios.map((Usr) => (<Usuario key={Usr.id} {...Usr} /> )) }

                </ol>
            </div>
        )
}