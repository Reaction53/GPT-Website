import React from 'react'
import Feature from '../../components/feature/Feature';
import './features.css'

const FeaturesData = [
  {
  tittle: 'A Melhora Acaba com as Duvidas',
  text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
},
{
  tittle: 'Se Torne Ativista',
  text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'
},
{
  tittle: 'Mensagens Diretas e Claras',
  text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
},
{
  tittle: 'Obtenha Conhecimento',
  text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..'
},
]

const Features = () => {
  return (
    <div className='gpt3_features section_padding' id="features">
      <div className='gpt3_features-heading'>
        <h1 className='gradient_text'>O Futuro é Agora e Você Só Precisa Perceber. Dê um Passo no Futuro e Faça Acontecer</h1>
        <p>Peça o acesso antecipado para começar</p>
      </div>
      <div className='gpt3_features-container'>
          {FeaturesData.map ((item, index) => (
            <Feature tittle={item.tittle} text={item.text} key={item.tittle + index}/>
          ))}
      </div>
    </div>
  )
}

export default Features
