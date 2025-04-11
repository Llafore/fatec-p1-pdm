import { Component } from "react"
import { Busca } from './components/Busca.jsx'
import LocalidadeLista from './components/LocalidadeLista'

export default class App extends Component{

  state = {
    localidades: [
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
    ]
  }

  render() {
    return (
      <>
        <div className='flex w-full'>
            <div className="flex-column w-6 justify-content-center p-4">
              <Busca></Busca>
              <LocalidadeLista localizacao={this.state.localidades}/>
            </div>
        </div>
      </>
    )
  }
}
