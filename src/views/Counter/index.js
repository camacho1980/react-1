//importar libreria de react
import {useState} from "react";
// importar el Button
import Button from "./components/Button";
//importar Number
import Number from "./components/Number";
// importar el estilo
import './style.css'



function Counter(){
    //crear un estado local userState que inicie en 0 - Destructuring.
    // arreglo,nombre del estado, setnombre....

    const [count,setCount] = useState(0)

    // creamos la funcion para el button renderiza y suma uno
    function handleAdd(event){
        setCount(count + 1)
    }

    // funcion para que me reste uno en el contador:
    function handleSubstract(event){
        setCount(count - 1)
    }


    return(
        <section>
            <h1>Counter</h1>
            {/* paso la funcion handleSubstract al Button para que reste */}
{/* agregar la clase para que tome el estilo y la prop para que frene cuando llegue a 0 */}
            <Button disabled={count <= 0} handleClick={handleSubstract} symbol="-"/>

            {/* pasarle la propiedad al Number */}
            <Number number={count}/> 

            {/* paso la funcion handleAdd al Button para que sume */}
{/* agregar la clase para que tome el estilo y la prop para que frene cuando llegue a 20 */}

            <Button disabled={count >= 20} handleClick={handleAdd} symbol="+"/>
            
        </section>
    )
}

export default Counter;
