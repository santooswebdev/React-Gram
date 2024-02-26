# 1 - Setup do projeto

### Iniciando pelo backend

- Criando a pasta backend manualmente.
- Criando o package.json (nosso gerenciador de dependencias/scripts/metadados) | Dentro da pasta backend `npm init -y`.
- Instalando algumas bibliotecas `npm i bcryptjs cors dotenv express express-validator jsonwebtoken mongoose multer` com as respectivas finalidades: manipular senhas, receber requisições da mesma origem, guardar e resgatar com segurança algumas variáveis da aplicação, framework backend utilizado para criação da API, validador que irá facilitar um pouco e manter o código mais limpo, autenticações para termos controles dos usuários, ferramenta para trabalhar com banco de dadose uploader de imagens.
- Intalando biblioteca de desenvolvimento `npm i --save-dev nodemon` (não esqueça de utilizar --save-dev para separarmos dependências do projeto e dependências de desenvolvimento)... falando um pouquinho sobre Nodemon, é uma ferramenta que monitora alterações nos arquivos de um aplicativo Node.js e automaticamente reinicia o servidor toda vez que um arquivo é modificado, facilitando o desenvolvimento e a depuração de aplicativos Node.js.

├── bcryptjs@2.4.3
├── cors@2.8.5
├── dotenv@16.4.5
├── express-validator@7.0.1
├── express@4.18.2
├── jsonwebtoken@9.0.2
├── mongoose@8.2.0
├── multer@1.4.5-lts.1
└── nodemon@3.1.0

- Criando arquivo de inicialização dentro de backend `touch app.js`.
- Programando em "./backend/app.js" (comentários no documento).
- Criado script em package.json, (dentro de scripts) `"server": "nodemon ./app.js"` para rodar nossa aplicação. Logo o comando para iniciar é `npm run server`.
- Executando este comando `npm run server` e estando tudo ok, finalizamos está etapa.

# 2 - Configurando .env

- Criando arquivo ".env".
- Programando em "./backend/app.js" (comentários no documento).
