export interface BrandProps {
  carList: Car[];
}

export interface Car {
  id: string;
  marca_id: number;
  marca_nome: string;
  nome_modelo: string;
  ano: number;
  combustivel: string;
  num_portas: number;
  valor_fipe: number;
  cor: string;
  imagem: string;
  timestamp_cadastro: number;
}

export interface CardProps {
  key: number;
  carData: Car;
}

export interface HomeProps {
  carList: Car[];
}

export interface InputBoxProps {
  name: string;
  type: string;
  placeholder: string;
  onChange: any;
}

export interface WidgetProps {
  title: string;
  children: any;
}
