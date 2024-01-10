import { Icon } from '@iconify/react';
import React from 'react';


const AlertSaving = ({text,colorIcon,icon}) => {
  return (
    <div className='fixed top-0 left-0 w-full h-screen bg-[#00000036] flex justify-center items-center'>
      <div className='w-80 bg-white rounded shadow-xl flex flex-col justify-center items-center'>
        <Icon width={80} className='pt-2' color={colorIcon} icon={icon} />
        <p className={`text-center px-8 py-2 pb-6 font-bold`}>{text}</p>
      </div>
    </div>
  );
}
 
export default AlertSaving;