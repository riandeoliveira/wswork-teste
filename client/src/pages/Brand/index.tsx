import { BrandProps, Car } from "../../interfaces";
import { useState } from "react";
import { Widget } from "../../components/Widget";
import { Card } from "../../components/Card";

export const Brand = ({ carList }: BrandProps): JSX.Element => {
  // Vetor contendo todas as marcas de carros no formato de string (lista de marcas).
  const [carBrands, setCarBrands] = useState<string[]>([]);

  return (
    <>
      {/**
       * Percorre a lista de carros e verifica:
       *
       * Se a lista de marcas não incluir alguma marca da lista de carros, então ela é adicionada para ser auxiliar durante a renderização em seguida.
       */}
      {carList.map(
        (car: Car) =>
          !carBrands.includes(car.marca_nome) &&
          setCarBrands([...carBrands, car.marca_nome])
      )}
      {/* Para cada marca de carro, um componente Widget é renderizado contendo o nome dela. */}
      {carBrands.map((carBrand: string, i: number) => (
        <Widget key={i} title={carBrand}>
          {/**
           * Percorre a lista de carros e verifica:
           * Se a marca da lista de carros for igual a marca da lista de marcas, um Card é adicionado do Widget.
           *
           * @example
           * Quando o Widget com o título de TOYOTA for renderizado, é verificado quais carros correspondem a esta mesma marca. Se eles também forem da TOYOTA, então serão renderizados na seção correta
           * senão, a iteração nos vetores continua até todos os dados forem renderizados em seus lugares adequados.
           */}
          {carList.map(
            (car: Car, i: number) =>
              car.marca_nome === carBrand && <Card key={i} carData={car} />
          )}
        </Widget>
      ))}
    </>
  );
};
