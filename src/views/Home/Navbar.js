import "./style.css"
function Navbar(){



    return(
     
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
    // <div></div>
    
    )
}
export default Navbar