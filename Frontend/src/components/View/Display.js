import React from 'react';
// import Seeall from './Seeall';
const Display = ({id,name,email,skills}) => {
  return (
    <div className='m-5 p-5 to-blue-300 bg-cyan-100 h-25 w-60'>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{skills}</h1>
    </div>
  )
}
export default Display
