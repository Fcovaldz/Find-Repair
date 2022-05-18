import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { UserGuest } from './UserGuest/UserGuest';
import { UserLogged } from './UserLogged';
import { CargarModal } from '../../componentes'

export function Cuenta() {
    const [estaLogeado, setEstaLogeadno] = useState(null)

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          setEstaLogeadno(user ? true : false);
        });
    }, []);

    if(estaLogeado === null) {
        return <CargarModal show text="Cargando"/>
    }
return estaLogeado ? <UserLogged /> : <UserGuest />;  
}