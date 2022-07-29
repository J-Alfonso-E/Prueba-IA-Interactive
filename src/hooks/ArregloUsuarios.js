import {useState} from "react";

export const ArregloUsuarios = (User = []) => {
    console.log('Creando los elmentos del hook');
    const [Usuarios, SetUsuarios] = useState(User);
    console.log(Usuarios);
    const AgregarUsuario = (User) => {
        SetUsuarios([...Usuarios, User]);
    }

    const QuitarUsuarios = (idusr) => {
        console.log(idusr);
        const NewUsers = Usuarios.filter((u) => u.id !== idusr);
        
        console.log(Usuarios);

        console.log(NewUsers);
        SetUsuarios(NewUsers);
    }

    return {Usuarios, AgregarUsuario, QuitarUsuarios};
}

