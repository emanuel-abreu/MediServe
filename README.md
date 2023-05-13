<h1 align="center">MediServe</h1>

<p>A LABMedicine está desenvolvendo uma API Rest, chamada de MediServe, para armazenar informações de pacientes, enfermeiros e médicos em um sistema automatizado de atendimento. O objetivo é automatizar alguns processos nos atendimentos de pacientes em âmbito hospitalar, facilitando o gerenciamento de informações e tornando o atendimento mais eficiente. Através da API, é possível cadastrar informações básicas de pacientes, como nome, data de nascimento, sexo, telefone e CPF. Também é possível cadastrar informações de enfermeiros e médicos, como instituição de graduação, especialidade(médicos), COFEN e CRM.

A LABMedicine acredita que a API MediServe será um passo importante para a modernização dos processos de atendimento em hospitais, tornando o atendimento mais eficiente e melhorando a qualidade do atendimento aos pacientes.

</p>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Git](https://git-scm.com/)
- [Sequelize ORM](https://sequelize.org/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [nodemon](https://www.npmjs.com/package/nodemon)

## Dependências

As seguintes dependências foram instaladas neste projeto:

| Pacote    | Versão |
| --------- | ------ |
| express   | 4.18.2 |
| pg        | 8.10.0 |
| pg-hstore | 2.3.4  |
| sequelize | 6.31.0 |
| dotenv    | 16.0.3 |
| nodemon   | 2.0.22 |

## 🛠️ Instalação e Configuração

Para executar esta API em sua máquina, siga os seguintes passos:

- 1. Instale o Node.js em seu computador;
- 2. Instale o PostgreSQL em sua máquina;
- 3. Clone este repositório em uma pasta que deseja, usando esse comando:

git clone https://github.com/emanuel-abreu/MediServe.git

- 4. Navegue até a pasta do projeto através do terminal ou prompt de comando;
- 5. Execute o comando 'npm install' para instalar as dependências do projeto;
- 6. Crie um banco de dados com o nome 'labmedicinedb' em uma conexão no Postgres;
- 7. Use o arquivo '.env-exemple' que está na raiz do projeto, seguindo o exemplo abaixo e preencha com as informações do seu banco de dados:

| Variável de Ambiente | Valor                      |
| -------------------- | -------------------------- |
| DIALECT_DATABASE     | postgres                   |
| HOST_DATABASE        | localhost                  |
| USER_DATABASE        | seu_usuario_do_postgres    |
| PASSWORD_DATABASE    | sua_senha_do_postgres      |
| PORT_DATABASE        | porta_no_postgres          |
| NAME_DATABASE        | nome_do_seu_banco_de_dados |

- 8. Execute o comando, na pasta raiz do projeto, 'npm start' para iniciar o servidor da API.

## Arquitetura do Projeto

O projeto foi organizado em pastas para melhorar o entendimento do código, bem como ajudar em uma futura manuntenção na API, pois caso aconteça algum erro, será mais fácil corrigi-lo.

A pasta [src] contém todo o código da aplicação, e é onde as principais funcionalidades estão implementadas. Dentro dela, temos as seguintes subpastas:

- [controllers]: contém os controladores da aplicação, que recebem as requisições HTTP, processam as informações necessárias e retornam as respostas adequadas.

- [database]: contém o arquivo necessário para configurar e estabelecer a conexão com o banco de dados PostgreSQL, como a definição do modelo de dados e a configuração do Sequelize.

- [models]: contém os modelos da aplicação, que definem as tabelas e relacionamentos do banco de dados.

- [routes]: contém as definições das rotas da aplicação, que mapeiam as requisições HTTP para as funções correspondentes nos controladores.

- `index.js`: Arquivo principal do projeto que inicia o servidor.

- `src/`: Pasta que contém o código-fonte da aplicação.

  - `controllers/`: Pasta que contém os controladores da aplicação, que fazem o gerenciamento das requisições.

    - `doctors/`: Controladores que fazem o gerenciamento das requisições relacionados ao médico.

    - `nurses/`: Controladores que fazem o gerenciamento das requisições relacionados ao enfermeiros.

    - `patients/`: Controladores que fazem o gerenciamento das requisições relacionados ao pacientes.

    - `services/`: Controladores que fazem o gerenciamento das requisições relacionados aos atendimentos.

  - `database/`: Pasta que contém as configurações de acesso ao banco de dados.

    - `labmedicinebd.js`: Arquivo que exporta as configurações do banco de dados.

  - `models/`: Pasta que contém as definições dos modelos do banco de dados.

    - `doctor.js`: Modelo do banco de dados relacionado aos médicos.

    - `nurse.js`: Modelo do banco de dados relacionado aos pacientes.

    - `patient.js`: Modelo do banco de dados relacionado aos enfermeiros.

    - `service.js`: Modelo do banco de dados relacionado aos serviços.

  - `routes/`: Pasta que contém as definições das rotas da aplicação.

    - `deleteRoutes.js`: Arquivo que exporta as rotas relacionadas nas exclusões.

    - `getRoutes.js`: Arquivo que exporta as rotas relacionadas às listagens.

    - `postRoutes.js`: Arquivo que exporta as rotas relacionadas nos cadastros.

    - `putRoutes.js`: Arquivo que exporta as rotas relacionadas nas atualizações.

## 📌 Endpoints Disponíveis

#### Cadastro de Pacientes

```http
  POST /api/patients
```

No corpo da request, informar objeto json com os campos

| Parâmetro            | Tipo       | Descrição                                                                     |
| :------------------- | :--------- | :---------------------------------------------------------------------------- |
| `name`               | `String`   | Nome                                                                          |
| `gender`             | `String`   | Gênero                                                                        |
| `date_of_bith`       | `DATEONLY` | **Obrigatório**. Data de Nascimento formato(MM/DD/AAAA)                       |
| `cpf`                | `String`   | CPF                                                                           |
| `phone`              | `String`   | Telefone                                                                      |
| `emergency_contact`  | `String`   | **Obrigatório**. Contato de Emergência                                        |
| `allergy_list`       | `String`   | Lista de alergias                                                             |
| `specific_care_list` | `String`   | Lista de cuidados específicos                                                 |
| `agreement`          | `String`   | Convênio                                                                      |
| `status`             | `ENUM`     | values: ["AGUARDANDO_ATENDIMENTO","EM_ATENDIMENTO","ATENDIDO","NAO_ATENDIDO"] |
| `total_of_services`  | `Integer`  | defaultValue: 0                                                               |

```http
  Exemplo de uso:
  {
	"name": "Emanuel de Abreu",
	"gender": "Masculino",
	"date_of_bith": "01/13/2001",
	"cpf":"12345678901",
	"phone":"85 90000 0000",
	"emergency_contact":"85 90000 0000",
	"allergy":"camarão",
	"specific_care_list":"nenhum",
	"agreement":"SUS"
}

Retorno:

{
	"total_of_services": 0,
	"id": 7,
	"name": "Emanuel de Abreu",
	"gender": "masculino",
	"date_of_bith": "2001-12-21",
	"cpf": "12345678901",
	"phone": "85 90000 0000",
	"emergency_contact": "85 90000 0000",
	"allergy_list": "camarão",
	"specific_care_list": "nenhum",
	"agreement": "SUS",
	"updatedAt": "2023-04-25T23:13:42.687Z",
	"createdAt": "2023-04-25T23:13:42.687Z",
	"status": null
}

```

Response:

- HTTP Status Code 201 (CREATED)

Retorna o objeto com os dados do paciente criado.

- HTTP Status Code 400 (Bad Request)

Mensagem: "Data de Aniversário é obrigatório no cadastro" ou
"Contato de emergência é obrigatório no cadastro"

- HTTP Status Code 409 (Conflict)

Mensagem: "Já existe um CPF com esse número cadastrado."

- HTTP Status Code 500 (Internal Serve Error)

Mensagem: "Não conseguimos processar sua solicitação"

---

#### Atualiza dados de um Paciente

```http
  PUT /api/patients/:{id}
```

No corpo da request, informar objeto json com os campos

| Parâmetro            | Tipo       | Descrição                                                                     |
| :------------------- | :--------- | :---------------------------------------------------------------------------- |
| `name`               | `String`   | Nome                                                                          |
| `gender`             | `String`   | Gênero                                                                        |
| `date_of_bith`       | `DATEONLY` | **Obrigatório**. Data de Nascimento formato(MM/DD/AAAA)                       |
| `cpf`                | `String`   | CPF                                                                           |
| `phone`              | `String`   | Telefone                                                                      |
| `emergency_contact`  | `String`   | **Obrigatório**. Contato de Emergência                                        |
| `allergy_list`       | `String`   | Lista de alergias                                                             |
| `specific_care_list` | `String`   | Lista de cuidados específicos                                                 |
| `agreement`          | `String`   | Convênio                                                                      |
| `status`             | `ENUM`     | values: ["AGUARDANDO_ATENDIMENTO","EM_ATENDIMENTO","ATENDIDO","NAO_ATENDIDO"] |
| `total_of_services`  | `Integer`  | defaultValue: 0                                                               |

Response:

- HTTP Status Code 200 (OK)

Retorna o objeto com os dados do paciente atualizados.

- HTTP Status Code 400 (Bad Request)

Caso seja requerido atualizar, porém esteja vazio.

Mensagem: "O campo 'Data de nascimento' é obrigatório e deve ser preenchido corretamente.(Ex: MM/DD/AAAA)" ou
"O campo 'Contato de emergência' é obrigatório e deve ser preenchido corretamente."

- HTTP Status Code 404 (Not Found)

Mensagem: "Não encontramos o cadastro do paciente, verifique se foi informado corretamente"

- HTTP Status Code 500 (Internal Serve Error)

Mensagem: "Não conseguimos processar sua solicitação"

##### O sistema irá atualizar apenas os campos enviados via body no formado de JSON e se o id for enviado via Route params.

---

#### Atualiza Status de um Paciente

```http
  PUT /api/patients/:{id}/status
```

No corpo da request, informar objeto json com os campos

| Parâmetro | Tipo      | Descrição                                                                     |
| :-------- | :-------- | :---------------------------------------------------------------------------- |
| `id`      | `INTEGER` | **Obrigatório**. O ID do Paciente que você quer atualizar                     |
| `status`  | `ENUM`    | values: ["AGUARDANDO_ATENDIMENTO","EM_ATENDIMENTO","ATENDIDO","NAO_ATENDIDO"] |

Response:

- HTTP Status Code 200 (OK)

Retorna o objeto com os dados do paciente atualizados.

- HTTP Status Code 400 (Bad Request)

Caso seja requerido atualizar, porém o status esteja incorreto.

Mensagem: "Status inválido, verifique se foi informado corretamente"

- HTTP Status Code 404 (Not Found)

Mensagem: "Não encontramos o cadastro do paciente, verifique se foi informado corretamente"

- HTTP Status Code 500 (Internal Serve Error)

Mensagem: "Não conseguimos processar sua solicitação"

##### O sistema irá atualizar apenas se o status for enviado via body no formado de JSON e se o id for enviado via Route params.

---

#### Listagem de Pacientes

##### Recebe todos os pacientes cadastrados na base, sendo possível filtrar via "query params".

Exemplo: /api/patients?status=ATENDIDO
O sistema irá listar todos os pacientes que se encaixe no status passado via query params.

```http
  GET /api/patients
```

Response:

- HTTP Status Code 200 (OK):

  Retorna a lista de todos os pacientes cadastrados.

- HTTP Status Code 500 (Internal Serve Error)

Mensagem: "Não conseguimos processar sua solicitação"

**OU**

```http
  GET /api/patients?status=NAO_ATENDIDO
```

Response:

- HTTP Status Code 200 (OK)

  Retorna a lista de todos os pacientes que estão com o status = NAO_ATENDIDO.

- HTTP Status Code 500 (Internal Serve Error)

Mensagem: "Não conseguimos processar sua solicitação"

```http
  GET /api/patients/:{id}
```

| Parâmetro | Tipo      | Descrição                                              |
| :-------- | :-------- | :----------------------------------------------------- |
| `id`      | `INTEGER` | **Obrigatório**. O ID do Paciente que você quer listar |

Response:

- HTTP Status Code 200 (OK)

  Retorna os dados do paciente passado no Route params.

- HTTP Status Code 404 (Not Found)

Mensagem: "Não encontramos o cadastro do paciente, verifique se foi informado corretamente"

- HTTP Status Code 500 (Internal Serve Error)

Mensagem: "Não conseguimos processar sua solicitação"

---

#### Exclusão de Paciente

```http
  DELETE /api/patients/:{id}
```

| Parâmetro | Tipo      | Descrição                                               |
| :-------- | :-------- | :------------------------------------------------------ |
| `id`      | `INTEGER` | **Obrigatório**. O ID do Paciente que você quer deletar |

Response:

- HTTP Status Code 204 (No Content)

Em caso de sucesso, deleta todos os dados do paciente passado no Route params, sem necessidade de response.

- HTTP Status Code 404 (Not Found)

Mensagem: "Não encontramos o cadastro do paciente, verifique se foi informado corretamente"

- HTTP Status Code 500 (Internal Serve Error)

Mensagem: "Não conseguimos processar sua solicitação"

##### O sistema irá deletar apenas se o id for enviado via Route params.

---

#### Cadastro de Médicos

```http
  POST /api/doctors
```

| Parâmetro              | Tipo       | Descrição                                                                                                                             |
| :--------------------- | :--------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `name`                 | `String`   | Nome                                                                                                                                  |
| `gender`               | `String`   | Gênero                                                                                                                                |
| `date_of_bith`         | `DATEONLY` | **Obrigatório**. Data de Nascimento formato(MM/DD/AAAA)                                                                               |
| `cpf`                  | `String`   | CPF                                                                                                                                   |
| `phone`                | `String`   | Telefone                                                                                                                              |
| `formation_institutio` | `String`   | **Obrigatório**. Instituição de formação                                                                                              |
| `crm_registration`     | `String`   | **Obrigatório**. Registro CRM                                                                                                         |
| `clinical_expertise`   | `ENUM`     | **Obrigatório**.values["CLINICO_GERAL","ANESTESISTA","DERMATOLOGIA","GINECOLOGIA","NEUROLOGIA","PEDIATRIA","PSIQUIATRIA","ORTOPEDIA"] |
| `status`               | `ENUM`     | values: ['ATIVO','INATIVO'], defaultValue: 'ATIVO'                                                                                    |
| `total_of_services`    | `Integer`  | defaultValue: 0                                                                                                                       |

```http
  Exemplo de uso:
  {
		"name": "Emanuel de Abreu",
		"gender": "masculino",
		"date_of_bith": "10/10/2003",
		"cpf": "69323524333",
		"phone": "85998482147",
		"formation_institution": "UFC",
		"crm_registration": "crm-3254",
		"clinical_expertise": "DERMATOLOGIA",
	}

Retorno:

	{
		"id": 5,
		"name": "Emanuel de Abreu",
		"gender": "masculino",
		"date_of_bith": "2003-10-10",
		"cpf": "69323524333",
		"phone": "85998482147",
		"formation_institution": "UFC",
		"crm_registration": "crm-3254",
		"clinical_expertise": "DERMATOLOGIA",
		"status": "ATIVO",
		"total_of_services": 0,
		"createdAt": "2023-04-22T15:02:28.104Z",
		"updatedAt": "2023-04-22T16:32:41.185Z"
	},

```

Response:

- HTTP Status Code 201 (CREATED)

Retorna o objeto com os dados do médico criado.

- HTTP Status Code 400 (Bad Request)

Mensagem: "Data de Aniversário é obrigatório no cadastro" ou
"Instituição de formação é obrigatório no cadastro" ou "Registro CRM/UF é obrigatório no cadastro" ou "O campo Especialidade clínica é obrigatório e não foi preenchido ou foi digitado incorretamente."

- HTTP Status Code 409 (Conflict)

Mensagem: "Já existe um CPF com esse número cadastrado."

- HTTP Status Code 500 (Internal Serve Error)

Mensagem: "Não conseguimos processar sua solicitação"

---

#### Atualiza dados de um Médico

```http
  PUT /api/doctors/:{id}
```

| Parâmetro              | Tipo       | Descrição                                                                                                                             |
| :--------------------- | :--------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `name`                 | `String`   | Nome                                                                                                                                  |
| `gender`               | `String`   | Gênero                                                                                                                                |
| `date_of_bith`         | `DATEONLY` | **Obrigatório**. Data de Nascimento formato(MM/DD/AAAA)                                                                               |
| `cpf`                  | `String`   | CPF                                                                                                                                   |
| `phone`                | `String`   | Telefone                                                                                                                              |
| `formation_institutio` | `String`   | **Obrigatório**. Instituição de formação                                                                                              |
| `crm_registration`     | `String`   | **Obrigatório**. Registro CRM                                                                                                         |
| `clinical_expertise`   | `ENUM`     | **Obrigatório**.values["CLINICO_GERAL","ANESTESISTA","DERMATOLOGIA","GINECOLOGIA","NEUROLOGIA","PEDIATRIA","PSIQUIATRIA","ORTOPEDIA"] |
| `status`               | `ENUM`     | values: ['ATIVO','INATIVO'], defaultValue: 'ATIVO'                                                                                    |
| `total_of_services`    | `Integer`  | defaultValue: 0                                                                                                                       |

Response:

- HTTP Status Code 200 (OK)

Retorna o objeto com os dados do médico atualizados.

- HTTP Status Code 400 (Bad Request)

Caso seja requerido atualizar, porém esteja vazio.

Mensagem: "O campo 'Data de nascimento' é obrigatório e deve ser preenchido corretamente.(Ex: MM/DD/AAAA)"
ou "O campo 'Instituição de formação' é obrigatório e deve ser preenchido corretamente."
ou "O campo 'Registro CRM' é obrigatório e deve ser preenchido corretamente."
ou "O campo 'Especialidade clínica' é obrigatório e deve ser preenchido corretamente."

- HTTP Status Code 404 (Not Found)

Mensagem: "Não encontramos o cadastro do médico, verifique se foi informado corretamente"

- HTTP Status Code 500 (Internal Serve Error)

Mensagem: "Não conseguimos processar sua solicitação"

##### O sistema irá atualizar apenas os campos enviados via body no formado de JSON e se o id for enviado via Route params.

---

#### Atualiza Status de um Médico

```http
  PUT /api/doctors/:{id}/status
```

No corpo da request, informar objeto json com os campos

| Parâmetro | Tipo      | Descrição                                               |
| :-------- | :-------- | :------------------------------------------------------ |
| `id`      | `INTEGER` | **Obrigatório**. O ID do Médico que você quer atualizar |
| `status`  | `ENUM`    | values: ['ATIVO','INATIVO'], defaultValue: 'ATIVO'      |

Response:

- HTTP Status Code 200 (OK)

Retorna o objeto com os dados do médico atualizados.

- HTTP Status Code 400 (Bad Request)

Caso seja requerido atualizar, porém o status esteja incorreto.

Mensagem: "Status inválido, verifique se foi informado corretamente"

- HTTP Status Code 404 (Not Found)

Mensagem: "Não encontramos o cadastro do médico, verifique se foi informado corretamente"

- HTTP Status Code 500 (Internal Serve Error)

Mensagem: "Não conseguimos processar sua solicitação"

##### O sistema irá atualizar apenas se o status for enviado via body no formado de JSON e se o id for enviado via Route params.

---

#### Listagem de Médicos

##### Recebe todos os médicos cadastrados na base, sendo possível filtrar via "query params".

Exemplo: /api/doctors?status=ATIVO
O sistema irá listar todos os médicos que se encaixe no status passado via query params(ATIVO ou INATIVO).

```http
  GET /api/doctors
```

Response:

- HTTP Status Code 200 (OK)

  Retorna a lista de todos os médicos cadastrados.

- HTTP Status Code 500 (Internal Serve Error)

Mensagem: "Não conseguimos processar sua solicitação"

**ou**

```http
  GET /api/doctors?status=INATIVO
```

Response:

- HTTP Status Code 200 (OK)

  Retorna a lista de todos os médicos que estão com o status = INATIVO.

- HTTP Status Code 500 (Internal Serve Error)

Mensagem: "Não conseguimos processar sua solicitação"

```http
  GET /api/doctors/:{id}
```

| Parâmetro | Tipo      | Descrição                                            |
| :-------- | :-------- | :--------------------------------------------------- |
| `id`      | `INTEGER` | **Obrigatório**. O ID do Médico que você quer listar |

Response:

- HTTP Status Code 200 (OK)

  Retorna os dados do médico passado no Route params.

- HTTP Status Code 404 (Not Found)

Mensagem: "Não encontramos o cadastro do médico, verifique se foi informado corretamente"

- HTTP Status Code 500 (Internal Serve Error)

Mensagem: "Não conseguimos processar sua solicitação"

---

#### Exclusão de médico

```http
  DELETE /api/doctors/:{id}
```

| Parâmetro | Tipo      | Descrição                                             |
| :-------- | :-------- | :---------------------------------------------------- |
| `id`      | `INTEGER` | **Obrigatório**. O ID do Médico que você quer deletar |

Response:

- HTTP Status Code 204 (No Content)

Em caso de sucesso, deleta todos os dados do médico passado no Route params, sem necessidade de response.

- HTTP Status Code 404 (Not Found)

Mensagem: "Não encontramos o cadastro do médico(a), verifique se foi informado corretamente"

- HTTP Status Code 500 (Internal Serve Error)

Mensagem: "Não conseguimos processar sua solicitação"

---

#### Cadastro de Enfermeiro(a)

```http
  POST /api/nurses
```

No corpo da request, informar objeto json com os campos

| Parâmetro               | Tipo       | Descrição                                               |
| :---------------------- | :--------- | :------------------------------------------------------ |
| `name`                  | `String`   | Nome                                                    |
| `gender`                | `String`   | Gênero                                                  |
| `date_of_bith`          | `DATEONLY` | **Obrigatório**. Data de Nascimento formato(MM/DD/AAAA) |
| `cpf`                   | `String`   | CPF                                                     |
| `phone`                 | `String`   | Telefone                                                |
| `formation_institution` | `String`   | **Obrigatório**. Instituição de formação                |
| `cofen_registration`    | `String`   | **Obrigatório** Registro COFEN                          |

```http
  Exemplo de uso:
```

    {
    	"name": "Emanuel de Abreu",
    	"gender": "masculino",
    	"date_of_bith": "10/10/2003",
    	"cpf": "69323524333",
    	"phone": "85998482147",
    	"formation_institution": "UFC",
    	"cofen_registration": "cofen-3254",
    },

Retorno:

    {
    	"id": 5,
    	"name": "Emanuel de Abreu",
    	"gender": "masculino",
    	"date_of_bith": "2003-10-10",
    	"cpf": "69323524333",
    	"phone": "85998482147",
    	"formation_institution": "UFC",
    	"cofen_registration": "cofen-3254",
    	"createdAt": "2023-04-22T15:02:28.104Z",
    	"updatedAt": "2023-04-22T16:32:41.185Z"
    },

Response:

- HTTP Status Code 201 (CREATED)

Retorna o objeto com os dados do(a) enfermeiro(a) criado.

- HTTP Status Code 400 (Bad Request)

Mensagem: "Data de Aniversário é obrigatório no cadastro" ou
"Instituição de formação é obrigatório no cadastro" ou "Cadastro COFEN/UF é obrigatório no cadastro".

- HTTP Status Code 409 (Conflict)

Mensagem: "Já existe um CPF com esse número cadastrado."

- HTTP Status Code 500 (Internal Serve Error)

Mensagem: "Não conseguimos processar sua solicitação"

---

#### Atualizar dados de um Enfermeiro(a)

```http
  PUT /api/nurses/:{id}
```

No corpo da request, informar objeto json com os campos

| Parâmetro               | Tipo       | Descrição                                               |
| :---------------------- | :--------- | :------------------------------------------------------ |
| `name`                  | `String`   | Nome                                                    |
| `gender`                | `String`   | Gênero                                                  |
| `date_of_bith`          | `DATEONLY` | **Obrigatório**. Data de Nascimento formato(MM/DD/AAAA) |
| `cpf`                   | `String`   | CPF                                                     |
| `phone`                 | `String`   | Telefone                                                |
| `formation_institution` | `String`   | **Obrigatório**. Instituição de formação                |
| `cofen_registration`    | `String`   | **Obrigatório** Registro COFEN                          |

Response:

- HTTP Status Code 200 (OK)

Retorna o objeto com os dados do enfermeiro(a) atualizados.

- HTTP Status Code 400 (Bad Request)

Mensagem: "O campo 'Data de nascimento' é obrigatório e deve ser preenchido corretamente.(Ex: MM/DD/AAAA)"
ou "O campo 'Instituição de formação' é obrigatório e deve ser preenchido corretamente."
ou "O campo 'Registro COFEN' é obrigatório e deve ser preenchido corretamente."

- HTTP Status Code 404 (Not Found)

Mensagem: "Não encontramos o cadastro do enfermeiro(a), verifique se foi informado corretamente"

- HTTP Status Code 500 (Internal Serve Error)

Mensagem: "Não conseguimos processar sua solicitação"

#### O sistema irá atualizar apenas os campos enviados via body no formado de JSON e se o id for enviado via Route params.

---

#### Listagem de Enfermeiros

```http
  GET /api/nurses
```

Response:

- HTTP Status Code 200 (OK)

  Retorna a lista de todos os enfermeiros cadastrados.

- HTTP Status Code 500 (Internal Serve Error)

Mensagem: "Não conseguimos processar sua solicitação"

```http
  GET /api/nurses/:{id}
```

| Parâmetro | Tipo      | Descrição                                                |
| :-------- | :-------- | :------------------------------------------------------- |
| `id`      | `INTEGER` | **Obrigatório**. O ID do Enfermeiro que você quer listar |

Response:

Response:

- HTTP Status Code 200 (OK)
  Retorna os dados do enfermeiro(a) passado no Route params.

- HTTP Status Code 404 (Not Found)

Mensagem: "Não encontramos o cadastro do enfermeiro(a), verifique se foi informado corretamente"

- HTTP Status Code 500 (Internal Serve Error)

Mensagem: "Não conseguimos processar sua solicitação"

---

#### Exclusão de Enfermeiro

```http
  DELETE /api/nurses/:{id}
```

| Parâmetro | Tipo      | Descrição                                                 |
| :-------- | :-------- | :-------------------------------------------------------- |
| `id`      | `INTEGER` | **Obrigatório**. O ID do Enfermeiro que você quer deletar |

Response:

- HTTP Status Code 204 (No Content)

Em caso de sucesso, deleta todos os dados do médico passado no Route params, sem necessidade de response.

- HTTP Status Code 404 (Not Found)

Mensagem: "Não encontramos o cadastro do enfermeiro(a), verifique se foi informado corretamente"

- HTTP Status Code 500 (Internal Serve Error)

Mensagem: "Não conseguimos processar sua solicitação"

---

#### Realizar Atendimento

```http
  POST /api/services
```

No corpo da request, informar objeto json com os campos de identificador do paciente e identificador do médico

| Parâmetro   | Tipo      | Descrição                                                 |
| :---------- | :-------- | :-------------------------------------------------------- |
| `patientId` | `INTEGER` | **Obrigatório**. O ID do Paciente que você quer atualizar |
| `doctorId`  | `INTEGER` | **Obrigatório**. O ID do Médico que você quer atualizar   |

Response:

- HTTP Status Code 200 (CREATED)

Retorna o objeto com os dados do médico e do paciente já atualizados.

- HTTP Status Code 400 (Bad Request)

Mensagem: "Os campos de identificador do paciente e do médico são obrigatórios para cadastrar o atendimento.".
ou "Médico(a) não pode fazer atendimento, pois se encontra INATIVO(A)"

- HTTP Status Code 404 (Not Found)

Mensagem: "Não encontramos o cadastro do paciente, verifique se foi informado corretamente" ou
"Não encontramos o cadastro do médico(a), verifique se foi informado corretamente"

- HTTP Status Code 500 (Internal Serve Error)

Mensagem: "Não conseguimos processar sua solicitação"
