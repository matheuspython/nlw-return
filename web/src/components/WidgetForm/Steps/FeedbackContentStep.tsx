import { ArrowLeft } from 'phosphor-react';
import React from 'react';
import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';

interface FeedbackContentStepStepsProps {
  feedbackType: FeedbackType
  onFeedbackRestartRequest: ()=> void
}

export const FeedbackContentStepSteps: React.FC<FeedbackContentStepStepsProps> = ({
   feedbackType,
   onFeedbackRestartRequest 
   }: FeedbackContentStepStepsProps) => {
  const feedbacktypesInfo = feedbackTypes[feedbackType]

  return (
    <>
    <header>
      <button 
        type='button' 
        className='top-5 left-5 absolute text-zinc-400 hover:text-zinc-100'
        onClick={onFeedbackRestartRequest}
      >
        <ArrowLeft weight='bold' className='w-4 h-4' />
      </button>
      <span className='flex items-center gap-2 text-xl leading-6'>
        <img src={feedbacktypesInfo.image.source} alt={feedbacktypesInfo.image.source} className="w-6 h-6" />
        {feedbacktypesInfo.title}
      </span>
      <CloseButton />
    </header>

    <form className='my-4 w-full'>
      <textarea 
        className='min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:outline-none focus:ring-1 resize-none '
        placeholder='conte com detalhes o que esta acontecendo...'
      />
    </form>
  </>
)
}
