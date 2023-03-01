import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3_header section_padding' id="home">
      <div className='gpt3_header-content'>
        <h1 className='gradient_text'>Vamos Construir Algo Incrivel com GPT-3 OpenAI</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis perspiciatis voluptas adipisci necessitatibus explicabo perferendis facilis, ab in ducimus dolores!</p>
        <div className='gpt3_header-content_input'>
          <input type="email" placeholder='Seu email'></input>
          <button type='button'>Comece já</button>
        </div>
        <div className='gpt3_header-content_people'>
          <img src={people} alt="people"/>
          <p>1,600 pessoas estão pedindo para acessar</p>
        </div>
      </div>
      <div className='gpt3_header-image'>
        <img src={ai} alt="ai"/>
      </div>
    </div>
  )
}

export default Header
