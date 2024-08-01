# Node.js Proxy Server for Weather API

Este é um projeto de servidor proxy desenvolvido em Node.js, destinado a contornar problemas com a política de CORS (Cross-Origin Resource Sharing) e facilitar o acesso à API de clima. O foco principal do projeto é o back-end, utilizando Express para configurar o servidor e gerenciar as rotas.

## Funcionalidades

- **Proxy Server**: Encaminha requisições para a API de clima, resolvendo problemas de CORS.
- **Cache**: Implementação de cache com apicache para otimizar a performance das requisições.
- **Rate Limiting**: Limitação de taxa com express-rate-limit para prevenir abusos.
- **CORS**: Ativação do CORS para permitir requisições cross-origin.

## Tecnologias Utilizadas

- Node.js
- Express
- apicache
- express-rate-limit
- dotenv
- needle
- cors

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd seu-repositorio
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Crie um arquivo `.env` na raiz do projeto e adicione suas variáveis de ambiente:

    ```env
    API_BASE_URL=sua_api_base_url
    API_KEY_NAME=sua_api_key_name
    API_KEY_VALUE=sua_api_key_value
    PORT=sua_porta
    ```

5. Inicie o servidor:

    ```bash
    npm start
    ```

## Endpoints

- `GET /api`: Rota principal que encaminha as requisições para a API de clima.

## Estrutura do Projeto

- `public/`: Contém arquivos estáticos (HTML, CSS, JS).
- `routes/`: Contém as definições de rotas para o servidor proxy.
- `.env`: Arquivo que contém as variáveis de ambiente
- `index.js`: Arquivo principal do servidor.
- `package.json`: Lista de dependências e scripts do projeto.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença

Este projeto está licenciado sob a Licença MIT.
