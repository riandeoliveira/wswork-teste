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
  data: Car;
}

export interface WidgetProps {
  title: string;
  children: any;
}