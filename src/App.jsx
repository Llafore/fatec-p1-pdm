import cepClient from "./utils/cepClient.js"
import { Component } from "react"
import { Busca } from './components/Busca.jsx'
import LocalidadeLista from './components/LocalidadeLista'
import Grafico from "./components/Grafico.jsx"

export default class App extends Component{

  state = {
    localidades: []
  }

  onBuscaRealizada = (cep) => {
    let validacep = /^[0-9]{8}$/;
    if (!validacep.test(cep)) {
      alert("CEP inválido!")
      return
    }

    cepClient.get(`${cep}/json/`)
    .then(response => {
      console.log(response.data)

      if (response.data.erro) {
        alert("CEP não encontrado!")
        return
      }

      this.setState({localidades: [response.data, ...this.state.localidades]})
    })
  }

  render() {
    return (
      <>
        <div className='flex w-full flex-column lg:flex-row'>
            <div className="flex-column w-full lg:w-6 justify-content-center p-4">
              <Busca onBuscaRealizada={ this.onBuscaRealizada }/>
              <LocalidadeLista localizacoes={ this.state.localidades }/>
            </div>
            <div className="flex-column w-full lg:w-6 justify-content-center p-4">
              <Grafico localizacoes={ this.state.localidades }/>
            </div> 
        </div>
      </>
    )
  }
}
