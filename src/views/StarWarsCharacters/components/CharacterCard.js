//TARJETA CON LOS DATOS DE LOS PERSONAJES


function CharacterCard({character}){
    return(
        // le asignamos la claseName (stilo .characterCard) a la tarjeta individual
        <div className="characterCard"> 
            <h1>{character.name}</h1>
            <ul>
                <li>Birth: {character.birth_year}</li>
                <li>Gender: {character.gender}</li>
                <li>Height: {character.height}</li>
                <li>Mass: {character.mass}</li>
                <li>Hair: {character.hair_color}</li>
                <li>Eye Color: {character.eye_color}</li>
            </ul>
        </div>

    )      
}
export default CharacterCard;