import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as CgIcons from 'react-icons/cg';

export const SidebarData = [
    {
        title: 'Perfil',
        path: '/',
        icon: <CgIcons.CgProfile />,
        cName: 'nav-text'
    },
    {
        title: 'Conocimientos',
        path: '/conocimientos',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Proyectos',
        path: '/proyectos',
        icon: <AiIcons.AiOutlineFundProjectionScreen />,
        cName: 'nav-text'
    },
    {
        title: 'Contacto',
        path: '/contacto',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    }
]