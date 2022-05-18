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

  console.log(latestCars);

  return (
    <>
      <Widget title="Novos Carros">
        {latestCars.map((car: Car, i: number) => (
          <Card key={i} carData={car} />
        ))}
      </Widget>
      <Widget title="Carros Antigos">
        {carList.map(
          (car: Car, i: number) =>
            car.ano < 2005 && <Card key={i} carData={car} />
        )}
      </Widget>
      <Widget title="Carros em Promoção">
        {cheapestCars.map((car: Car, i: number) => (
          <Card key={i} carData={car} />
        ))}
      </Widget>
    </>
  );
};
