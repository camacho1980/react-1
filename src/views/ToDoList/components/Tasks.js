// listado de tareas - renderizar la lista li en varios html

function Tasks(props){
    return(
        <div>

           {/* un li por cada taskList - recorrer un array por si agregamos mas li */}
            <ol>
                {
                    props.taskList.map(function(task,index){
                        return (

                            <li key={index}>
                                 {task}
                                 {/* funcion sin ejecutar - llamar al indice actual */}
                                 {/* BOTON PARA BORRAR LA TAREA CREADA */}
                                 <button onClick={()=>props.handleDelete(index)}> Borrar </button> 
                            </li>
                        )
                    })
                }

            </ol>

        </div>
    )

}
export default Tasks;
