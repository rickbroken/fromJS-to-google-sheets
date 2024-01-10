import React from 'react';

const ContInputText = ({label,placeholder,id,setData}) => {
  const handleInputText = (e) => {
    setData((prevData)=>(
      {
        ...prevData,
        [id] : e.target.value
      }
    ))
  }
  return (
    <>
      <p>{label}:</p>
      <input
        id={id}
        onChange={handleInputText}
        className='border-2 outline-gray-400 focus:shadow-md rounded py-1 px-2 w-full'
        type="text"
        placeholder={placeholder}
      />
    </>
  );
}
 
export default ContInputText;