import React from 'react'
import './blog.css'
import {Arcticle} from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './imports.js'

const Blog = () => {
  return (
    <div className='gpt3_blog section-padding' id="blog">
      <div className='gpt3_blog-heading'>
        <h1 className='gradient_text'>O mundo está mudando, Nós estamos comentando sobre.</h1>
      </div>
      <div className='gpt3_blog-container'>
        <div className='gpt3_blog-container_groupA'>
          <Arcticle imgUrl={blog01} date="Nov 26, 2022" text="GPT-3 e Open AI is the future. Let us explore how it is"/>
        </div>
        <div className='gpt3_blog-container_groupB'>
          <Arcticle imgUrl={blog02} date="Nov 26, 2022" text="GPT-3 e Open AI is the future. Let us explore how it is"/>
          <Arcticle imgUrl={blog03} date="Nov 26, 2022" text="GPT-3 e Open AI is the future. Let us explore how it is"/>
          <Arcticle imgUrl={blog04} date="Nov 26, 2022" text="GPT-3 e Open AI is the future. Let us explore how it is"/>
          <Arcticle imgUrl={blog05} date="Nov 26, 2022" text="GPT-3 e Open AI is the future. Let us explore how it is"/>
        </div>
      </div>
    </div>
  )
}

export default Blog
