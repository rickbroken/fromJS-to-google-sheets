import React from 'react';

const ContTypeReport = ({label,id,setData}) => {

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
        <option value="Prioritario">Prioritario</option>
        <option value="FPP">FPP</option>
        <option value="Especialidad">Especialidad</option>
        <option value="Cita Programada">Cita Programada</option>
      </select>
    </>
  );
}
 
export default ContTypeReport;