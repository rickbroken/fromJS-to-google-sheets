import React from 'react';

const InputTextarea = ({setData}) => {
  const hanldeInputObservaciones = (e) => {
    setData((prevData)=>(
      {
        ...prevData,
        observaciones: e.target.value
      }
    ))
  }
  return (
    <>
      <p>Observaciones:</p>
      <textarea 
        onChange={hanldeInputObservaciones}
        className='border-2 outline-gray-400 focus:shadow-md rounded py-1 px-2 w-full min-h-24 max-h-28'
        type="text"
        placeholder="Escriba sus observaciones..."
      ></textarea>
    </>
  );
}
 
export default InputTextarea;