<h1 align="center">LABMedicine</h1>


<p>A LABMedicine está desenvolvendo uma API Rest para armazenar informações de pacientes, enfermeiros e médicos em um sistema automatizado de atendimento. O objetivo é automatizar alguns processos nos atendimentos de pacientes em âmbito hospitalar, facilitando o gerenciamento de informações e tornando o atendimento mais eficiente. Através da API, é possível cadastrar informações básicas de pacientes, como nome, data de nascimento, sexo, telefone e CPF. Também é possível cadastrar informações de enfermeiros e médicos, como instituição de graduação, especialidade(médicos), COFEN e CRM.

A LABMedicine acredita que essa API será um passo importante para a modernização dos processos de atendimento em hospitais, tornando o atendimento mais eficiente e melhorando a qualidade do atendimento aos pacientes.
</p>

# Índice 

* [Título e Imagem de capa](#Título-e-Imagem-de-capa)
* [Badges](#badges)
* [Índice](#índice)
* [Descrição do Projeto](#descrição-do-projeto)
* [Status do Projeto](#status-do-Projeto)
* [Funcionalidades e Demonstração da Aplicação](#funcionalidades-e-demonstração-da-aplicação)
* [Acesso ao Projeto](#acesso-ao-projeto)
* [Tecnologias utilizadas](#tecnologias-utilizadas)
* [Pessoas Contribuidoras](#pessoas-contribuidoras)
* [Pessoas Desenvolvedoras do Projeto](#pessoas-desenvolvedoras)
* [Licença](#licença)
* [Conclusão](#conclusão)

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre](#Sobre)
   * [Tabela de Conteudo](#tabela-de-conteudo)
   * [Instalação](#instalacao)
   * [Como usar](#como-usar)
      * [Pre Requisitos](#pre-requisitos)
      * [Local files](#local-files)
      * [Remote files](#remote-files)
      * [Multiple files](#multiple-files)
      * [Combo](#combo)
   * [Tests](#testes)
   * [Tecnologias](#tecnologias)
<!--te-->


## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Git](https://git-scm.com/)
- [Sequelize ORM](https://sequelize.org/)
- [dotenv](https://www.npmjs.com/package/dotenv)

## Dependências

As seguintes dependências foram instaladas neste projeto:

| Pacote | Versão |
|--------|--------|
| dotenv | 16.0.3 |
| express | 4.18.2 |
| pg | 8.10.0 |
| pg-hstore | 2.3.4 |
| sequelize | 6.31.0 |
| dotenv | 16.0.3 |

## 🛠️ Instalação e Configuração
Para executar esta API em sua máquina, siga os seguintes passos:

1. Instale o Node.js em seu computador;
2. Instale o PostgreSQL em sua máquina;
3. Clone este repositório em seu computador;
4. Navegue até a pasta do projeto através do terminal ou prompt de comando;
5. Execute o comando npm install para instalar as dependências do projeto;
6. Crie um arquivo .env na raiz do projeto, seguindo o exemplo abaixo e preencha com as informações do seu banco de dados:

| Variável | Valor                    |
|----------|--------------------------|
| DIALECT_DATABASE  | postgres                |
| HOST_DATABASE  | localhost                |
| USER_DATABASE | seu_usuario_do_postgres |
| PASSWORD_DATABASE | sua_senha_do_postgres  |
| PORT_DATABASE | porta_no_postgres  |
| NAME_DATABASE  | nome_do_seu_banco_de_dados |

7. Execute o comando npx sequelize db:migrate para criar as tabelas do banco de dados;
8. Execute o comando npm start para iniciar o servidor da API.


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`API_KEY`

`ANOTHER_API_KEY`




## Documentação da API

#### Retorna todos os itens

```http
  GET /api/items
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave da sua API |

#### Retorna um item

```http
  GET /api/items/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### add(num1, num2)

Recebe dois números e retorna a sua soma.



## 📌 Endpoints Disponíveis
A API possui os seguintes endpoints:

- [Link para a rota /patients/:id](./patients/id.md)
- /patients - CRUD de pacientes;
- /doctors - CRUD de médicos;
- /nurses - CRUD de enfermeiros;
- /services - Realizar atendimento.




Para saber mais detalhes sobre cada endpoint, você pode verificar a documentação da API.



### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)
