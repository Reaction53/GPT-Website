import React from 'react'
import Feature from '../../components/feature/Feature'
import './whatgpt3.css'

const WhatGPT3 = () => {
  return (
    <div className='gpt3_whatgpt3 section_margin' id='wgpt3'>
      <div className='gpt3_whatgpt3-feature'>
        <Feature tittle="O que é GPT-3" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis perspiciatis voluptas adipisci necessitatibus explicabo perferendis facilis"/>
      </div>
      <div className='gpt3_whatgpt3-heading'>
        <h1 className='gradient_text'>As possibilidades estão alem da sua imaginação</h1>
        <p>Explore a Biblioteca</p>
      </div>
      <div className='gpt3_whatgpt3-container'>
        <Feature tittle="Chatbots" />
        <Feature tittle="Conhecimentos gerais" />
        <Feature tittle="Educação" />
      </div>
    </div>
  )
}

export default WhatGPT3
