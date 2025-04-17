import React from 'react';
import { Chart } from 'primereact/chart';

const Grafico = ({ localizacoes }) => {
    const contagemUF = localizacoes.reduce((acc, item) => {
        acc[item.uf] = (acc[item.uf] || 0) + 1
        return acc
    }, {})

    const uf = Object.keys(contagemUF)
    const qtde = Object.values(contagemUF)

    const documentStyle = getComputedStyle(document.documentElement);

    const data = {
        labels: uf,
        datasets: [
            {
                data: qtde,
                backgroundColor: [
                    documentStyle.getPropertyValue('--red-500'),
                    documentStyle.getPropertyValue('--cyan-500'),
                    documentStyle.getPropertyValue('--yellow-500'),
                ],
                hoverBackgroundColor: [
                    documentStyle.getPropertyValue('--red-700'),
                    documentStyle.getPropertyValue('--cyan-700'),
                    documentStyle.getPropertyValue('--yellow-700')

                ]
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
        <div className="card flex justify-content-center" style={{ height: '100%' }}>
            <Chart type="pie" data={data} options={options} className="w-full h-full" />
        </div>
    );
}

export default Grafico