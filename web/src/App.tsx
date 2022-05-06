import React from 'react'

interface ButtonProps{
  text?: string
}

const Button = (props: ButtonProps) =>{
  return (
    <button>{props.text ?? 'Default'}</button>
  )  
}

export const App:React.FC = ()=> {
  return (
    <div>
     <Button text="Enviar"/>
     <Button text="Ok"/>
   </div>
  )
}
