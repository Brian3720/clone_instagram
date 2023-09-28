import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ConteudoCentral from './components/ConteudoCentral'
import LateralDireita from './components/LateralDireita'
import LateralEsquerda from './components/LateralEsquerda'


function App() {
  return (
    <>
      <main>

        <LateralEsquerda />
        <ConteudoCentral />
        <LateralDireita />

        <div className="ConteudoDireito">Exemplo de Conteúdo da direita</div>

      </main>
    
    </>
  )
  }

export default App
