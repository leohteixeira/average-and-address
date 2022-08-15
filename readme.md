# Case Me Poupe!

API feita com **Node.Js** usando **Typescript**. Foi utilizado o **Express** para construção do servidor, **Jest** para realizar os testes unitários, **Supertest** para auxiliar nos testes e2e, **Winston** para gerar os logs, **Docker** para subir a infraestrutura.

O projeto foi arquitetado baseado nos princípios do **Clean Architecture** utilizando o **domain layer** contendo as regras de negócio, o **data layer** contendo a implementação das regras de negócio, o **infra layer** contendo os frameworks e drivers para comunicação externa, o **presentation layer** com os controladores das rotas, e no **main layer** contendo a composição das rotas e do servidor.

Os logs serão salvos no formato JSON em arquivos na pasta **logs** na raiz do projeto.

## Para rodar o servidor:

### Instale as dependências

```bash

$ npm install

```

### Suba o servidor

```bash

$ npm run up

```

### Para desligar o servidor

```bash

$ npm run down

```

### O servidor inciará na porta:3000

Acesse <http://localhost:3000>

#### Para o primeiro desafio:

Acesse <http://localhost:3000/calculate-average>.

Com os seguintes parâmetros no body:

    {
    	"firstValue": number,
    	"secondValue": number
    }

#### Para o segundo desafio:

Acesse <http://localhost:3000/get-address/:cep> colocando o CEP como parâmetro.

### Para rodar os testes

```bash

$ npm test

```

### Para gerar o coverage

```bash

$ npm run test:ci

```

- Para acessar: coverage/Icov-report/index.html
