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


### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Git](https://git-scm.com/)
- [Sequelize ORM](https://sequelize.org/)

### Dependências

As seguintes dependências foram instaladas neste projeto:

| Pacote | Versão |
|--------|--------|
| dotenv | 16.0.3 |
| express | 4.18.2 |
| pg | 8.10.0 |
| pg-hstore | 2.3.4 |
| sequelize | 6.31.0 |



### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/tgmarinho/nlw1>

# Acesse a pasta do projeto no terminal/cmd
$ cd nlw1

# Vá para a pasta server
$ cd server

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev:server

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```
