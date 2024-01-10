import React from 'react';

const ContInputSelect = ({label,id,setData}) => {

  const handleInputSelect = (e) => {
    setData((prevData)=>(
      {
        ...prevData,
        [id]: e.target.value
      }
    ))
  }

  return (
    <>
      <p>{label}:</p>
      <select id={id} onChange={handleInputSelect} className='w-full border-2 py-1 rounded'>
        <option value="">Selecione un opcion</option>
        <option value="SI">SI</option>
        <option value="NO">NO</option>
      </select>
    </>
  );
}
 
export default ContInputSelect;