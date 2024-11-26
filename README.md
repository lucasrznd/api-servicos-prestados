<h2 align="center">API de Serviços Prestados</h2>

<div align="center">
  
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
</div>

<h2 id="description">📙 Descrição</h2>

Esta API é responsavél para registar contratos associados a um perfil, os respectivos serviços prestados e pagamentos.

<h2 id="dataModel">🗄️ Modelagem</h2>

<img src="https://i.postimg.cc/MTyPZzyB/temp-Imagepvz-S50.avif" data-canonical-src="https://postimg.cc/62pLYJb6" width="650" height="500" />

<h2 id="installation">🚀 Como Configurar e Executar</h2>

1. Clone o repositório:

```
git clone https://github.com/lucasrznd/contratos-servicos-api.git
```

2. Navegue até o diretório do projeto

```
cd contratos-servicos-api
```

3. Suba o ambiente utilizando Docker:

```
docker-compose up -d
```

4. Acesse o terminal do container Docker:

```
docker exec -it employment-contract-api sh
```

5. Execute as migrações e seeders no terminal do container

```
npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all
```

<h2 id="endpoints">📋 Endpoints Implementados</h2>

1. Listar todos os Contract de um determinado Profile

#### **Contract Endpoints**
| Método | Endpoint                  | Descrição                              | Corpo da Requisição |
| ------ | ------------------------- | -------------------------------------- | ------------------- |
| GET    | `/contracts`              | Lista todos os contratos               | N/A                 |
| GET    | `/contracts/profile?id=1` | Lista todos os contratos de um Profile | N/A                 |

2. Realizar Deposit para Profile

#### **Deposit Endpoints**
| Método | Endpoint    | Descrição                | Corpo da Requisição                                                     |
| ------ | ----------- | ------------------------ | ----------------------------------------------------------------------- |
| GET    | `/deposits` | Lista todos os depósitos | N/A                                                                     |
| POST   | `/deposits` | Cria um novo depósito    | `{ "clientId": 1, "depositValue": 200, "operationDate": "2024-11-26" }` |

3. Listar todos os Jobs de um Contract que não foram pagos integralmente

#### **Job Endpoints**
| Método | Endpoint                            | Descrição                                                      | Corpo da Requisição |
| ------ | ----------------------------------- | -------------------------------------------------------------- | ------------------- |
| GET    | `/jobs`                             | Lista todos os jobs                                            | N/A                 |
| GET    | `/jobs/not-fully-paid?contractId=1` | Lista os jobs de um Contrato que não foram pagos integralmente | N/A                 |

#### **Profile Endpoints**
| Método | Endpoint                    | Descrição                               | Corpo da Requisição |
| ------ | --------------------------- | --------------------------------------- | ------------------- |
| GET    | `/profiles`                 | Lista todos os profiles                 | N/A                 |
| GET    | `/profiles?type=CLIENT`     | Lista todos os profiles de Clientes     | N/A                 |
| GET    | `/profiles?type=CONTRACTOR` | Lista todos os profiles de Contratantes | N/A                 |

#### **Payment Endpoints**
| Método | Endpoint    | Descrição                 | Corpo da Requisição                   |
| ------ | ----------- | ------------------------- | ------------------------------------- |
| GET    | `/payments` | Lista todos os pagamentos | N/A                                   |
| POST   | `/payments` | Registra um pagamento     | `{ "jobId": 1, "paymentValue": 100 }` |


<h2 id="authors">👨🏻‍💻 Autor</h2>

<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/lucasrznd"><img src="https://avatars.githubusercontent.com/u/101664450?v=4&v=" width="115px;" alt="Lucas Rezende"/><br /><sub><b>Lucas Rezende</b></sub></a><br/><a title="code">💻</a></td>
  </tbody>
</table>
