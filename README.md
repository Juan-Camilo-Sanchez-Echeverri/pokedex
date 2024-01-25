<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar

```
yarn install
```

3. Tener Nest CLI instalado

```
npm i -g @nestjs/cli
```

4. Levantar la base de datos

```
docker-compose up -d
```

5. Clone el archivo __.env.template__ y renombrelo a __.env__

6. Llenar las variables de entorno en el archivo __.env__

7. Ejecutar el proyecto en modo desarrollo

```
yarn start:dev
```

8. Reconstruir la base de datos con la semilla

```
http://localhost:3000/api/v2/seed
```

## Stack Utilizado

- MongoDB
- NestJS


## Production Build
1. Crear el archivo __.env.prod__ con las variables de entorno
2. LLenar las variables de entorno de prod
3. Crear la nueva imagen de docker

```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```