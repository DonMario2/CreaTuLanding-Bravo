
import NavBar from './components/NavBar'
import '../src/App.css'
import ItemListContainer from './components/ItemListContainer'

function App() {
  

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenido cliente"} />
    </>
  )
}

export default App
