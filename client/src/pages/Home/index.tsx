import { Card } from "../../components/Card";
import { Widget } from "../../components/Widget";
import { Car, HomeProps } from "../../interfaces";
import sortArray from "sort-array";

export const Home = ({ carList }: HomeProps): JSX.Element => {
  const latestCars = sortArray([...carList], {
    by: "timestamp_cadastro",
    order: "desc",
  }).slice(0, 5);

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
        {latestCars.map((car: Car, i: number) => (
          <Card key={i} carData={car} />
        ))}
      </Widget>
      <Widget
        title="Carros Antigos"
        description="Veículos lançados antes de 2005"
      >
        {carList.map(
          (car: Car, i: number) =>
            car.ano < 2005 && <Card key={i} carData={car} />
        )}
      </Widget>
      <Widget
        title="Carros em Promoção"
        description="Top 3 veículos mais baratos disponíveis"
      >
        {cheapestCars.map((car: Car, i: number) => (
          <Card key={i} carData={car} />
        ))}
      </Widget>
    </>
  );
};
