{
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "seu_usuario",
  "password": "sua_senha",
  "database": "nome_do_banco",
  "synchronize": true,
  "logging": true,
  "entities": ["src/entities/**/*.ts"],
  "migrations": ["src/migrations/**/*.ts"],
  "subscribers": ["src/subscribers/**/*.ts"],
  "cli": {
    "entitiesDir": "src/entities",
    "migrationsDir": "src/migrations",
    "subscribersDir": "src/subscribers"
  }
}