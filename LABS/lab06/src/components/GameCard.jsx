import './GameCard.css'
export default function Card(props){
    return (
        <div className='game-card'>
            <img class='capaimagem'src={props.coverImage} alt={props.title} />
            <h3 class='titulo'>{props.title} ({props.releaseYear})</h3>
            <p class='descricao'>{props.description}</p>
            <button class="saiba">Saiba mais</button>
        </div>
    )
}