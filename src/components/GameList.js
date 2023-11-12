// Game list, conditionally renders sample list for unauthenticated users
import '../resources/GameList.css'
import GamePhoto from './GamePhoto';

// or full list for authenticated users.
export default function GameList(props) {

    return (
        <div className="game_list">
            { props.games.map((game) => (
                <GamePhoto 
                    photo={game.image}
                    photo_text={game.name}
                />
            ))}
        </div>
    );
}