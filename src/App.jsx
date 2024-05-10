import CardTrilha from "./components/CardTrilha"
import './App.css'
import HookUseEffect from "./components/CardTrilha/HookUseEffect"
import Header from "./components/Header"
import {Outlet} from "react-router-dom"
import Footer from "./components/Footer"
import { TrilhasContextProvider } from "./context/TrilhasContext"


function App(){

 
  return(

    <TrilhasContextProvider>
      <div className="container">

        <Header />
      
        <h1 className="titulo">Explore trilhas incríveis</h1>

          <Outlet /> 
        {/* {
          listaTrilhas.map((trilha, index) => (
          <CardTrilha dadosTrilha={trilha} key={index} /> ))
        }  - Chamando o componenete local */ }

        <Footer />       

      </div>
      
      {/* dadosTrilha é uma props */}
    
    </TrilhasContextProvider>

  )

}

export default App