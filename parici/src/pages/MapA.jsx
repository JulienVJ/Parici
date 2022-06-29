import React from 'react';
import { Outlet } from 'react-router-dom';

export function MapA() { 

    return(
        <>
        <Outlet/>
        <div>Ici choix du circuit</div>
        </>
    )
}
