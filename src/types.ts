export interface Product {
  id: number;
  nome: string;
  preco: number;
  grupoId: number;
  grupoNome: string;
  descricao?: string;
}

export interface Group {
  id: number;
  nome: string;
}

export interface OrderItem {
  id: number;
  produtoId: number;
  produtoNome: string;
  quantidade: number;
  precoUnitario: number;
  totalItem: number;
  observacao: string;
  garcom: string;
  impressoCozinha?: boolean;
}

export interface Mesa {
  id: number;
  numero: number;
  cliente?: number;
  dataHora: string;
  percGarcom: number;
  totalConsumo: number;
  totalMesa: number;
  status: 'A' | 'F'; // A = Ativa, F = Fechada
  itens: OrderItem[];
}

export interface ServerLog {
  id: string;
  timestamp: string;
  type: 'INFO' | 'API' | 'SQL' | 'WARN' | 'SUCCESS' | 'ERROR';
  message: string;
  details?: string;
}

export interface ServerConfig {
  porta: number;
  dbUser: string;
  dbPass: string;
  dbPath: string;
  firebirdOnline: boolean;
  apiOnline: boolean;
  servidorRodando: boolean;
  licencaAtiva: boolean;
}

export interface ApiEndpoint {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  description: string;
  params?: string;
  requestBody?: object;
  responseExample: object;
}

export interface SchemaTable {
  name: string;
  description: string;
  columns: {
    name: string;
    type: string;
    constraints?: string;
    description: string;
  }[];
}
