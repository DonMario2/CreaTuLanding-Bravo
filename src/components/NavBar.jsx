
import CartWidget from './CartWidget'
import '../App.css'
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
        <h1>SETTING</h1>
        <ul>
            <li><a href="">Home</a><a href="">Productos</a><a href="">Nosotros</a><a href="">Contacto</a><a href=""></a></li>
        </ul>
        <CartWidget/>
    </div>
  )
}

export default NavBar
