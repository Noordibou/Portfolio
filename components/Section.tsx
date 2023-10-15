import React from 'react';

interface Props {
    title: string;
}
export default function Section({title}: Props) {
  return (
    
    <h2 className='top-36 font-titleFont text-2xl font-semibold flex items-center uppercase tracking-[15px] text-textBright'>
       {title}
        <span className='hidden md:inline-flex md:w-60 lgl:w-80 h-[0.5px] bg-gray-700 ml-4' />
    </h2>
  )
}
