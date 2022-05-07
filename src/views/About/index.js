
import './style.css'



function About(){
    return(  //Tengo tres filas para armar el borde y el texto del medio y dentro de la fila tres columnas para posicionar el texto
        <section className='section2'>
            {/* <div className='container-fluid'>
                
                <div className='row filaGrande '>
                    
                    <div className='col-8 colContenedor  '>
                        <h1 className='tituloNegro'>We Help Businesses <br/>
                        <span className='tituloNaranja'>Grow and innovate</span> </h1>
                        
                        <p >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                         totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                           consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                             incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                             </p>

                       
                    </div>
                    
                </div>
                
            </div> */}

            <div className='container-fluid'>
                <div className='row'>

                <div className='col-1 bordeVertical' ></div>
                
                <div className='col-11  contenedorSection2' > 

                <h1 className='tituloNegro'>We Help Businesses <br/>
                <span className='tituloNaranja'>Grow and innovate</span> </h1>
                <p >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut


                </p>
                </div>
                </div>
            </div>
        </section>
    )

}  

export default About;
