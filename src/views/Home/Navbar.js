import "./style.css"
import React,{useState} from "react"
function Navbar(){
//cambiar color navbar
const [color,setColor] = useState(false)
const changeColor = () => {
  if (window.scrollY >= 90) {
    setColor(true)
  }else{
    setColor(false)
  }
}
window.addEventListener("scroll",changeColor)
  return(
    
      <nav className={color ? 'navbarPadre header navbar navbar-expand-lg navbar-light' : 'navbarPadre navbar navbar-expand-lg navbar-light'}>
        <div className="container" id="home">
                  <img className="logo " src="./assets/img/top-logo.png" ></img>
            <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon " ></span>
            </button>
            <div class="collapse navbar-collapse   " id="navbarNav">
          
          <ul class="navbar-nav ml-auto">
            <li class="nav-item ">
              <a class="nav-link  itemsNav" aria-current="page" href="#a">Home</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link itemsNav" href="#about">About</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link itemsNav" href="#products">Products</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link itemsNav" href="#services">Services</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link itemsNav" href="#contact">Contact</a>
            </li>
          </ul>
        </div>           
      </div>
    </nav>
    
    
    )
}
export default Navbar
