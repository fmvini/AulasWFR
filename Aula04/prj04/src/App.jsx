import Card from "./components/Card"
import Card1 from "./components/Card1"
import posterImg from './assets/jabuft.jpg'
import mindImg from './assets/jabora.jpg'

function App() {

  return (
    <>
      <Card book = {{title:"O Poder do Hábito", description: "Durante os últimos dois anos, uma jovem transformou quase todos os aspectos de sua vida. Parou de fumar, correu uma maratona e foi promovida. Em um laboratório, neurologistas descobriram que os padrões dentro do cérebro dela mudaram de maneira fundamental. Publicitários da Procter & Gamble observaram vídeos de pessoas fazendo a cama.", image: posterImg}} quant = {10}/>

      <Card book = {{title: "Mindset: A Nova Psicologia do Sucesso", description: "A psicóloga da Universidade de Stanford, Carol S. Dweck, Ph.D., é uma das principais especialistas em motivação. Em Mindset, ela mostra como o sucesso em quase todos os campos da vida pode ser influenciado pela forma como pensamos sobre nossas habilidades e talentos.", image: mindImg}} quant = {5} />

      <Card1></Card1>
    </>
  )
}

export default App
