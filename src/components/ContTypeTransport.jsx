import React from 'react';

const ContTypeTransport = ({label,id,setData}) => {

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
        <option value="Rural">Rural</option>
        <option value="Fluvial">Fluvial</option>
        <option value="Intermunicipal">Intermunicipal</option>
      </select>
    </>
  );
}
 
export default ContTypeTransport;