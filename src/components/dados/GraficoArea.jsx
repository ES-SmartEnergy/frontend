import Chart from "react-apexcharts";
import { Component } from "react";
import React from "react";

// obter series
function obterSeries(vetorDeMapas) {
  var series = [];
  var comodosProcessados = new Set();

  vetorDeMapas.consumo.forEach((mapa) => {
    const comodo = mapa.comodo;

    if (!comodosProcessados.has(comodo)) {
      // impede adição de comodos duplicados
      comodosProcessados.add(comodo);

      const dadosComodo = vetorDeMapas.consumo
        .filter((dados) => dados.comodo === comodo)
        .map((dados) => dados.gasto);

      series.push({
        name: comodo,
        data: dadosComodo,
      });
    }
  });

  /*console.log(series);*/
  return series;
}

class GraficoArea extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      series: obterSeries(props.documento),
      options: {
        chart: {
          height: 350,
          type: "area",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          //type: "time",
          categories: props.documento.consumo.map((mapa) =>
            mapa.data_hora.slice(11, -3)
          ),
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        {}
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={350}
        />
      </div>
    );
  }
}

export default GraficoArea;
