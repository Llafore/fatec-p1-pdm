import React from 'react'
import { Card } from 'primereact/card';

const LocalidadeCard = ({ cep, logradouro, localidade, estado, uf }) => {
    return (
    <Card className="w-full p-4 shadow-lg rounded-lg text-center mb-4">
      <p className="text-xl font-bold">{cep}</p>
      <p>{logradouro}</p>
      <p>{localidade}</p>
      <p>{estado} - {uf}</p>
    </Card>
    );
};

export default LocalidadeCard