//importar el CharacterCard
import CharacterCard from "./CharacterCard";


function CharactersList(props){
    return(
        <div>
            <ul>
                {
                    props.characters.map(function(character, index){ //Mapeo los personajes

                        console.log(character)
                        return (

                            <li key={index}>
                                {/* le pasamos la tarjeta (con el personaje entero) con las propiedades*/}
                                <CharacterCard character={character}/> 
                                 
                            </li>
                        )
                    })
               }
            </ul>
        </div>
    )
}
export default CharactersList;