import React from 'react';
import Image from 'next/image';
import icono from '../../img/icono.png';
import 'tailwindcss/tailwind.css';

const Header = () => {
  return (
    <div className="flex justify-between pb-6">
        <div className="w-10/12 text-center">
        <p className="font-bold">EXAMPLE EMPRESA</p>
        <p className="text-sm">Oficina Colombia</p>
        <p className="text-[10px] text-gray-500">RES 013 DE LA DIR GENERAL DE MINISTERIO DEL INTERIOR</p>
      </div>
      <div className="w-5/12 flex justify-end items-center">
        <Image alt='logo' className="w-[80px] h-[80px]" src={icono} />
      </div>
    </div>
  );
}
 
export default Header;