import Button from "./Button"
import "./style.css"
import Navbar from "./Navbar"

function Section1(){
    return(
      <section className="section1 ">
            <div className="container contenedorSection1">
                <h1 className="title1">Sed ut perspiciatis <br/>
                
                unde omnis iste natus </h1>
                <div className="parrafo1">Sed ut perspiciatis 
                unde omnis iste natus error <br/> sit voluptatem accusantium doloremque.
                </div>
                <Button/>
                
              </div>
        
       </section> 
    )
}
export default Section1


{/*             
            <div className="container contenedorSection1">
                <h1 className="title1">Sed ut perspiciatis <br/>
                
                unde omnis iste natus </h1>
                <div className="parrafo1">Sed ut perspiciatis 
                unde omnis iste natus error <br/> sit voluptatem accusantium doloremque.
                </div>
                <Button/>
                
              </div> */}