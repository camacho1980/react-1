import {useEffect, useState} from 'react';
// instalar libreria axios
import axios from 'axios';
//importamos CharacterList
import CharactersList from './components/CharactersList';
//importamos la paginacion
import Pagination from './components/Pagination';


//importar el estilo
import "./style.css"


//PEDIDO A UNA API

function StarWarsCharacters (){
    const [Characters, setCharacters] = useState([])//mapeo un arreglo vacio
    
    //crear un estado local para la paginacion
    const[pagesCount, setPagesCount] = useState(0)

    //agregar el clic para el cambio de pagina
    const [currPage, setCurrPage] = useState(1) //arranca en la pag 1

    // cuando aprete uno de los botones de pagina cambiar la pagina
    
    const handleChangePage = function(page){
        setCurrPage(page)
    }
    console.log(currPage)


    useEffect(function(){

        //pedido a la appi poner la ruta - es un pedido asincrono
        axios(`https://swapi.dev/api/people/?page=${currPage}`)
        // tenemos que trabajar con promesas
        .then(function(response){  //recibe una funcion cuyo argumento es una respuesta
            setCharacters(response.data.results) // .data para axios .results me trae los personajes
       //
            setPagesCount(response.data.count/10) // 10 personajes por pagina (como esta la api)

        }).catch(function(error){ //para casos de error ej conexion
            console.log(error)
        })
    
    },[currPage])
    
    return(
        <section>
            <h1>Star Wars Characters</h1>

            <Pagination pagesCount={pagesCount} handleChangePage={handleChangePage} currPage={currPage}/>

            {/* renderizar la lista de personajes */}
            <CharactersList characters={Characters}/>
        </section>
    )
}

export default StarWarsCharacters;