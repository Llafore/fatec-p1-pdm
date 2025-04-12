import cepClient from "./utils/cepClient.js"
import { Component } from "react"
import { Busca } from './components/Busca.jsx'
import LocalidadeLista from './components/LocalidadeLista'

export default class App extends Component{

  state = {
    localidadesChumbadas: [
      {
        "cep": "04094-050",
        "logradouro" : "Avenida Pedro Álvares Cabral",
        "localidade": "Parque Ibirapuera",
        "estado": "São Paulo",
        "uf": "SP"
      },
      {
        "cep": "55592-970",
        "logradouro" : "Rua dos Navegantes",
        "localidade": "Vila de Porto de Galinhas",
        "estado": "Ipojuca",
        "uf": "PE"
      }
    ],
    localidades: []
  }

  onBuscaRealizada = (cep) => {
    if (cep == "") {
      alert("CEP inválido!")
      return
    }

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
        <div className='flex w-full'>
            <div className="flex-column w-6 justify-content-center p-4">
              <Busca onBuscaRealizada={this.onBuscaRealizada}/>
              <LocalidadeLista localizacoes={this.state.localidadesChumbadas}/>
            </div>
        </div>
      </>
    )
  }
}
