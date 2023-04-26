<h1 align="center">LABMedicine</h1>


<p>A LABMedicine está desenvolvendo uma API Rest para armazenar informações de pacientes, enfermeiros e médicos em um sistema automatizado de atendimento. O objetivo é automatizar alguns processos nos atendimentos de pacientes em âmbito hospitalar, facilitando o gerenciamento de informações e tornando o atendimento mais eficiente. Através da API, é possível cadastrar informações básicas de pacientes, como nome, data de nascimento, sexo, telefone e CPF. Também é possível cadastrar informações de enfermeiros e médicos, como instituição de graduação, especialidade(médicos), COFEN e CRM.

A LABMedicine acredita que essa API será um passo importante para a modernização dos processos de atendimento em hospitais, tornando o atendimento mais eficiente e melhorando a qualidade do atendimento aos pacientes.
</p>


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


## Documentação da API

#### Cadastro de Pacientes

```http
  POST /api/patients
```
No corpo da request, informar objeto json com os campos

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `String` |  Nome  |
| `gender` | `String` |  Gênero |
| `date_of_bith` | `DATEONLY` | **Obrigatório**. Data de Nascimento formato(MM/DD/AAAA) |
| `cpf` | `String` |  CPF |
| `phone` | `String` |  Telefone |
| `emergency_contact` | `String` | **Obrigatório**. Contato de Emergência  |
| `allergy_list` | `String` |  Lista de alergias |
| `specific_care_list` | `String` | Lista de cuidados específicos |
| `agreement` | `String` |  Convênio |
| `status` | `ENUM` |  values: ["AGUARDANDO_ATENDIMENTO","EM_ATENDIMENTO","ATENDIDO","NAO_ATENDIDO"] |
| `total_of_services` | `Integer` |  defaultValue: 0 |

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

--------------------------------

#### Atualiza um paciente

```http
  PUT /api/pacientes/{id}
```

No corpo da request, informar objeto json com os campos

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `INTEGER` | **Obrigatório**. O ID do Paciente que você quer atualizar |
| `name` | `String` |  Nome  |
| `gender` | `String` |  Gênero |
| `birthday` | `String` |  Data Nascimento formato(01/01/2000) |
| `cpf` | `String` |  CPF |
| `phone` | `String` |  Telefone |
| `emergencyContact` | `String` | Contato de Emergência  |
| `allergy` | `String` |  Alergias |
| `specificCare` | `String` |  Cuidados específicos |
| `healthInsurance` | `String` |  Convênio |
| `status` | `ENUM` |  values: ['aguardando_atendimento', 'em_atendimento', 'atendido', 'nao_atendido'] - defaultValue: 'nao_atendido' |
| `servicesPerdomed` | `String` |  defaultValue: '0' |

Response: 

HTTP Status Code 200 (OK)

HTTP Status Code 400 (Bad Request)

HTTP Status Code 404 (Not Found) em caso de não ser encontrado registro com o código informado

#### O sistema irá atualizar apenas os campos enviados via body no formado de JSON


--------------------------------


#### Atualiza Status de um paciente

```http
  PUT /api/pacientes/{id}/status=""
```

No corpo da request, informar objeto json com os campos

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `INTEGER` | **Obrigatório**. O ID do Paciente que você quer atualizar |
| `status` | `ENUM` |  values: ['aguardando_atendimento', 'em_atendimento', 'atendido', 'nao_atendido'] - defaultValue: 'nao_atendido' |


#### Atualiza Status de um paciente só serão aceitos as Strings descrita no status, caso seja enviado um status diferente o sistema irá retornar um erro.


--------------------------------


#### Recebe todos os pacientes cadastrados na base, sendo possível filtrar via "query params". 
Exemplo: /api/pacientes?status=atendido
O sistema irá listar todos os pacientes que se encaixe no status passado via query params.

```http
  GET /api/pacientes/
```


Response: 

HTTP Status Code 200 (OK), com a lista de pacientes.

```http
  GET /api/pacientes/{id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `INTEGER` | **Obrigatório**. O ID do Paciente que você quer listar|

Response: 

HTTP Status Code 200 (OK), com os dados do paciente.

HTTP Status Code 404 (Not Found) em caso de não ser encontrado registro com o código informado


--------------------------------

#### Exclusão de Paciente

```http
  DELETE /api/patients/:{id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `INTEGER` | **Obrigatório**. O ID do Paciente que você quer deletar|

Response:

- HTTP Status Code 204 (No Content) em caso de sucesso, sem necessidade de response body.

- HTTP Status Code 404 (Not Found) 
 
Mensagem: "Não encontramos o cadastro do paciente, verifique se foi informado corretamente"

- HTTP Status Code 500 (Internal Serve Error) 

Mensagem: "Não conseguimos processar sua solicitação"

-----------------------------------------------

#### Cadastro de Medicos

```http
  POST /api/doctors
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `String` |  Nome  |
| `gender` | `String` |  Gênero |
| `date_of_bith` | `DATEONLY` |**Obrigatório**. Data de Nascimento formato(MM/DD/AAAA)|
| `cpf` | `String` |  CPF |
| `phone` | `String` |  Telefone |
| `formation_institutio` | `String` | **Obrigatório**. Instituição de formação  |
| `crm_registration` | `String` |  **Obrigatório**. Registro CRM |
| `clinical_expertise` | `ENUM` |**Obrigatório**.values["CLINICO_GERAL","ANESTESISTA","DERMATOLOGIA","GINECOLOGIA","NEUROLOGIA","PEDIATRIA","PSIQUIATRIA","ORTOPEDIA"] |
| `status` | `ENUM` |  values: ['ATIVO','INATIVO'],    defaultValue: 'ATIVO' |
| `total_of_services` | `Integer` |  defaultValue: 0 |

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

--------------------------------

#### Atualiza um médico

```http
  PUT /api/medicos/{id}
```
No corpo da request, informar objeto json com os campos
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name` | `String` |  Nome  |
| `gender` | `String` |  Gênero |
| `birthday` | `String` |  Data Nascimento formato(01/01/2000) |
| `cpf` | `String` |  CPF |
| `phone` | `String` |  Telefone |
| `college` | `String` |  Instituição de ensino superior  |
| `crm` | `String` |  CRM |
| `specialization` | `ENUM` |  values: ['clínico_geral', 'anestesista', 'dermatologia', 'ginecologia', 'neurologia', 'pediatria', 'psiquiatria', 'ortopedia'] defaultValue: clínico_geral' |
| `status` | `ENUM` |  values: ['ativo','inativo'],    defaultValue: 'ativo' |
| `servicesPerdomed` | `String` |  defaultValue: '0' |

Response: 

HTTP Status Code 200 (OK)

HTTP Status Code 400 (Bad Request)

HTTP Status Code 404 (Not Found) em caso de não ser encontrado registro com o código informado

#### O sistema irá atualizar apenas os campos enviados via body no formado de JSON


--------------------------------


#### Atualiza Status de um medicos

```http
  PUT /api/medicos/{id}/status=""
```

No corpo da request, informar objeto json com os campos

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `INTEGER` | **Obrigatório**. O ID do Paciente que você quer atualizar |
| `status` | `ENUM` |  values: ['ativo', 'inativo'] - defaultValue: 'ativo' |


#### Atualiza Status de um medico só serão aceitos as Strings descrita no status, caso seja enviado um status diferente o sistema irá retornar um erro.


--------------------------------


#### Recebe todos os medicos cadastrados na base, sendo possível filtrar via "query params". 
Exemplo: /api/medicos?status=ativo
O sistema irá listar todos os medicos que se encaixe no status passado via query params(ativo ou inativo).

```http
  GET /api/medicos/
```


Response: 

HTTP Status Code 200 (OK), com a lista de medicos.


--------------------------------

#### Exclusão de médico

```http
  DELETE /api/doctors/:{id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `INTEGER` | **Obrigatório**. O ID do Médico que você quer deletar|

Response:

- HTTP Status Code 204 (No Content) em caso de sucesso, sem necessidade de response body.

- HTTP Status Code 404 (Not Found) 
 
Mensagem: "Não encontramos o cadastro do médico(a), verifique se foi informado corretamente"

- HTTP Status Code 500 (Internal Serve Error) 

Mensagem: "Não conseguimos processar sua solicitação"


--------------------------------------

#### Cadastro de Enfermeiro(a)

```http
  POST /api/nurses
```
No corpo da request, informar objeto json com os campos

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `String` |  Nome  |
| `gender` | `String` |  Gênero |
| `date_of_bith` | `DATEONLY` | **Obrigatório**. Data de Nascimento formato(MM/DD/AAAA) |
| `cpf` | `String` | CPF |
| `phone` | `String` |  Telefone |
| `formation_institution` | `String` | **Obrigatório**. Instituição de formação  |
| `cofen_registration` | `String` | **Obrigatório** Registro COFEN |


```http
  Exemplo de uso:
 {
		"name": "Emanuel de Abreu",
		"gender": "masculino",
		"date_of_bith": "10/10/2003",
		"cpf": "69323524333",
		"phone": "85998482147",
		"formation_institution": "UFC",
		"cofen_registration": "cofen-3254",
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
		"cofen_registration": "cofen-3254",
		"createdAt": "2023-04-22T15:02:28.104Z",
		"updatedAt": "2023-04-22T16:32:41.185Z"
	},

```
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

--------------------------------

#### Atualiza um médico

```http
  PUT /api/enfermeiros/{id}
```
No corpo da request, informar objeto json com os campos
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name` | `String` |  Nome  |
| `gender` | `String` |  Gênero |
| `birthday` | `String` |  Data Nascimento formato(01/01/2000) |
| `cpf` | `String` |  CPF |
| `phone` | `String` |  Telefone |
| `college` | `String` | Instituição de ensino superior  |
| `cofen` | `String` |  Cofen |


Response: 

HTTP Status Code 200 (OK)

HTTP Status Code 400 (Bad Request)

HTTP Status Code 404 (Not Found) em caso de não ser encontrado registro com o código informado

#### O sistema irá atualizar apenas os campos enviados via body no formado de JSON


--------------------------------


#### Recebe todos os medicos cadastrados na base, sendo possível filtrar via "query params". 
Exemplo: /api/medicos?status=ativo
O sistema irá listar todos os medicos que se encaixe no status passado via query params(ativo ou inativo).

```http
  GET /api/enfermeiros/
```


Response: 

HTTP Status Code 200 (OK), com a lista de Enfermeiro(a).


--------------------------------

#### Exclusão de Enfermeiro

```http
  DELETE /api/nurses/:{id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `INTEGER` | **Obrigatório**. O ID do Enfermeiro que você quer deletar|

Response:

- HTTP Status Code 204 (No Content) em caso de sucesso, sem necessidade de response body.

- HTTP Status Code 404 (Not Found) 
 
Mensagem: "Não encontramos o cadastro do enfermeiro(a), verifique se foi informado corretamente"

- HTTP Status Code 500 (Internal Serve Error) 

Mensagem: "Não conseguimos processar sua solicitação"


--------------------------------------------

#### Realizar atendimento

```http
  POST /api/services
```

No corpo da request, informar objeto json com os campos de identificador do paciente e identificador do médico

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `patientId`      | `INTEGER` | **Obrigatório**. O ID do Paciente que você quer atualizar|
| `doctorId`      | `INTEGER` | **Obrigatório**. O ID do Médico que você quer atualizar|

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

