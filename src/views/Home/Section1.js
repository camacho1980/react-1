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
         
         {/* <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
           
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    
    <div class="carousel-item active carrusel" data-bs-interval="10000">
    <nav class="navbar navbar-expand-lg navbar-light  navbarPadre  ">
         <div className="container">
                 <img className="logo " src="./assets/img/top-logo.png" ></img>
             <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon " ></span>
             </button>
             <div class="collapse navbar-collapse   " id="navbarNav">
          
         <ul class="navbar-nav ml-auto">
           <li class="nav-item ">
              <a class="nav-link  itemsNav" aria-current="page" href="#">Home</a>
             </li>
             <li class="nav-item ">
               <a class="nav-link itemsNav" href="#">About</a>
             </li>
             <li class="nav-item ">
               <a class="nav-link itemsNav" href="#">Products</a>
             </li>
             <li class="nav-item ">
             <a class="nav-link itemsNav">Services</a>
             </li>
             <li class="nav-item ">
               <a class="nav-link itemsNav">Contact</a>
             </li>
           </ul>
         </div>

               
           </div>
     </nav>
      <img src="./assets/img/fondo.png" class="d-block w-100 " alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <div className=" contenedorSection1">
      
            <h1 className="title1">Sed ut perspiciatis <br/>
            
            unde omnis iste natus </h1>
            <div className="parrafo1">Sed ut perspiciatis 
            unde omnis iste natus error <br/> sit voluptatem accusantium doloremque.
            </div>
            <Button/>
            
          </div>
        
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}
    
  
       </section>
    )
}
export default Section1