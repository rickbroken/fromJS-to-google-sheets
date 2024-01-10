import { format, isValid, parseISO } from 'date-fns';
import React from 'react';

const InputDateReport = ({setData}) => {

  const handleDate = (e) => {
    const fecha = parseISO(e.target.value)
    if(isValid(fecha)){
      setData((prevData)=>(
        {
          ...prevData,
          fechaReporte: format(fecha, 'dd/MM/yyyy')
        }
      ))
    }
  }

  return (
    <>
    <p>Fecha de reporte:</p>
      <input
        onChange={handleDate}
        type="date" 
        className='border-2 outline-gray-200 rounded py-[2px] px-2 w-full'
      />
    </>
  );
}
 
export default InputDateReport;