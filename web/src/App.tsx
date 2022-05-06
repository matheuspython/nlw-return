import React from 'react'

interface ButtonProps{
  text?: string
}

const Button = (props: ButtonProps) =>{
  return (
    <button className='bg-violet-500 px-4 h-10 rounded text-violet-100 hover:bg-violet-700 transition-colors'>{props.text ?? 'Default'}</button>
  )  
}

export const App:React.FC = ()=> {
  return (
    <div className='flex gap-2'>
     <Button text="Enviar"/>
     <Button text="Ok"/>
     <Button />
   </div>
  )
}
