import React from 'react';
import 'tailwindcss/tailwind.css';

const TypeSex = ({setData}) => {

  const handleInputSelect = (e) => {
    setData((prevData)=>(
      {
        ...prevData,
        sexo: e.target.value
      }
    ))
  }

  return (
    <select onChange={handleInputSelect} className='w-full border-2 py-1 rounded'>
      <option value="">Selecione el sexo</option>
      <option value="M">Masculino</option>
      <option value="F">Femenino</option>
    </select>
  );
}
 
export default TypeSex;