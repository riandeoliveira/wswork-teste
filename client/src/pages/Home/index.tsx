// Página inicial.

import { Card } from "../../components/Card";
import { Widget } from "../../components/Widget";
import { Car, HomeProps } from "../../interfaces";

// Biblioteca para ordenar vetores de objetos.
import sortArray from "sort-array";
import Slider from "react-slick";
import { Area } from "../../components/Area";

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Area
        title="Novos Carros"
        description="Confira os últimos veículos adicionados no catálogo"
      >
        <Slider {...settings}>
          {/* Percorre o vetor de carros mais baratos, exibindo um por um através da chamada do componente Card. */}
          {latestCars.map((car: Car, i: number) => (
            <Card key={i} carData={car} />
          ))}
        </Slider>
      </Area>
      <Area
        title="Carros Antigos"
        description="Veículos lançados antes de 2005"
      >
        <Slider {...settings}>
          {/* Percorre a lista de carros e os exibe somente se eles tiverem sido lançados antes de 2005. */}
          {carList.map(
            (car: Car, i: number) =>
              car.ano < 2005 && <Card key={i} carData={car} />
          )}
        </Slider>
      </Area>
      <Area
        title="Carros em Promoção"
        description="Top 3 veículos mais baratos disponíveis"
      >
        <Slider slidesToShow={3}>
          {/* Percorre o vetor de carros mais baratos e os exibe na tela. */}
          {cheapestCars.map((car: Car, i: number) => (
            <Card key={i} carData={car} />
          ))}
        </Slider>
      </Area>
    </>
  );
};
