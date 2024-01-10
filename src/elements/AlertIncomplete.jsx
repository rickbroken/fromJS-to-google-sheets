import React from 'react';
import { Icon } from '@iconify/react';
import editTwotoneFull from '@iconify/icons-line-md/edit-twotone-full';

const AlertIncomplete = ({text}) => {
  return (
    <div className='fixed top-0 left-0 w-full h-screen bg-[#00000036] flex justify-center items-center'>
      <div className='w-80 bg-white rounded shadow-xl flex flex-col justify-center items-center'>
        <Icon width={80} className='pt-2' color='#159f7a' icon={editTwotoneFull} />
        <p className={`text-center px-8 py-2 pb-6 font-bold`}>{text}</p>
      </div>
    </div>
  );
}
 
export default AlertIncomplete;