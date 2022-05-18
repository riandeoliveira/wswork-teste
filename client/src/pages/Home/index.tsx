// Página inicial.

import { Card } from "../../components/Card";
import { Widget } from "../../components/Widget";
import { Car, HomeProps } from "../../interfaces";

// Biblioteca para ordenar vetores de objetos.
import sortArray from "sort-array";

export const Home = ({ carList }: HomeProps): JSX.Element => {
  // Ordena a lista de carros para encontrar os top 5 mais recentes.
  const latestCars = sortArray([...carList], {
    by: "timestamp_cadastro",
    order: "desc",
  }).slice(0, 5);

  // Ordena a lista de carros para encontrar os top 3 mais baratos.
  const cheapestCars = sortArray([...carList], {
    by: "valor_fipe",
    order: "asc",
  }).slice(0, 3);

  return (
    <>
      <Widget
        title="Novos Carros"
        description="Confira os últimos veículos adicionados no catálogo"
      >
        {/* Percorre o vetor de carros mais baratos, exibindo um por um através da chamada do componente Card. */}
        {latestCars.map((car: Car, i: number) => (
          <Card key={i} carData={car} />
        ))}
      </Widget>
      <Widget
        title="Carros Antigos"
        description="Veículos lançados antes de 2005"
      >
        {/* Percorre a lista de carros e os exibe somente se eles tiverem sido lançados antes de 2005. */}
        {carList.map(
          (car: Car, i: number) =>
            car.ano < 2005 && <Card key={i} carData={car} />
        )}
      </Widget>
      <Widget
        title="Carros em Promoção"
        description="Top 3 veículos mais baratos disponíveis"
      >
        {/* Percorre o vetor de carros mais baratos e os exibe na tela. */}
        {cheapestCars.map((car: Car, i: number) => (
          <Card key={i} carData={car} />
        ))}
      </Widget>
    </>
  );
};
