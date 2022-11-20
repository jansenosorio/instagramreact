import React from 'react'
import './Sugestoes.css'

export default function Sugestoes() {
  const listUserSugestoes = [
    {
      sugestionname: 'bad.vibes.memes',
      imgsource: '/assets/bad.vibes.memes.svg',
      sugestionstatus: 'Segue você'
    },
    {
      sugestionname: 'chibirdart',
      imgsource: '/assets/chibirdart.svg',
      sugestionstatus: 'Segue você'
    },
    {
      sugestionname: 'razoesparaacreditar',
      imgsource: '/assets/razoesparaacreditar.svg',
      sugestionstatus: 'Novo no Instagram'
    },
    {
      sugestionname: 'adorable_animals',
      imgsource: '/assets/adorable_animals.svg',
      sugestionstatus: 'Segue você'
    },
    {
      sugestionname: 'smallcutecats',
      imgsource: '/assets/smallcutecats.svg',
      sugestionstatus: 'Segue você'
    }
  ]

  return (
    <div className="container-sugestions">
      <div className="header-sugestions">
        <p>Sugestões para vocês</p>
        <p>Ver tudo</p>
      </div>
      {listUserSugestoes.map(elm => (
        <div>
          <div className="main-sugestions">
            <div>
              <img src={elm.imgsource}></img>
              <div>
                <p>{elm.sugestionname}</p>
                <p>{elm.sugestionstatus}</p>
              </div>
            </div>
            <p>Seguir</p>
          </div>
        </div>
      ))}
    </div>
  )
}
