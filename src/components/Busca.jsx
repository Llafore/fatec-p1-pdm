import { Component } from "react"
import { Button } from 'primereact/button'
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';

export class Busca extends Component {

  state = {
    cepBuscado: ''
  }

  onTermoAlterado = (event) => {
    this.setState({cepBuscado: event.target.value})
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.onBuscaRealizada(this.state.cepBuscado)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="w-full">
        <div className="flex w-full py-4 flex-column gap-2">
          <FloatLabel className="w-full">
            <InputText id="inputCep" className="w-full" onChange={this.onTermoAlterado} value={this.state.cepBuscado}/>
            <label htmlFor="inputCep">Digite um cep</label>
          </FloatLabel>

          <Button label="OK" />
        </div>
      </form>
    )
  }
}

export default Busca