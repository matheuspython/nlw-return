import React from 'react';


export const WidgetForm: React.FC = () => {
  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
      <header>
        <span className='text-xl leading-6'>deixe o seu feedback</span>
      </header>

      <p>teste</p>

      <footer className='text-xs text-neutral-400'>
        Feito com ❤ por <a className='underline underline-offset-2' href="https://github.com/matheuspython/">Matheus</a>
      </footer>
    </div>
  )
}
