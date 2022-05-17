import * as S from "./styles";
import { AiFillCar } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <S.Header>
      <div>
        <AiFillCar />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/marcas">Marcas</Link>
            </li>
            <li>
              <Link to="/formulario">Formulário</Link>
            </li>
          </ul>
        </nav>
      </div>
    </S.Header>
  );
};
