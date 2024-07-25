
import CartWidget from './CartWidget'
import '../App.css'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="navbar-container">
      <h1><strong>SETTING</strong></h1>
      <ul className="lista-barra">
        <li className="fondo-barra"><a href="">Home</a></li>
        <li className="fondo-barra"><a href="">Productos</a></li>
        <li className="fondo-barra"><a href="">Nosotros</a></li>
        <li className="fondo-barra"><a href="">Contacto</a></li>
      </ul>
      <CartWidget/>
    </div>
  )
}

export default NavBar

