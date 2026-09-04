import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div>
            <h1>Renderização</h1>
            <p>Retornando um JSX, condicionalmente.</p>
            <p>Incluindo um JSX, condicionalmente.</p>
            <p>Utilizando Operador condicional {ternário}</p>
            <p>Operador lógico and &&</p>
            <p>Atribuindo JSX a variáveis</p>
        </div>
      </section>
    </>
  )
}

export default App
