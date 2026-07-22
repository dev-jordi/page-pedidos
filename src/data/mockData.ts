import { Group, Product, Mesa, ServerLog, ServerConfig, ApiEndpoint, SchemaTable } from '../types';

export const initialGroups: Group[] = [
  { id: 1, nome: 'Pratos & A la Minuta' },
  { id: 2, nome: 'Lanches & Xis' },
  { id: 3, nome: 'Porções & Petiscos' },
  { id: 4, nome: 'Pizzas' },
  { id: 5, nome: 'Bebidas' },
  { id: 6, nome: 'Sobremesas' },
];

export const initialProducts: Product[] = [
  { id: 1, nome: 'ALA MINUTA FRANGO', preco: 19.90, grupoId: 1, grupoNome: 'Pratos & A la Minuta', descricao: 'Acompanha arroz, feijão, fritas e salada' },
  { id: 2, nome: 'ALA MINUTA CARNE', preco: 24.90, grupoId: 1, grupoNome: 'Pratos & A la Minuta', descricao: 'Bife de alcatra, arroz, feijão, ovo e fritas' },
  { id: 3, nome: 'PICADÃO GRANDE', preco: 80.00, grupoId: 3, grupoNome: 'Porções & Petiscos', descricao: 'Carne, frango, calabresa, queijo, presunto, azeitona e fritas (serve 3-4 pessoas)' },
  { id: 4, nome: 'XIS CARNE', preco: 28.00, grupoId: 2, grupoNome: 'Lanches & Xis', descricao: 'Hambúrguer de carne, queijo, presunto, ovo, maionese e salada' },
  { id: 5, nome: 'XIS FRANGO', preco: 27.00, grupoId: 2, grupoNome: 'Lanches & Xis', descricao: 'Peito de frango desfiado, queijo, presunto, ovo, milho e maionese' },
  { id: 6, nome: 'PIZZA MARGHERITA (MÉDIA)', preco: 45.00, grupoId: 4, grupoNome: 'Pizzas', descricao: 'Molho de tomate especial, muçarela, tomate fatiado e manjericão fresco' },
  { id: 7, nome: 'PIZZA CALABRESA (GRANDE)', preco: 58.00, grupoId: 4, grupoNome: 'Pizzas', descricao: 'Muçarela, calabresa fatiada, cebola e azeitonas pretas' },
  { id: 8, nome: 'REFRIGERANTE LATA 350ML', preco: 6.50, grupoId: 5, grupoNome: 'Bebidas', descricao: 'Coca-Cola, Guaraná Antarctica, Fanta Laranja ou Sprite' },
  { id: 9, nome: 'CERVEJA LONG NECK 330ML', preco: 11.00, grupoId: 5, grupoNome: 'Bebidas', descricao: 'Heineken, Stella Artois ou Budweiser' },
  { id: 10, nome: 'ÁGUA MINERAL 500ML', preco: 4.50, grupoId: 5, grupoNome: 'Bebidas', descricao: 'Com ou sem gás' },
  { id: 11, nome: 'PORÇÃO BATATA FRITA C/ QUEIJO', preco: 32.00, grupoId: 3, grupoNome: 'Porções & Petiscos', descricao: '500g de batatas crocantes com cheddar e bacon' },
  { id: 12, nome: 'PETIT GATEAU C/ SORVETE', preco: 18.00, grupoId: 6, grupoNome: 'Sobremesas', descricao: 'Bolo quente de chocolate com bola de sorvete de creme' },
];

export const initialMesas: Mesa[] = [
  {
    id: 1,
    numero: 1,
    cliente: 0,
    dataHora: '2026-07-21 21:45:00',
    percGarcom: 10,
    totalConsumo: 19.90,
    totalMesa: 19.90,
    status: 'A',
    itens: [
      {
        id: 101,
        produtoId: 1,
        produtoNome: 'ALA MINUTA FRANGO',
        quantidade: 1,
        precoUnitario: 19.90,
        totalItem: 19.90,
        observacao: 'Ponto do ovo: bem passado',
        garcom: 'Jordi',
        impressoCozinha: true
      }
    ]
  },
  {
    id: 2,
    numero: 6,
    cliente: 0,
    dataHora: '2026-07-21 22:10:00',
    percGarcom: 10,
    totalConsumo: 27.00,
    totalMesa: 27.00,
    status: 'A',
    itens: [
      {
        id: 102,
        produtoId: 5,
        produtoNome: 'XIS FRANGO',
        quantidade: 1,
        precoUnitario: 27.00,
        totalItem: 27.00,
        observacao: 'jjfdsegxdcv',
        garcom: 'Jordi',
        impressoCozinha: true
      }
    ]
  },
  {
    id: 3,
    numero: 7,
    cliente: 0,
    dataHora: '2026-07-21 22:28:00',
    percGarcom: 10,
    totalConsumo: 127.90,
    totalMesa: 127.90,
    status: 'A',
    itens: [
      {
        id: 103,
        produtoId: 1,
        produtoNome: 'ALA MINUTA FRANGO',
        quantidade: 1,
        precoUnitario: 19.90,
        totalItem: 19.90,
        observacao: 'sem frango',
        garcom: 'Jordi',
        impressoCozinha: true
      },
      {
        id: 104,
        produtoId: 3,
        produtoNome: 'PICADÃO GRANDE',
        quantidade: 1,
        precoUnitario: 80.00,
        totalItem: 80.00,
        observacao: '',
        garcom: 'Jordi',
        impressoCozinha: true
      },
      {
        id: 105,
        produtoId: 4,
        produtoNome: 'XIS CARNE',
        quantidade: 1,
        precoUnitario: 28.00,
        totalItem: 28.00,
        observacao: '',
        garcom: 'Jordi',
        impressoCozinha: true
      }
    ]
  }
];

export const initialServerConfig: ServerConfig = {
  porta: 8080,
  dbUser: 'SYSDBA',
  dbPass: 'masterkey',
  dbPath: 'E:\\PDV Bitcom\\Dados\\PDV1.FDB',
  firebirdOnline: true,
  apiOnline: true,
  servidorRodando: true,
  licencaAtiva: true
};

export const initialLogs: ServerLog[] = [
  {
    id: '1',
    timestamp: '22:34:12',
    type: 'SUCCESS',
    message: 'Firebird 2.5 Conectado: E:\\PDV Bitcom\\Dados\\PDV1.FDB (Porta 3050)'
  },
  {
    id: '2',
    timestamp: '22:34:12',
    type: 'INFO',
    message: 'Servidor REST escutando em http://0.0.0.0:8080'
  },
  {
    id: '3',
    timestamp: '22:34:15',
    type: 'API',
    message: 'GET /ping — 200 OK (0.4ms) — Dispositivo: Android SDK 34 (192.168.0.106)'
  },
  {
    id: '4',
    timestamp: '22:34:18',
    type: 'SQL',
    message: 'SELECT ID_MESA, NUM_MESA, TOTAL_MESA FROM MESA WHERE STATUS = \'A\''
  },
  {
    id: '5',
    timestamp: '22:34:20',
    type: 'API',
    message: 'POST /pedido — Mesa 7 — 3 itens inseridos com sucesso (Garçom: Jordi)'
  }
];

export const apiEndpoints: ApiEndpoint[] = [
  {
    method: 'GET',
    path: '/ping',
    description: 'Verifica se o servidor e a conexão com o banco Firebird estão operacionais.',
    responseExample: {
      success: true,
      timestamp: '2026-07-21T22:34:00Z',
      database: 'connected',
      firebirdVersion: '2.5.9'
    }
  },
  {
    method: 'GET',
    path: '/test',
    description: 'Verifica se o servidor HTTP REST está online sem consultar o banco.',
    responseExample: {
      success: true,
      message: 'Servidor funcionando!',
      uptimeSeconds: 14820
    }
  },
  {
    method: 'GET',
    path: '/grupos',
    description: 'Lista todas as categorias/grupos de produtos cadastrados no PDV.',
    responseExample: [
      { ID: 1, NOME: 'Pratos & A la Minuta' },
      { ID: 2, NOME: 'Lanches & Xis' },
      { ID: 3, NOME: 'Porções & Petiscos' },
      { ID: 4, NOME: 'Pizzas' },
      { ID: 5, NOME: 'Bebidas' }
    ]
  },
  {
    method: 'GET',
    path: '/itens?limit=500&offset=0&grupos=1,3',
    description: 'Retorna catálogo paginado de produtos, com suporte a filtro opcional por IDs de grupos.',
    params: 'limit (opcional, padrão 500), offset (opcional), grupos (opcional, CSV ex: "1,3")',
    responseExample: [
      { ID: 1, NOME: 'ALA MINUTA FRANGO', PRECO: 19.90, GRUPO_ID: 1 },
      { ID: 3, NOME: 'PICADÃO GRANDE', PRECO: 80.00, GRUPO_ID: 3 }
    ]
  },
  {
    method: 'GET',
    path: '/itens/buscar?q=pizza&grupos=4',
    description: 'Busca produtos por nome com suporte a debounce de 300ms e filtro por categoria.',
    params: 'q (mínimo 2 caracteres), grupos (opcional)',
    responseExample: [
      { ID: 6, NOME: 'PIZZA MARGHERITA (MÉDIA)', PRECO: 45.00 },
      { ID: 7, NOME: 'PIZZA CALABRESA (GRANDE)', PRECO: 58.00 }
    ]
  },
  {
    method: 'GET',
    path: '/mesas',
    description: 'Retorna todas as mesas ativas (STATUS = \'A\') e seus totais de consumo em tempo real.',
    responseExample: [
      { ID: 1, NUMERO: 1, CLIENTE: 0, TOTAL: 19.90, STATUS: 'A' },
      { ID: 2, NUMERO: 6, CLIENTE: 0, TOTAL: 27.00, STATUS: 'A' },
      { ID: 3, NUMERO: 7, CLIENTE: 0, TOTAL: 127.90, STATUS: 'A' }
    ]
  },
  {
    method: 'GET',
    path: '/mesa/:id/itens',
    description: 'Obtém a lista detalhada de itens lançados em uma mesa específica.',
    params: 'id (ID da mesa no banco de dados)',
    responseExample: [
      {
        ID: 103,
        PRODUTO_ID: 1,
        PRODUTO: 'ALA MINUTA FRANGO',
        QUANTIDADE: 1,
        PRECO: 19.90,
        TOTAL: 19.90,
        OBS: 'sem frango',
        GARCOM: 'Jordi'
      },
      {
        ID: 104,
        PRODUTO_ID: 3,
        PRODUTO: 'PICADÃO GRANDE',
        QUANTIDADE: 1,
        PRECO: 80.00,
        TOTAL: 80.00,
        OBS: '',
        GARCOM: 'Jordi'
      }
    ]
  },
  {
    method: 'POST',
    path: '/pedido',
    description: 'Adiciona itens a uma mesa existente ou cria uma nova mesa no banco de dados Firebird dentro de uma transação atômica.',
    requestBody: {
      mesa: 7,
      garcom: 'Jordi',
      itens: [
        { item_id: 1, quantidade: 1, obs: 'sem frango' },
        { item_id: 3, quantidade: 1, obs: '' },
        { item_id: 4, quantidade: 1, obs: '' }
      ]
    },
    responseExample: {
      success: true,
      mesa_id: 3,
      mesa: 7,
      total: 127.90,
      itensAdicionados: 3
    }
  }
];

export const dbSchemaTables: SchemaTable[] = [
  {
    name: 'PRODUTOS',
    description: 'Catálogo de itens e produtos comercializados no estabelecimento.',
    columns: [
      { name: 'CODIGO', type: 'INTEGER', constraints: 'PRIMARY KEY', description: 'Código único do produto (PK)' },
      { name: 'DESCRICAO', type: 'VARCHAR(60)', description: 'Nome/Descrição comercial do produto' },
      { name: 'CODGRUPO', type: 'INTEGER', constraints: 'FK -> GRUPO.ID_GRUPO', description: 'Referência à categoria/grupo do produto' },
      { name: 'PRECOVENDA', type: 'NUMERIC(18,2)', description: 'Preço unitário de venda ao consumidor' }
    ]
  },
  {
    name: 'GRUPO',
    description: 'Categorias para agrupamento e filtragem de produtos (Pizzas, Lanches, Bebidas, etc.).',
    columns: [
      { name: 'ID_GRUPO', type: 'INTEGER', constraints: 'PRIMARY KEY', description: 'Identificador do grupo' },
      { name: 'NOME_GRUPO', type: 'VARCHAR(60)', description: 'Nome exibido no app do garçom' }
    ]
  },
  {
    name: 'MESA',
    description: 'Registro de mesas abertas ou fechadas no atendimento.',
    columns: [
      { name: 'ID_MESA', type: 'INTEGER', constraints: 'PRIMARY KEY (GEN_MESA)', description: 'ID sequencial via Generator Firebird' },
      { name: 'NUM_MESA', type: 'INTEGER', constraints: 'NOT NULL', description: 'Número físico da mesa no salão' },
      { name: 'FK_CLIENTE', type: 'INTEGER', description: 'ID do cliente vinculado (opcional)' },
      { name: 'DATA_HORA', type: 'TIMESTAMP', description: 'Data e hora exatas de abertura da mesa' },
      { name: 'PERC_GARCOM', type: 'NUMERIC(18,2)', description: 'Percentual da taxa de serviço (10%)' },
      { name: 'TOTAL_CONSUMO', type: 'NUMERIC(18,2)', description: 'Soma dos itens sem taxas' },
      { name: 'TOTAL_MESA', type: 'NUMERIC(18,2)', description: 'Total geral da comanda com taxas' },
      { name: 'STATUS', type: 'CHAR(1)', description: '\'A\' = Ativa/Aberta, \'F\' = Fechada' }
    ]
  },
  {
    name: 'MESA_ITENS',
    description: 'Itens individuais lançados em cada mesa por garçom.',
    columns: [
      { name: 'ID_MESAITENS', type: 'INTEGER', constraints: 'PRIMARY KEY (GEN_MESAITENS)', description: 'ID único do lançamento' },
      { name: 'FK_MESA', type: 'INTEGER', constraints: 'FK -> MESA.ID_MESA', description: 'Referência à mesa correspondente' },
      { name: 'FK_PRODUTO', type: 'INTEGER', constraints: 'FK -> PRODUTOS.CODIGO', description: 'Produto pedido pelo cliente' },
      { name: 'QTD', type: 'NUMERIC(12,3)', description: 'Quantidade pedida' },
      { name: 'VAL_UNITARIO', type: 'NUMERIC(18,2)', description: 'Valor unitário congelado no pedido' },
      { name: 'TOTAL_ITEM', type: 'NUMERIC(18,2)', description: 'Valor total do item' },
      { name: 'OBSERVACAO', type: 'VARCHAR(100)', description: 'Observação do pedido (ex: "Sem cebola")' },
      { name: 'JA_IMPRIMIU_COZINHA', type: 'CHAR(1)', description: '\'S\' se já impresso na impressora térmica' },
      { name: 'NOME_GARCOM', type: 'VARCHAR(100)', description: 'Nome do garçom que efetuou o lançamento' }
    ]
  }
];
