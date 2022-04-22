function Button (props){
    // poner una regla para el color/style del button: CON TERNARIO
    const className = props.symbol === "+"? "buttonAdd" : "buttonSubs"

    return (
        // onClick le paso la propiedad handleClick - propiedad disabled para parar el boton cuando llegue a un numero definido.
        // se la pasamos por props va a ser un booleano
        <button disabled={props.disabled} className={className} onClick={props.handleClick}>{props.symbol}</button>
    )
}
export default Button;

// O CON FUNCION:

// function Button (props){
//     function setClass(symbol){
//         if(symbol === "+"){
//             return "buttonAdd"
//         }else{
//             return "buttonSubs"
//         }
//     }

//     return (
       
//         <button disabled={props.disabled} className={className} onClick={props.handleClick}>{props.symbol}</button>
//     )
// }
// export default Button;