// INPUT PARA INGRESAR NUEVAS TAREAS (task) MAS BOTON en un mismo componente:
// CAPTAR LO QUE EL USUARIO INGRESA

function InputNewTask (props){
    return(
        <div>
            {/* agrego class para modificar el tamaño - AGREGO PROPIEDAD ON CHANGE SE EJECUTA CADA VEZ QUE HALLA UN CAMBIO EN LA INFO INGRESADA */}

            {/* <input onChange={(event)=> console.log(event.target.value)} className="taskInput"placeholder="write a new task..."/> */}

            {/* LO MODIFICAMOS POR UNA funcion props */}
            <input onChange={props.handleChange} className="taskInput" value={props.value} placeholder="Escribir una nueva tarea..."/>
            {/* AGREGO PROPIEDAD ON CLICK */} 
            <button onClick={props.handleClick} className="taskButton">Add</button>
        </div>
    )
}
export default InputNewTask;

