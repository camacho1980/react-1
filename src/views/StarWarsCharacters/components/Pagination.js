//PARA RECORRER LAS PAGINAS DE LA API
//LA CANTIDAD DE LISTAS SEA DINAMICA POR SI SE AGREGAN MAS PAGINAS
function Pagination ({pagesCount,handleChangePage, currPage}){

    function createPages (pages){
        const newArray = []
        for(let i = 1; i<=pages; i++){

            //que cambie el estilo del boton numero si la pagina actual es la que esta seleccionada.
            const className = currPage === i? "currPage" : ""

            newArray.push(
                //cuando cliclee el boton con el num de pag cambia la pagina
                <li><button className={className} onClick={()=>handleChangePage(i)}>{(i)}</button></li>
            )
        }
        return newArray
    }

    return(
        //cambio el stito de la paginacion para que se vea en horizontal display flex
        <ul style={{display: "flex"}}>  

            <li><button onClick={()=>handleChangePage(currPage-1)}>{"<<"}</button></li>

            {createPages(pagesCount)}

            <li><button onClick={()=>handleChangePage(currPage+1)}>{">>"}</button></li>
        </ul>
    )
}

export default Pagination;