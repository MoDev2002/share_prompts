import React from 'react'
import Link from 'next/link'

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
      <h1 className="head_text text-left blue_gradient">{ type } Post</h1>
      <p className="desc text-left max-w-md">{ type } and share amazing prompts with the world, and let your imagination run wild with any AI-powered platform</p>

      <form onSubmit={ handleSubmit } className='my-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>Your AI prompt</span>
          <textarea
            value={ post.prompt }
            onChange={ (e) => setPost({ ...post, prompt: e.target.value }) }
            placeholder='Write your prompt here...'
            required
            className='form_textarea'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Tag
            <span className='font-normal text-sm text-slate-400'>{ ` ` }(#product, #webdevelopment, #idea)</span>
          </span>
          <input
            value={ post.tag }
            onChange={ (e) => setPost({ ...post, tag: e.target.value }) }
            placeholder='#tag'
            required
            className='form_input'
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href='/' className='text-gray-500 text-sm hover:text-red-500'>Cancel</Link>
          <button type='submit' disabled={ submitting } className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white hover:bg-transparent hover:text-primary-orange '>
            { submitting ? `${ type }ing...` : type }
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form