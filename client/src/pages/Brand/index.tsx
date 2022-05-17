import { BrandProps, Car } from "../../interfaces";
import { useState } from "react";
import { Widget } from "../../components/Widget";
import { Card } from "../../components/Card";

export const Brand = ({ carList }: BrandProps): JSX.Element => {
  const [carBrands, setCarBrands] = useState<string[]>([]);

  return (
    <>
      {carList.map(
        (car: Car) =>
          !carBrands.includes(car.marca_nome) &&
          setCarBrands([...carBrands, car.marca_nome])
      )}
      {carBrands.map((carBrand: string, i: number) => (
        <Widget key={i} title={carBrand}>
          {carList.map(
            (car: Car, i: number) =>
              car.marca_nome === carBrand && <Card key={i} carData={car} />
          )}
        </Widget>
      ))}
    </>
  );
};
