function Landing(props){
    return(
        <h1>
            {/* puedo agregar mas props como lastLetter */}
            Bienvenid{props.lastLetter} {props.name}!
        </h1>
    )
}
// EXPORTAR PARA QUE SE PUEDA USAR POR OTROS ARCHIVOS

export default Landing;