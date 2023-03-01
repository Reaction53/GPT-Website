import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3_possibility section_padding' id='possibility'>
       <div className='gpt3_possibility-image'>
        <img src={possibilityImage} alt="possibility"/>
       </div>
       <div className='gpt3_possibility-content'>
        <h4>Peça o acesso antecipado para começar</h4>
        <h1 className='gradient_text'>As possibilidades estão alem da sua imaginação</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4>Peça o acesso antecipado para começar</h4>
       </div>
    </div>
  )
}

export default Possibility
