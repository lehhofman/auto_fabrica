# auto_fabrica

Este projeto é um sistema de um pátio de automóveis.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express**: Framework para construir aplicações web com Node.js.
- **Prisma**: ORM para facilitar a manipulação do banco de dados.
- **MySQL**: Sistema de gerenciamento de banco de dados relacional.
- **CORS**: Middleware para habilitar o compartilhamento de recursos entre diferentes origens.
- **dotenv**: Para carregar variáveis de ambiente de um arquivo `.env`.

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/lehhofman/auto_fabrica.git
   ```
2. Abra com o visual e Entre no repositório:

   ```bash
   cd api
   ```
   
3. Instale as dependências:

```bash
npm install
```

4. Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

```
DATABASE_URL="mysql://root:@localhost:3306/fabrica_carro"
```

5. Execute as migrações do Prisma para criar as tabelas no banco de dados:

```bash
npx prisma migrate dev --name fabrica_carro init

```

6. Popule o banco de dados com dados iniciais:

```bash
npx prisma db seed
```

7. Inicie o servidor:

```bash
node server.js
```

8. Abra o sistema:

```bash
Abra o arquivo index.html pelo LiveServer.
```


