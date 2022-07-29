import { Routes, Route, Navigate } from "react-router-dom";
import { ListaUsuarios, PantallaIngreso, RegistroDatos } from "../Pantallas";



export const AppRouter = () => {
    return (
        <Routes>

            <Route path="Ingresar" element={<PantallaIngreso />} />
            <Route path="Registrar" element={<RegistroDatos />} />
            <Route path="ListaUsuarios" element={<ListaUsuarios />} />

            {/*Para cualquier ruta que no coincida con alguna ruta se mostara la pantalla de Ingreso*/}
            {/*<Route path="/*" element={<Navigate to="../Pantallas/Ingreso" />} />*/}

        </Routes>
        

    )
}