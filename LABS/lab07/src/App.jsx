import './App.css'
import { useState } from 'react'

function App() {
    const [senha, setSenha] = useState("")
    const [copyText, setCopyText] = useState("Copiar")
    const [tamanho, setTamanho] = useState(12)

function gerarSenha(){
    const caracteres = "1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    let novaSenha = ""
    for(let i = 0; i< tamanho; i++){
        let indiceAleatorio = Math.floor(Math.random() * caracteres.length)
        novaSenha += caracteres[indiceAleatorio]
    }
    setSenha(novaSenha)
    setCopyText("Copiar")
}

function copiarSenha(){
    window.navigator.clipboard.writeText(senha)
    setCopyText('Copiado!')
}
  return (
    <>
        <div id='conteudo'>
        <h1 id='titulo'>Clique para gerar sua senha!</h1>
        <input id='tamanho'type='number' value={tamanho} onChange={(event) => setTamanho(Number(event.target.value))}></input>
        <div id='botoes'>
            <button class='botoes' onClick={gerarSenha}>Gerar</button>
            <button class='botoes' onClick={copiarSenha}>{copyText}</button>
        </div>
        <p id='senha'>{senha}</p>
        </div>
    </>
  )
}

export default App
