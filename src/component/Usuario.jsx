import { ArregloUsuarios } from "../hooks/ArregloUsuarios";

export const Usuario = (Usr) => {

    const data = localStorage.getItem('Usuarios');
    const Valores = JSON.parse(data);

    const {QuitarUsuarios} = ArregloUsuarios(Valores);
    //console.log(Usr);
    return (
        <>
            <li> {Usr.Nombre} <button onClick={()=> QuitarUsuarios(Usr.id)}>Borrar</button> </li> 
        </>
    )
}