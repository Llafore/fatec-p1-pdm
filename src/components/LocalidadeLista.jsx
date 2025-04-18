import React from 'react'
import LocalidadeCard from './LocalidadeCard'

const LocalidadeLista = ({ localizacoes }) => {
  return (
    localizacoes.map((localizacao) => (
        <LocalidadeCard 
        cep={localizacao.cep} 
        logradouro={localizacao.logradouro} 
        localidade={localizacao.localidade} 
        estado={localizacao.estado} 
        uf={localizacao.uf}/>
    ))
  )
}

export default LocalidadeLista