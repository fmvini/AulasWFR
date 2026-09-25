import { games } from '../data/games'
import Card from './GameCard'
import './GameList.css'

export default function GameList(){
    return(
    <div className="games-container">

    {games.map((game) => {
    return (
        <Card 
        key={game.id}
        coverImage={game.coverImage} 
        title={game.title} 
        releaseYear={game.releaseYear} 
        description={game.description}
        />
        )
    } )}
    </div>
)

}