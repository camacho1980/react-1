// import Section1 from "./Section1";
import Navbar from "./Navbar";
import Button from "./Button";
import "./style.css";

function Landing(){
    
    return(
        
        <section className="fondoImagen">   
           
            <Navbar/>   
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


export default Landing;