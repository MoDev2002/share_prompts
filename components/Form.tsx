import React from 'react'

type formProps = {
  type: string,
  post: {
    prompt: string;
    tag: string;
  },
  setPost: React.Dispatch<React.SetStateAction<{
    prompt: string;
    tag: string;
  }>>,
  submitting: boolean,
  handleSubmit: (e: any) => Promise<void>
}

const Form = ({ type
  , post
  , setPost
  , submitting
  , handleSubmit }: formProps) =>
{
  return (
    <section className='w-full max-w-full flex items-start flex-col'>
      <h1 className="head_text text-left blue_gradient">{type} Post</h1>
      <p className="desc text-left max-w-md">{type} and share amazing prompts with the world, and let your imagination run wild with any AI-powered platform</p>
    </section>
  )
}

export default Form