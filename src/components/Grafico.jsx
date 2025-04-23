import React from 'react';
import { Chart } from 'primereact/chart';

const Grafico = ({ localizacoes }) => {
    const contagemUF = localizacoes.reduce((acc, item) => {
        acc[item.uf] = (acc[item.uf] || 0) + 1
        return acc
    }, {})

    const uf = Object.keys(contagemUF)
    const qtde = Object.values(contagemUF)

    const data = {
        labels: uf,
        datasets: [
            {
                data: qtde,
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true
                }
            }
        }
    };

    return (
        <div className="card flex justify-content-center w-full" >
            <Chart type="pie" data={data} options={options}/>
        </div>
    );
}

export default Grafico