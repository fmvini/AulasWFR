import './App.css'
import Title, {Title1} from './components/Title'
import Name from './components/Name'
import Calculo from './components/Calc';

export default function App() {

    const aplicacao = "React JS"
    const estilo = {border: "1px solid red", color: "blue"}

    return (
        <>
            <h1 style = {{paddingBottom : "10px", fontSize : "42px"}}>React é uma linguagem de programação baseada em JavaScript</h1>
            {Title()}
            {Title1()}
            <h2>{aplicacao}</h2>
            {Calculo()}
            <div className="awesome" style={estilo}>
                <label htmlFor="name">Enter your name: </label>
                <input type="text" id="name" />
            </div>
            {Name()}
        </>
    )
}

