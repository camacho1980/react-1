
import './style.css'



function About(){
    return(  //Tengo tres filas para armar el borde y el texto del medio y dentro de la fila tres columnas para posicionar el texto
        <section className='section2'>
           
                
           
            {/* <div className='container-fluid'>
                <div className='row fila'>

                <div className='col-1 bordeVertical' ></div>
                
                <div className='col-lg-11   contenedorSection2' > 

                <h1 className='tituloNegro'>We Help Businesses <br/>
                <span className='tituloNaranja'>Grow and innovate</span> </h1>
                <p >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut


                </p>
                </div>
                </div>
            </div> */}

<article class="padre">
      <div class="borde"></div>
      <div class="texto "> <h1 className='tituloNegro'>We Help Businesses <br/>
        <span className='tituloNaranja'>Grow and innovate</span> </h1> 
        <p >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut


        </p></div>
    </article>
        </section>
    )

}  

export default About;
