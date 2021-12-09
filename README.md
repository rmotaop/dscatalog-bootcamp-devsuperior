[![Build Status](https://app.travis-ci.com/rmotaop/dscatalog-bootcamp-devsuperior.svg?token=WHYJdjHqsme838Sczq2S&branch=main)](https://app.travis-ci.com/rmotaop/dscatalog-bootcamp-devsuperior)

# dscatalog-bootcamp-devsuperior

## Project DSCatalog, developer in curse Bootcamp DevSuperior 2.0. ##

## Figma: Screen prototypes

[https://www.figma.com/file/1n0aifcfatWv9ozp16XCrq/DSCatalog-Bootcamp](https://www.figma.com/file/1n0aifcfatWv9ozp16XCrq/DSCatalog-Bootcamp)

## Enghish description - System overview:

DS Catalog is a Full Stack web and mobile application built during Bootcamp Spring React, taught by [DevSuperior](https://devsuperior.com).

The software consists of a product catalog application, where there are three types of permissions, the unauthenticated user, who can only view the products, the user with operator profile, who can also add categories or products, and the administrator user , which in addition to other permissions, can also manage the other users of the application.

In this project, topics such as tests with Junit, integration with image storage on AWS were also worked on, as well as CI/CD and deployment with Docker and AWS.


## Web Application
<div align="center">
  <img src="https://github.com/rmotaop/dscatalog-bootcamp-devsuperior/blob/main/assets/home.PNG" width="600" />
  <img src="https://github.com/rmotaop/dscatalog-bootcamp-devsuperior/blob/main/assets/login.PNG" width="600" />
  <img src="https://github.com/rmotaop/dscatalog-bootcamp-devsuperior/blob/main/assets/operator-screen.PNG" width="600" />
  <img src="https://github.com/rmotaop/dscatalog-bootcamp-devsuperior/blob/main/assets/catalog-products.PNG" width="600" />
  <img src="https://github.com/rmotaop/dscatalog-bootcamp-devsuperior/blob/main/assets/adm-screen.PNG" width="600" />

</div>
## Mobile App
<div align="center">
   <img src="https://github.com/rmotaop/dscatalog-bootcamp-devsuperior/blob/main/assets/mobile-init.png" width="600" />
   <img src="https://github.com/rmotaop/dscatalog-bootcamp-devsuperior/blob/main/assets/mobile-login.png" width="600" /> 
   <img src="https://github.com/rmotaop/dscatalog-bootcamp-devsuperior/blob/main/assets/mobile-list-products.png" width="600" /> 
</div>

# Portugues Brasileiro - Sobre o Projeto:
DSCatalog é uma aplicação full stack web e mobile construída durante o **Bootcamp DevSuperior 2.0** (#BDS2), evento organizado pela [DevSuperior](https://devsuperior.com.br "Site da DevSuperior").

O sistema consiste em uma aplicação de catálogo de produtos, onde há três tipos de permissões, a do usuário não autenticado, que pode apenas visualizar os produtos, a do usuário com perfil operador, que pode também editar/excluir categorias ou produtos e a do usuário administrador, que além das outras permissões, também pode gerenciar os outros usuários da aplicação, inclusive adicionar novos itens/usuários.

Ao acessar o sistema, o usuário cadastrado deve efetuar login, pois apenas usuários logados podem fazer alterações e acessar área administrativa, caso seja Admin. 
Logo após fazer o login, o usuário vai para a listagem de produtos, que mostra os produtos de forma paginada, ordenados alfabeticamente por nome. 
O usuário pode filtrar os produtos por categoria.

Ao selecionar um produto da listagem, é mostrada uma página de detalhes, onde é possível ver todas informações do produto. Se o usuário for usuário Admin, ele pode ainda cadastrar novos itens.

A aplicação também é totalmente responsiva.

Link para a aplicação no netlify -> <a href="https://rmotaop-dscatalog.netlify.app">DSCatalog</a> <br />

# Você pode acessar a aplicação com os usuários:
<p>OPERATOR -> email: alex@gmail.com | senha: 123456</p>
<p>ADMIN -> email: maria@gmail.com | senha: 123456</p>

## Modelo Conceitual
![Modelo Conceitual](https://github.com/rmotaop/dscatalog-bootcamp-devsuperior/blob/main/uml_Dscatalog.PNG)


# Tecnologias utilizadas
## Backend
- Java
- Spring Boot
- JPA / Hibernate
- Maven

## Frontend
- HTML / CSS / TypeScript
- ReactJS
- React Native
- Expo

## Implantação em produção
- Backend: Heroku
- Frontend: Netlify
- Mobile: Expo
- Banco de dados: Postgresql

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/rmotaop/dscatalog-bootcamp-devsuperior

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/rmotaop/dscatalog-bootcamp-devsuperior

# entrar na pasta do projeto front-web
cd front-web

# instalar dependências
yarn

# executar o projeto
yarn start
```

## Mobile
```bash
# clonar repositório
git clone https://github.com/rmotaop/dscatalog-bootcamp-devsuperior

# entrar na pasta do projeto mobile
cd mobile

# instalar dependências
yarn

# executar o projeto
expo start
```

# Autor

<a href="https://www.linkedin.com/in/reginaldo-mota-de-jesus-81248226/">  
  <img
     src="https://avatars.githubusercontent.com/u/51180061?v=4"   
     alt="Reginaldo Mota"
     width="80"
   />
<a/>
