// importar el useState - agrego otro hook useEffect 
import {useState, useEffect} from 'react';
// importar el InputNewTasck
import InputNewTask from './components/InputNewTask';
// importar Tasks
import Tasks from './components/Tasks';
// importar el style
import './style.css'

// crear la funcion:
function ToDoList(){
    // generar un estado local. tarea que el usuario está escribiendo en ese - string vacio
    const [currTask, setCurrTask] = useState("")
    // segundo estado todas las tareas lista -arreglo de string
    const [taskList, setTaskList] = useState([])
    // console.log(currTask) PARA QUE LO RENDERICE VER EN CONSOLA

    // useEffect (cada vez que hay un cambio en la lista de tareas peticion de datos a appis)
    // se consologuea efecto porque está en el arreglo de dependencias [variable taskList]

    useEffect(
        function(){
            console.log("efecto")
    },[taskList])
    


    // FUNCION handleChange
    const handleChange = function(event){
    
        setCurrTask(event.target.value)//cada vez que el usuario escribe, esta guardando en el estado local. 
    }

    
    // FUNCION handleClick - que sea un arreglo que se vallan acumulando las distintas tareas
    const handleClick = function (){
        console.log("La tarea actual es:", currTask)
// EN ESTADO LOCAL: HACEMOS UNA COPIA DEL ARREGLO, LA MODIFICAMOS Y LA GUARDAMOS EN EL ESTADO LOCAL-
        const newTaskList = taskList.slice() // CREAMOS COPIA
        newTaskList.push(currTask) //agrego el elemento
        setTaskList(newTaskList) //lo seteo en el estado con la nueva tarea.
//forzar a que se vacie luego de apretado el boton
        setCurrTask("")


//OTRA FORMA:

        // setTaskList([...taskList, currTask])    

    }
    
    // Arreglo de 4 elemntos quiero eliminar la tarea en algun indice

    // funcion Borrar de un elemnto - poner condicion V / f
    const handleDelete = function (deleteIndex){
        const filteredList = taskList.filter(function(task,index){ //CREO LA COPIA FILTRO EL ELEMENTO
            return deleteIndex !== index //saco el elemento que coincide con el elemento que quiero eliminar
        })
        setTaskList(filteredList) // se lo paso al estado nuevo
    }


    return(
        <section id="toDoList">
            <h1>To Do List</h1>

            {/*renderizar el componente - PASAR COMO PROPS AL INPUT  - input controlado*/}
            <InputNewTask handleChange={handleChange} handleClick={handleClick} value={currTask}/>

            {/* renderizamos el Tasks le pasamos la lista de tareas guardada */}

            <Tasks handleDelete={handleDelete} taskList={taskList}/> 

        </section>

    )
}
export default ToDoList;